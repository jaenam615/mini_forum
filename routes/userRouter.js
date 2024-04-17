const express = require('express');
const router = express.Router();
const User = require("../schemas/user");



//회원가입 - Working
router.post('/signup', async (req,res)=>{
    console.log(req);
    const {username, password, name} = req.body;
    try{
        const user = new User({
            username: username,
            password: password,
            name: name
        })
        await user.save();
        res.json({ message: "signed up" });
    } catch (err){
        console.log(err);
        res.json({ message: false });
    }
});

//로그인
router.post('/login', async (req, res)=>{
    const{ username, password } = req.body;
    try{
        // const user = await User.findOne({username: username});
        const user = await User.find({username : username});
        if (!user) {
            return res.send("no such user");
        }
        if (password !== user.password){
            console.log('failed');
            return res.render('failed');
        } 
        // res.render('users/show', { user });
        console.log('successfully logged in');
        res.json({ message: "logged in" })  
        // res.render('users/show', { user }); 
    } catch (err) {
        console.log(err);
        res.send(err);
    }
})

//조회
router.get('/:id', async (req, res)=>{
    const {id} = req.params;
    try{
        const user = await User.find( { _id : id });
        // res.render('/users/show', {user});
        res.json(user);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;