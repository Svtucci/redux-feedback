const express = require('express');
const router = express.Router();
const pool = require ('../modules/pool');

router.get('/', (req, res) => {
    console.log('In GET Request');
    let queryText = 'SELECT * from "feedback"';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);';
    let { feeling, understanding, support, comments } = req.body;
    pool.query(queryText, [feeling, understanding, support, comments]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error); 
        res.sendStatus(500); 
    })
}); 

// DELETE ROUTER MAY NOT BE NEEDED DURING SETUP 