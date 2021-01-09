import * as express from 'express'
import * as path from 'path'

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../dist-frontend')))

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})