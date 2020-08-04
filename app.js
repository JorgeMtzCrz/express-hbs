const express = require('express')

const app = express()

app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

app.get('/', (req, res)=>{
  let data = {
    name: 'Ironhack',
    course: '<span>Web Dev Jun19</span>',
    lastname: 'Yolo',
    address: {
      street: "Your heart",
      number: 87
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  }
  res.render('index',data)

})

app.get('/about', (req, res)=>{
  res.render('about')

})

app.listen(3000, ()=>{
  console.log('listen on: http://localhost:3000')
})