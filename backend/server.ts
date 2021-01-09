import * as express from 'express'
import * as path from 'path'
import { serialize, deserialize } from '../common/utils'
import { ICounter } from '../common/types'

const app = express()
const port = 3000

app.use(require("body-parser").json())
app.use(express.static(path.join(__dirname, '../dist-frontend')))

app.post('/message', (req, res) => {
	const str = JSON.stringify(req.body)
	
	const counter: ICounter = deserialize(str)

	console.log("Count received: ", counter.count)
	
	counter.increment()
	res.send(serialize(counter))
})

app.listen(3000, function () {
	console.log(`Listening on port ${port}...`)
})