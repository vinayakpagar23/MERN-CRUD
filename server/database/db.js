import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const Connection = async (username, password) => {
    const URL = `mongodb+srv://vinayak:Vinayak123@MERNCRUD.chnpiev.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;