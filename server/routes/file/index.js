import { FileController } from "../../controller/index.js";
import multer from "multer";
import { Router } from "express";
import path from "path";

const router = new Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `uploads/`)
    },
    filename: function (req, file, cb) {
        console.log(file.originalname, "FILE ORIGINALNAME");
        console.log(file.fieldname, "FILE FIELDNAME");
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

console.log(tierImagesUpload, "TIER IMAGES UPLOAD");

router.post('/add-tier-list', tierImagesUpload, FileController.create)
router.get('/get-all-tierlists', FileController.getFiles)

export { router }