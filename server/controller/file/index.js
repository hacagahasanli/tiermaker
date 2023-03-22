import FileSchema from "../../models/File.js"
import UserSchema from "../../models/User.js"

class File {
    async create(req, res) {
        try {
            const { templateName, templateDescription, selectImageOrientation, selectCategory } = req.body
            const { coverPhoto, tierlistImages } = await req.files
            const users = await UserSchema.find()
            const tierListPaths = tierlistImages?.map(({ path }) => path)
            const file = new FileSchema({
                templateName,
                templateDescription,
                selectImageOrientation,
                selectCategory,
                coverPhoto: coverPhoto[0]?.path,
                tierlistImages: tierListPaths,
                owner: users[0]._id
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
            const users = await UserSchema.find()
            const files = await FileSchema.findOne({ owner: users[0]._id })
            res.json(files)
        } catch (err) {
            res.status(500).json({ message: err.message })
            console.log(err)
        }
    }
}

export const FileController = new File()

