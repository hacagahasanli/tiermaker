import FileSchema from "../../models/File.js"
import { config } from "dotenv"
config()

class File {
    async create(req, res) {
        try {
            const { templateName, templateDescription, selectImageOrientation, selectCategory } = req.body
            const { coverPhoto, tierlistImages } = req.files

            const coverPhotoPath = process.env.IMAGE_SUB_URL + coverPhoto[0]?.path.split('\\')[1]

            const tierListPaths = tierlistImages?.map(({ path }) => {
                if (path.length > 0) {
                    const imagePath = `${process.env.IMAGE_SUB_URL}${path.split("\\")[1]}`
                    return imagePath
                }

            })
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
            res.json(file)
        } catch (err) {
            res.status(500).json({ message: err.message })
            console.log(err)
        }
    }
    async getFiles(req, res) {
        const pageSize = 2;
        const currentPage = req.query.page || 1;
        FileSchema.countDocuments({ owner: req.userId?.id })
            .then(totalCount => {
                FileSchema.find({ owner: req.userId?.id })
                    .skip((pageSize * currentPage) - pageSize)
                    .limit(pageSize)
                    .then(allFiles => {
                        const files = !allFiles.length ?
                            { allFiles: [], message: 'No more tierlists' }
                            : { allFiles, message: 'TierLists fetched successfully' }
                        res.status(200).json({ ...files, totalCount })
                    })
                    .catch(err => {
                        res.status(500).json({ message: err.message })
                    })
            }).catch(err => {
                res.status(500).json({ message: err.message })
            })
    }
}

export const FileController = new File()

