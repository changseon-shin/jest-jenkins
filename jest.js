const express = require('express');
const open = require('open');

const app = express();

app.use('/coverage', express.static(__dirname + '/coverage'));
app.get('/', (req, res) => res.redirect('/coverage/lcov-report/index.html'));

const port = 9000;
app.listen(port, err => {
    if(err) throw err;
    console.log(`> 🚀 [JEST] Ready on port ${port}...`);
});

// TODO. local에서 파일 path 넘겨서 띄우는게 맞는지 확인
open('http://localhost:9000/coverage/lcov-report/index.html');