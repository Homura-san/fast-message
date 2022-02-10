const express = require('express')
const app = express()
const moment = require('moment')
const exphbs = require('express-handlebars')
// Porta para heroku
const PORT = process.env.PORT || 3000
const connection = require('./mysqlFile')
const db = require('mysql').createPool(connection)

app.use(express.json())
app.use('/public', express.static('public'))
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main', extname: 'hbs'
}))

app.set('view engine', '.hbs')

app.get('/', (req, res) => {
  
  db.query("SELECT * FROM chat", (error, results) => {
    if(error) return res.status(500).send(error)
    res.render('home', {results})
  })
})

app.post('/chat', (req, res) => {
  moment.locale('pt-br')
  var user = {...req.body}
  try {
  if(!user.nome) throw 'Favor informe o nome do usuário'
  if(!user.conteudo) throw 'Favor informe a mensagem!'
  db.query(`INSERT INTO chat 
      (conteudo, data, nome) 
        VALUES 
      ("${user.conteudo}", "${moment().format('llll')}", "${user.nome}")`, (error) => {
    if(error) return res.status(500).send(error.sqlMessage)
    res.status(200).send()
  })
  } catch (err) {
    res.status(500).send(err)
  }
})

app.delete('/del', (req, res) => {
  db.query(`DELETE FROM chat`, (error) => {
    if(error) return res.status(500).send(error)
    res.status(200).send()
  })
})

app.delete('/del/:id', (req, res) => {
  var id = req.params.id
  db.query(`DELETE FROM chat WHERE id = ${id}`, (error) => {
    if(error) return res.status(500).send(error)
    res.status(200).send()
  })
})

app.listen(PORT, () => {
  console.log("Backend executando...")
})