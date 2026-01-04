import express from 'express'

import { PORT } from '../config/env.js'

const app = express()

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(PORT, () => console.log(`App and running on port ${PORT}`))
