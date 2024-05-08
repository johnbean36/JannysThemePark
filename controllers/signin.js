
const User = require('../models/User')
import {hashPassword, comparePassword, createToken} from require('../middleware/index')

async function auth(req, res, next){
    try{
        const { username, passwordDigest } = req.body;
        let hashedPassword = hashPassword(passwordDigest);
        let user = await User.find({username})
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        if(comparePassword(hashedPassword, user.password)){
            payload = {
                username: user.username
            }
            let token = jwt.sign(payload, APP_SECRET);
            return res.send({user: payload, token});
        }
        else{
            return res.status(401).json({ error: 'Invalid password' });
        }
    }catch(error){
        res.status(400).json(error);
    }
}

export default auth