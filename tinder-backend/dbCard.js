import mongoose from 'mongoose';

const CardsSchema = new mongoose.Schema({
    name: String,
    imgUrl: String
});

export default mongoose.model('Card', CardsSchema);