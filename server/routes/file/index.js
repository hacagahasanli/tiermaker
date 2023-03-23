import { FileController } from "../../controller/index.js";
import multer from "multer";
import { Router } from "express";
import path from "path";
import { authMiddleware } from "../../middleware/auth/index.js";

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
    { name: 'tierlistImages', maxCount: 22 },
])

router.post('/add-tier-list', tierImagesUpload, authMiddleware, FileController.create)
router.get('/get-all-tierlists', authMiddleware, FileController.getFiles)

export { router }