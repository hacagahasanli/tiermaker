import { Router } from "express";
import { AuthController } from "../../controller/index.js";
import { userValidation } from "../../middleware/index.js";

const router = new Router()

router.post('/registration', userValidation, AuthController.registration)
router.post('/login', userValidation, AuthController.login)

export { router }