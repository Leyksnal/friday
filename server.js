require('dotenv').config()
const express = require ('express')
port = process.env.PORT || 1111

const app = express()
app.use(express.json())
app.get('/', (req, res)=>{
    res.status(200).json({
        message: `Endpoit is working`
    })
})
app.listen(port, ()=>{
    console.log(`runnnig on port: ${port}`)
})