import { Router } from "express";
import { AuthController } from "controller";

const router = new Router()

router.post('/registration', AuthController)