import FileSchema from "../../models/File.js"
import UserSchema from "../../models/User.js"
import { config } from "dotenv"
import { response } from "../../helper/response.js"
import { v4 } from "uuid"

config()
class File {
    async create(req, res) {
        try {
            const ip = req.ip
            const { templateName, templateDescription, selectImageOrientation, selectCategory } = req.body
            const { tierlistImages, coverPhoto } = req.files

            const coverPhotoPath = process.env.IMAGE_SUB_URL + coverPhoto[0]?.path.split('\\')[1]

            const tierListPaths = tierlistImages?.map(({ path }) => {
                if (path.length > 0) {
                    const imagePath = { uri: `${process.env.IMAGE_SUB_URL}${path.split("\\")[1]}`, id: v4() }
                    return imagePath
                }
            })
            console.log(req.userId.userId, "req.userId.userId");
            console.log(req.userId, "req.userId");

            await UserSchema.findOneAndUpdate({ _id: req.userId.userId }, { lastRequest: Date.now(), ip })

            const file = new FileSchema({
                templateName,
                templateDescription,
                selectImageOrientation,
                selectCategory,
                coverPhoto: coverPhotoPath ?? '',
                tierlistImages: tierListPaths ?? [],
                owner: req.userId?.id
            })
            await file.save()
            res.status(200).json(file)
        } catch (err) {
            response(res, 500, { message: err.message })
            console.log(err)
        }
    }
    async getFiles(req, res) {
        const pageSize = 56;
        const currentPage = req.query.page || 1;
        const sortType = req.query.page ?? 'desc'

        FileSchema.countDocuments()
            .then(totalCount => {
                FileSchema.find()
                    .sort({ createdAt: sortType })
                    .skip((pageSize * currentPage) - pageSize)
                    .limit(pageSize)
                    .then(allFiles => {
                        const files = !allFiles.length ?
                            { allFiles: [], message: 'No more tierlists' }
                            : { allFiles, message: 'TierLists fetched successfully' }

                        res.status(200).json({ ...files, totalCount })
                    })
                    .catch(err => response(res, 500, { message: err.message }))
            }).catch(err => response(res, 500, { message: err.message }))
    }
}

export const FileController = new File()

