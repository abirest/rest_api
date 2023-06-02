const User = require("../model/User");

//Adding New User0
    exports.postUser = async(req,res)=>{
    try{
    //Get name and email from req.body
    const {name,email} = req.body;
    //check if name and email exist in req.body
    if (!name || !email){
        return res.status(400).send({msg:"Please Enter All Fields"})
    }
    //check if email exist in our database
    const user = await User.findOne({email:email})
    if(user){
        return res.status(400).send({msg:"Email Already Exist"})
    }
    const newUser = new User({...req.body})
    const User = await newUser.save()
    return res.status(201).send({msg:"Adding User Success", response : user}
    )} catch (error) {
        console.log(error)
        res.status(500).send({msg:"Sorry We Can Not Adding User"})
    }
    }
    //Find Users from model User
    exports.getUser = async(req,res)=>{
        try {
            const users = await User.find({})
            return res.status(200).send({msg:"Getting Users With Success", response : users})
        } catch (error) {
        res.status(500).send({msg:"Sorry We Can Not Getting User"})
        }
    }

    //Find Users by ID from model User
    exports.getUserByID = async(req,res)=>{
        try {
            const {id} = req.params
            const users = await User.findOne({_id:id})
            console.log("check user",user)
            if (!user){
                return res.status(400).send({msg:"User Not Found"}) 
            }
            return res.status(200).send({msg:"Getting Users  by ID With Success", response : users})
        } catch (error) {
        res.status(500).send({msg:"Sorry We Can Not Getting User by ID"})
        }
    }

    //delete user
    exports.deleteUserByID = async(req,res)=>{
        try {
            const {id} = req.params
           await User.deleteOne({_id:id})
            
            return res.status(200).send({msg:"deleted Users  by ID With Success"})
        } catch (error) {
        res.status(500).send({msg:"Sorry We Can Not delete User by ID"})
        }
    }

    exports.updateUser = async(req,res)=>{
        try {
            await User.updateOne({_id:req.params.id} , {$set:{...req.body}})
            res.status(200).send({msg:"Updated user with success"})
        } catch (error) {
            console.log(error)
            res.status(500).send({msg:"can not update user"})
        }
    }
    
