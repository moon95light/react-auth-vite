const User = require('../models/user')
const { hashPassword } = require('../helpers/auth')

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        // Check if name was entered 
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };
        // Check is password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be more 6 charscters'
            })
        };
        //Check email
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error: 'Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            name, 
            email, 
            password: hashedPassword,
        })

        return res.json(user)
        
    } catch(error) {
        console.log(error)
    }
}


const loginUser = async(req, res) => {
    
}

module.exports = {
    test,
    registerUser,
    loginUser
}