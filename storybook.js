const express = require('express');

const app = express();

app.use('/storybook', express.static('.out'));
app.get('/', (req, res) => res.redirect('/storybook'));
app.get('/storybook', (req, res) => res.sendFile(__dirname + '/.out/index.html'));

const port = 6007;
app.listen(port, err => {
    if(err) throw err;
    console.log(`> 🚀 [STORYBOOK] Ready on port ${port}...`);
});