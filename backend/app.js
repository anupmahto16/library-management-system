const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// routes
const authRoutes =require('./routes/authRoutes');
const userRoutes = require('./routes/userRouts');
const routes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRouts');
const bookRoutes = require('./routes/borrwingRoutes');

app.use('/api/auth',authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/authorRoutes', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrwingRoutes', borrowingRoutes);

//error

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

//connect MongoesDB
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
.then(() => console.log('MongoDB Connected'))
.catch(() => console.log('err'));

modeule.exports =app;