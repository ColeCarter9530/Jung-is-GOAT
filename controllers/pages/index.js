// made for the sake of learning - Jung 2023 timestamp 01:01:09
const router = require('express').Router();
const { User } = require('../../models');
router.get('/', (req, res) => {
    res.render('homepage');
});

// localhost:3001/dashboard
router.get('/dashboard/:user_id', async (req, res) => {
    const userData = await User.findByPk(req.params.user_id);
    console.log("This is an ugly sequelize object", userData);

    const actualUserdata = userData.get({ plain: true });
    console.log("This is so handsome!", actualUserdata)
    res.render('dashboard', actualUserdata);
});

module.exports = router;