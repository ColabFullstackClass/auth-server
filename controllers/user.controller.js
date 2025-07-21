import userService from "../services/user.service.js";
class UserController{
    register=async (req,res )=>{
        if(!req.body) res.status(400).json({
            msg:"please fill in required fields "
        })
        const {username,email,password}=req.body;
        if(!username || !email || !password ) return res.status(422).json({msg:'please fill in required fields'})
        if(password.length < 6 )return res.status(400).json({msg:"password length should be greater than 6"});
        const user=await userService.register(email,password,username);
        return res.status(201).json({
            msg:'user registered sucessfully',
            data:{
                ...user
            }
        })

    }
    login=(req,res)=>{

    }
}


export default Object.freeze(new UserController())