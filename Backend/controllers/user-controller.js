const UserModel = require("../models/Usermodel");


const addUser = async (req, res) => {
    try {
        await UserModel.create(req.body);
        res.json({ sucess: true, message: "Signup Sucessfully" })
    } catch (error) {
        res.json({ sucess: false, message: "Cannot Signup" });
    }
}


const doLogin = async (req, res) => {
    try {

        let user = await UserModel.findOne({ email: req.body.useremail, password: req.body.userpassword });
        console.log(user);
        if (user) {
            res.json({
                success: true, message: "Login Successfull"
            })
        } else {
            res.json({ message: "login failed" })
        }
    } catch (error) {
        res.json({
            success: false, message: "Login Failed Server Error"
        })
    }
}










module.exports = {
    addUser,
    doLogin,
}