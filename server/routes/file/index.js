import { FileController } from "controller";
import { Router } from "express";
const t = 10;

const router = new Router()

router.post('', FileController)

export { router }