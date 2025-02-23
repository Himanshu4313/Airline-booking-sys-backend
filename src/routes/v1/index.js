import express from "express";

import { information } from '../../controllers/info.controllers.js';
const router = express.Router();

router.get('/info', information );

export default router;