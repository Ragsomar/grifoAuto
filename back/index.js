const express = require('express')
const app = express()
const port = 3000
const connection = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get('/', (request, response) => {
	response.send('Welcome to Grifo Auto server')
})

app.get('/home', (request, response) => {
	connection.query('SELECT * FROM photo', (err, results) => {
		if (err) {
			console.log(err)
			response.status(500).send('Erreur retrieving ')
		} else {
			response.json(results)
		}
	})
})
app.get('/', (request, response) => {
	connection.query('SELECT * FROM ', (err, results) => {
		if (err) {
			console.log(err)
			response.status(500).send('Erreur retrieving ')
		} else {
			response.json(results)
		}
	})
})

app.listen(port, (err) => {
	if (err) {
		throw new Error('Something bad happened ...')
	}
	console.log(`Server is listening on ${port}`)
})
