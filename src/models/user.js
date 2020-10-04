import mongosse, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

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
  return this.findeOn({ username });
};

const User = mongosse.model('User', UserSchema);

export default User;
