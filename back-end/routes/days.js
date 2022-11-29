import { Router } from 'express'

import {
    getDays
} from '../models/days.js'
const daysRouter = Router()
export default daysRouter


daysRouter.get('/', async function (req, res) {
        const resultPosts = await getDays()
        res.json({ success: true, payload: resultPosts})
})