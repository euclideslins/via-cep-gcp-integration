const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { fetchEnderecoByCep } = require('../services/viacep')

router.post('/endereco', async (req, res) => {
    console.log(req.body);
    
    const { cep } = req.body;
    console.log(cep);
    
    try {
        const endereco = await fetchEnderecoByCep(cep);
        
        const [result] = await db.query(
            `INSERT INTO endereco (cep, logradouro, bairro, estado, cidade) VALUES (?,?,?,?,?)`,
            [cep, endereco.logradouro, endereco.bairro, endereco.uf, endereco.localidade]
        );

        res.status(201).json({id :result.insertId, ...endereco });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/endereco', async (req, res) => {
    try {
        console.log("oi");
        
        const [rows] = await db.query('SELECT * FROM endereco');
        res.json(rows);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = router;