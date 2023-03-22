import { FileController } from "../../controller/index.js";
import { Router } from "express";

const router = new Router()

router.post('', FileController.create)


export { router }