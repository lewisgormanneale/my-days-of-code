import { Router } from 'express'

import {
    getDays,
    getDayById
} from '../models/days.js'

const daysRouter = Router()

daysRouter.get('/', async (req, res) => {
    const resultPosts = await getDays()
    res.json({ success: true, payload: resultPosts})
})

daysRouter.get("/:id", async (req, res) => {
    const dayId = req.params.id;
    const day = await getDayById(dayId);

    if (!user) {
        return res.status(404).json({
        success: false,
        reason: `No day with that id ${dayId} was found!`,
        });
    }

    res.json({
        success: true,
        payload: day,
    });
});

export default daysRouter;