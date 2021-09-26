const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

const router = express.Router();
const pool = require('../modules/pool');

/** ---------- EXPRESS ROUTES ---------- **/
router.get('/feedback', (req, res) => {
    let queryText = 'SELECT * FROM "feedback" ORDER BY "date";';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('Error in /GET:', error);
        res.sendStatus(500);
    });
});

router.post('/feedback', (req, res) => {
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

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});