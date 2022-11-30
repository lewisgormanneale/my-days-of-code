import { Router } from 'express'

import {
    getUsers,
    getUserById
} from '../models/users.js'

const usersRouter = Router()

usersRouter.get('/', async function (req, res) {
        const resultUsers = await getUsers()
        res.json({ success: true, payload: resultUsers})
});

usersRouter.get("/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);

    if (!user) {
        return res.status(404).json({
        success: false,
        reason: `No day with that id ${userId} was found!`,
        });
    }

    res.json({
        success: true,
        payload: user,
    });
});

export default usersRouter;