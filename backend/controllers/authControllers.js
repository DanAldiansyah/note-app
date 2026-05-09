import response from "../middlewares/response.js";
import User from "../models/userModels.js";
import jwt from "jsonwebtoken";

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

const signUp = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);
    const payload = {
      userId: user._id,
      username: user.username,
    };
    const token = createToken(payload);

    response(res, 201, true, "Daftar Berhasil", token);
  } catch (error) {
    response(res, 400, false, "", null, error.message);
  }
};

const signIn = async (req, res) => {
  const {username, password} = req.body

  try {
    const user = await User.signin(username, password)
    const payload = {
      userId : user._id,
      username : user.username
    }
    const token = createToken(payload)
    response(res, 200, true, "Login Berhasil", token)
  } catch (error) {
    response(res, 400, false, "", null, error.message)
  }
};

export default { signUp, signIn };
