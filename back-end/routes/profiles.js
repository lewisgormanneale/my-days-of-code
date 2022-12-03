import { Router } from 'express'

import {
    getProfiles,
    getProfileById
} from '../models/profiles.js'

const profilesRouter = Router()

profilesRouter.get('/', async function (req, res) {
        const result = await getProfiles()
        res.json({ success: true, payload: result})
});

profilesRouter.get("/:id", async (req, res) => {
    const userId = req.params.id;
    const profile = await getProfileById(userId);

    res.json({
        success: true,
        payload: profile,
    });
});

export default profilesRouter;