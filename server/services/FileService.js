import fs from "fs"
const path = `C:\\Users\\user\\Desktop\\tiermaker-clone\\server\\uploads`
class FileService {
    async createDir(fileName) {
        const filePath = `${path}\\${fileName}`
        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath)
                    return resolve({ message: 'File was created' })
                } else {
                    return reject({ message: "File already exist" })
                }
            } catch (e) {
                return reject({ message: 'File error' })
            }
        }))
    }
}

export default new FileService()