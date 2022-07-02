const path = require('path');
const router = require('express').Router();
const fs = require('fs');

const {v4: uuidv4} = require('uuid');

const notes = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let noteFile = notes;
    res.json(noteFile);
});

router.post('/notes', (req, res) => {
    let noteFile = notes;
    let { title, text } = req.body;
    let newNote = { title, text, id: uuidv4() };

    noteFile.push(newNote);

    const writeToFile = fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(noteFile)
    );

    res.json(writeToFile);

});

module.exports = router;