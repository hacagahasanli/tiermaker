class File {
    async create(req, res) {

    }
}

export const FileController = new File()

// const fileSchema = new mongoose.Schema({
//     name: {
//       type: String,
//       required: true
//     },
//     items: [{
//       name: {
//         type: String,
//         required: true
//       },
//       image: String,
//       category: {
//         type: String,
//         enum: ['food', 'travel', 'nature', 'art']
//       }
//     }]
//   });

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     createdLists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'File' }]
//   });

//   const User = mongoose.model('User', userSchema);

// const fileSchema = new mongoose.Schema({
//     filename: { type: String, required: true },
//     category: { type: String, required: true },
//     imageUrl: { type: String, required: true },
//     owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
//   });

//   const File = mongoose.model('File', fileSchema);


// const user = new User({
//     username: 'myUsername',
//     email: 'myEmail',
//     password: 'myPassword'
//   });

//   user.save((err, user) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const file = new File({
//         filename: 'myFilename',
//         category: 'myCategory',
//         imageUrl: 'myImageUrl',
//         owner: user._id
//       });

//       file.save((err, file) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log('File saved successfully!');
//         }
//       });
//     }
//   });


// User.findById(userId)
//     .populate('createdLists')
//     .exec((err, user) => {
//         if (err) {
//             console.error(err);
//         } else {
//             console.log(user.createdLists);
//         }
//     });