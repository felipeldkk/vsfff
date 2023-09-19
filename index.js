const express = require('express')
const app = express()

app.get("aa",(req,res) => {
    res.send("o caralho")
})

app.listen(process.env.PORT || 3000,() => console.log("ta funcionado"))