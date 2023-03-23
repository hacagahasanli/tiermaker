import { Router } from "express";
import RefreshTokenController from "../controller/RefreshTokenController.js";

const router = new Router()

router.get('', RefreshTokenController.refreshTokenHandler)

export { router }
