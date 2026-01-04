import { Router } from 'express'

const notesRouter: Router = Router()

notesRouter.get('/', (req, res) => res.send({ title: 'GET all notes' }))

notesRouter.get('/:id', (req, res) => res.send({ title: 'GET note' }))

notesRouter.post('/:id', (req, res) => res.send({ title: 'CREATE note ' }))

notesRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE note ' }))

notesRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE note ' }))

export default notesRouter
