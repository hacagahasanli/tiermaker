import { AuthController } from "../../controller/index.js";
import { Router } from "express";

const router = new Router()

router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)

export { router }