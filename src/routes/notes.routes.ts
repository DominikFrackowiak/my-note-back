import { Router } from 'express'

const notesRouter: Router = Router()

notesRouter.get('/', (req, res) =>
	res.send({ title: 'GET my notes (with filters)' })
)
notesRouter.post('/', (req, res) =>
	res.send({ title: 'CREATE note for current user' })
)

notesRouter.get('/:id', (req, res) => res.send({ title: 'GET my note by id' }))
notesRouter.patch('/:id', (req, res) =>
	res.send({ title: 'UPDATE fields of my note' })
)
notesRouter.delete('/:id', (req, res) =>
	res.send({ title: 'SOFT DELETE my note' })
)

// opcjonalnie:
notesRouter.post('/:id/restore', (req, res) =>
	res.send({ title: 'RESTORE note from trash' })
)
notesRouter.post('/:id/archive', (req, res) =>
	res.send({ title: 'ARCHIVE note' })
)
notesRouter.post('/:id/unarchive', (req, res) =>
	res.send({ title: 'UNARCHIVE note' })
)

export default notesRouter
