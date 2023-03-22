import { FileController } from "../../controller/index.js";
import multer from "multer";
import { Router } from "express";
import path from "path";
import fs from "fs"

const router = new Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `uploads/`)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
})

const tierImagesUpload = upload.fields([
    { name: 'coverPhoto', maxCount: 1 },
    { name: 'tierlistImages', maxCount: 30 },
])

router.post('', tierImagesUpload, FileController.create)
router.get('/get-files', FileController.getFiles)

export { router }