// made for the sake of learning - Jung 2023 timestamp 01:01:09
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

module.exports = router;