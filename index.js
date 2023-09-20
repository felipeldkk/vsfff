const express = require('express')
const app = express()

app.get("/aa",(req,res) => {
    res.send({aaaaaaaaa:"vai se fera"})
})

app.listen(process.env.PORT || 3000,() => console.log("ta funcionado"))