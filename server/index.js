import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use('/posts',postRoutes);

app.get('/',(req,res) => {
    res.send("hello to api project");
})

// const CONNECTION_URL = 'mongodb+srv://memory123:memory123@cluster0.rttsa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server : started ${PORT}`)))
    .catch((error) => console.log(error.message));

    
mongoose.set('useFindAndModify',false);