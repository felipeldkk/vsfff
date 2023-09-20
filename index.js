const express = require('express')
const mysql = require('mysql2')
const app = express()

app.get("/aa",(req,res) => {
    res.send({aaaaaaaaa:"seguinte tiago isso aqui é uma api hospedada definitivamente e ela é capaz de suprir todas as nossas necessidades amanha eu te conto com detalhes como isso funciona simplesmente eu to chorando eu finalmente aprendi oq eu precisava pra fazer isso acontecer"})
})

app.listen(process.env.PORT || 3000,() => console.log("ta funcionado"))