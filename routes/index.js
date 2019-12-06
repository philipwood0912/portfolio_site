const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    console.log('at the main route');

    res.render("home");
})

router.get('/Games', (req, res) => {
    console.log('at games route');

    let query = `SELECT ID, Name, Image FROM tbl_projects WHERE Type = "Games"`;
    
    sql.query(query, (err, result) => {
        if(err){ throw err; console.log(err); }
        console.log(result);
        res.json(result);
    })
})

router.get('/Data-Viz', (req, res) => {
    console.log("at data-viz route");

    let query = `SELECT ID, Name, Image FROM tbl_projects WHERE Type = "Data-Viz"`;
    
    sql.query(query, (err, result) => {
        if(err){ throw err; console.log(err); }
        console.log(result)
        res.json(result);
    })
})

router.get('/Web', (req, res) => {
    console.log("at web route");

    let query = `SELECT ID, Name, Image FROM tbl_projects WHERE Type = "Web"`;
    
    sql.query(query, (err, result) => {
        if(err){ throw err; console.log(err); }

        res.json(result);
    })
})

router.get('/:id', (req, res) => {
    console.log("at portfolio route");

    let query = `SELECT * FROM tbl_projects WHERE ID = ${req.params.id}`;

    sql.query(query, (err, result) => {
        if(err){ throw err; console.log(err); }
        result[0].Builds = result[0].Builds.split(',').map(function(item){item = item.trim();return item;});
        console.log(result[0]);

        res.json(result[0]);
    })
})

module.exports = router;