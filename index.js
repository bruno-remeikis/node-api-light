const express = require('express')
const app = express()

const port = 3000

app.get("/health", (req, res) => {
    res.json("API rodando com sucesso!");
});

app.listen(port, () => {
    console.log(`Servidor Node rodando na porta ${port}!`)
})