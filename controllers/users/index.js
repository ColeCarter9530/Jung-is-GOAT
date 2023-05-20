const router = require("express").Router();
const { User } = require('../../models')

// localhost:3001/users
router.get('/', (req, res) => {
    res.json("From the users folder!");
})
//  localhost:3001/users/sign-up
// i want to write a post request that will create a new user
router.post("/sign-up", async (req, res) => {
    // const notFancyBody = req.body;
    // const nameOfUser = notFancyBody.username;
    // const userPassword = notFancyBody.password;
    // const userEmail = notFancyBody.email;     
    
    // // object destructuring
    // const { username, password, email } = req.body;
    // const userData = await User.create({
    //     username: username,
    //     password: password,
    //     email: email
    // });

    // Same as above, but the properties are aliased
    const { username:UserInputUsername, password:UserInputPassword, email:UserInputEmail } = req.body;
    const userData = await User.create({
        username: UserInputUsername,
        password: UserInputPassword,
        email: UserInputEmail
    });
    res.json(userData);
    // res.json(notFancyBody);
});



module.exports = router;