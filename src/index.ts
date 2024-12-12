import 'reflect-metadata'
import express from 'express';

const app = express()
const PORT = 3000

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})


//https://github.com/rocketseat-education/nlw-04-nodejs/blob/main/package.json