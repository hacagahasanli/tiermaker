import { FileController } from "../../controller/index.js";
import multer from "multer";
import { Router } from "express";

const router = new Router()
const upload = multer({ dest: '../../uploads' })
const tierImagesUpload = upload.fields([{ name: 'coverPhoto', maxCount: 1 }, { name: 'tierlistImages', maxCount: 30 }])

router.post('', tierImagesUpload, FileController.create)


export { router }