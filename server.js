const express = require('express');
const path = require('path');

const app = express();
app.use((_, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen('3000');