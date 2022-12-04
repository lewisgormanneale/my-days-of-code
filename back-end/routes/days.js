import { Router } from 'express'

import {
    getDays,
    getDayById,
    getDayByUserId,
    createDay,
    patchDay,
    deleteDay
} from '../models/days.js'

const daysRouter = Router()

daysRouter.get('/', async (req, res) => {
    const resultdays = await getDays()
    res.json({ success: true, payload: resultdays})
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

daysRouter.get("/user/:id", async (req, res) => {
    const userId = req.params.id;
    const days = await getDayByUserId(userId);
    if (!days) {
        return res.status(404).json({
        success: false,
        reason: `No days with that user_id ${userId} were found!`,
        });
    }
    res.json({
        success: true,
        payload: days,
    });
});

daysRouter.post("/", async function (req, res) {
    const day = req.body;
    const result = await createDay (day);
    res.json({ success: true, payload: result });
});
  
daysRouter.patch("/:id", async function (req, res) {
    const day = req.body;
    const id = req.params.id;
    const result = await patchDay(id, day);
    res.json({ success: true, payload: result });
});

daysRouter.delete("/:id", async function (req, res) {
    const id = req.params.id;
    const result = await deleteDay(id);
    res.status(200).json({ success: true, payload: result });
});

export default daysRouter;