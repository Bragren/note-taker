const express = require('express');
const fs = require('fs');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})