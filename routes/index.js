const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('at the main route');

    res.render("home");
})

router.get('/Games', (req, res) => {
    console.log('at games route');

    res.json();

})

module.exports = router;