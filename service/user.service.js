import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import config from "../config/config.js";
class UserService{

  constructor(){

  }
  async register(email,password,username){
/*
1. get email, password /
2. check if already registered /
3. hashpassword, /
4. create user / 
5. create access Token /
6. send response /
*/
let doesUserExist=!!await User.findOne({email});
if(doesUserExist) throw new Error('user already registered');
const salt = await bcrypt.genSalt(10);
const hash = await bcrypt.hash(password,salt)
let user= new User({email,password:hash,username})
await user.save();
const token=config.jwt.accessToken
const accessToken = jwt.sign({id:user._id},token.secret,{expiresIn:token.exp})
console.log(accessToken)
return {
    user,
    tokens:{
        accessToken:{
            token:accessToken,
            exp:token.exp
        }
    }
}
  }



}


export default UserService;


