import { Router } from "express";

const router = new Router()

router.post('', (req, res) => {
    console.log(req);
})

export { router }