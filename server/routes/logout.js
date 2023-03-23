import { Router } from "express";
import LogoutController from "../controller/LogoutController.js";

const router = new Router()

router.get('', LogoutController.logoutHandler)

export { router }