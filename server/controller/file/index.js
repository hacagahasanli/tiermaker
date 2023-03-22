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
        try {
            const files = await FileSchema.findOne({ owner: req.userId?.id })
            res.json(files)
        } catch (err) {
            res.status(500).json({ message: err.message })
            console.log(err)
        }
    }
}

export const FileController = new File()

