import express from 'express'
import { PORT } from './config/env.js'
import authRouter from './routes/auth.routes.js'
import notesRouter from './routes/notes.routes.js'
import userRouter from './routes/user.routes.js'


const app = express()

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/notes', notesRouter)
app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
	res.send('Hello world')
})

app.listen(PORT, () => console.log(`App and running on port ${PORT}`))
