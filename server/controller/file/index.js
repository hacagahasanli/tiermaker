import FileService from "../../services/FileService.js"
// // import cloudinary from "cloudinary"

// // cloudinary.v2.config({
// //     cloud_name: "dpf8jifws",
// //     api_key: "681573782621628",
// //     api_secret: "LgA6BsUp-v7OHYvQoWsObghqB_w"
// // })
class File {
    async create(req, res) {
        console.log(req.files)
        console.log(req.body)
    }
}

export const FileController = new File()

