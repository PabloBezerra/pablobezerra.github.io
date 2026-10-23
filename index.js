import express from 'express'

const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/projets', (req,res)=>{
    res.send('hello Word')
})

app.listen(port,()=>{
    console.log('Running in port' + port)
})