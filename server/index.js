var express = require('express')
var app = express()
var cors = require('cors')
var logger = require('morgan')
var mongoose = require('mongoose')
var routes = require('./src/routes')

var corsOptions = {
    origin:'http://localhost:3000',
    credentials:true
}
const CONNECT_URL = 'mongodb://localhost:27017/yuminbc'
mongoose.connect(CONNECT_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("mongodb connected ...."))
    .catch(e => console.log(`failed to connect mongodb: ${e}`))

app.use(cors(corsOptions))
app.use(express.json()) //reqyest body 파싱
app.use(logger('tiny'))
app.use("/api",routes)

app.get('/hello', (req, res) => { 
    // URL 응답 테스트 
    res.send('hello bookcafe !') 
})
app.use((req,res,nest)=>{
    res.status(404).send("Sorry can't find page")
})
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("something is broken on server!!!!!!!!!!!!!")
})

app.listen(5000,()=>{
    console.log('server is runnimg on port 5000 ...')
})