import express from "express";

const router = express.Router();

router.get('/info', (req , res) => {
     return res.json({ message: 'Hello, World!' });
});

export default router;