const express = require('express');
const path = require('path');
const app = express();

const DIST_FOLDER = path.join(__dirname, 'dist/frontend/browser');


app.use(express.static(DIST_FOLDER));

app.get('./*', (req,res) => {
    res.sendFile(path.join(DIST_FOLDER, 'index.html'));
});

const PORT = 9090;
app.listen(PORT, ()=> {
    console.log(`Servidor rodando na porta ${PORT}`)
})