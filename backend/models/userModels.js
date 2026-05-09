import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.statics.signup = async function (username, password) {
  const exist = await this.findOne({ username });

  if (!username || !password) {
    throw Error("username dan password tidak boleh kosong");
  }

  if (password.length < 8) {
    throw Error("password minimal 8 karakter");
  }

  if (exist) {
    throw Error("username sudah digunakan");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = this.create({ username, password: hashedPassword });

  return user;
};

userSchema.statics.signin = async function (username, password) {
  const user = await this.findOne({ username });
  const match = await bcrypt.compare(password, user.password);
  
  if (password.length < 8 || !password) {
    throw Error("password minimal 8 karakter");
  }

  if (!user || !match) {
    throw Error("Username Atau Password Salah");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
