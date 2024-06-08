const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_SECRET } = require("../konst");

const createSession = async (email, password) => {
  try {
    // Caută utilizatorul după email
    const user = await User.findOne({ where: { email } });

    // Verifică dacă utilizatorul există
    if (!user) {
      return { err: "USER_NOT_FOUND", token: null };
    }

    // Compară parola hash-uită din baza de date cu parola introdusă
    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) {
      return { err: "PASSWORD_MISMATCH", token: null };
    }

    // Generează token JWT
    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET
    );

    return { token };
  } catch (err) {
    console.error(err);
    return null;
  }
};

const SessionService = {
  createSession,
};

module.exports = SessionService;
