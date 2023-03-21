import { FileController } from "controller";
import { Router } from "express";

const router = new Router()

router.post('', FileController)

export { router }