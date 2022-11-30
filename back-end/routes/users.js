import { Router } from 'express'

import {
    getUsers
} from '../models/users.js'

const usersRouter = Router()

usersRouter.get('/', async function (req, res) {
        const resultUsers = await getUsers()
        res.json({ success: true, payload: resultUsers})
})

export default usersRouter;