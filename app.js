const express=require('express')
const app=express()
const path=require('path')

const user=require('./routes/userRoutes')
const bodyParser=require('body-parser')


app.set('view engine','ejs')
app.set('views','views')
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',user)

app.listen(5000)

