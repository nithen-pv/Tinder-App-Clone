import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Card from './dbCard.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(Cors());

const mongoDB_URL = `mongodb+srv://tinder-admin:${process.env.MONGODB_PASSWORD}@tinder-cluster.feyag.mongodb.net/TinderDB`;

mongoose.connect(mongoDB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("MongoDB Connected");
});

app.get('/', (req, res) => { res.status(200).send("Tinder app running") });

app.post('/cards',(req,res)=>{

    const cardData = req.body;
    Card.create(cardData,(err,data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })

})

app.get('/cards',(req,res)=>{

    Card.find({},(err,data)=>{
        if (err) {
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
