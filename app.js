require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./v1/routes/userRoutes');


const app = express();
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/a/v1/users', userRouter);


app.listen(process.env.PORT, (req, res) => {
    console.log('server is running on port', process.env.PORT);
})