import { Router } from 'express'

import {
    getDays
} from '../models/days.js'

const daysRouter = Router()

daysRouter.get('/', async function (req, res) {
        const resultPosts = await getDays()
        res.json({ success: true, payload: resultPosts})
})

export default daysRouter