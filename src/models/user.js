import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

// 인스턴스 메서드
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

// 스태틱 메서드
UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

// 입력할 데이터에서 hashedPassword 필드 제거하는 함수
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

// JWT를 사용하여 토큰 발급
UserSchema.methods.generateTocken = function () {
  // 첫번째 파라미터에는 토큰 안에 집어넣고 싶은 데이터를 넣는다.
  const token = jwt.sign(
    {
      _id: this.id,
      usename: this.username,
    },
    process.JWT_SECRET, // 두번째 파라미터에는 JWT 암호를 넣는다.
    {
      expiresIn: '7d', // 7일 동안 유효함
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);

export default User;
