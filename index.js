const express = require('express');
const env = require('dotenv').config();

const app = express();

app.use(express.json({ extended: true }));

app.get('/api', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== nodejs-project1 =="
    });
});
app.get('/', (req, res) => {
    res.json(
    {
        "status": true,
        "code": 200,
        "message": "SUCCESS",
        "api": "== nodejs-project1 =="
    });
});

app.listen(3000, () => {
    console.log("== nodejs-project1 running ==");
    console.log(`server listening at http://localhost:3000`);
});