const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "date";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in /GET:', error);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    let newEntry = req.body;
    let queryText = `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1 $2 $3 $4);`;
    pool.query(queryText).then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('Error in /POST:', error);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    let deleteID = req.params.id;
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [deleteID]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('Error in /DELETE:', error);
        res.sendStatus(500);
    })
});

module.exports = router;