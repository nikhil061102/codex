const express = require('express');
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')

const app = express();
const PORT = 5000;

connectDB();
// dotenv.config();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.static('public'));
// const userRoutes = require('./routes/userRoutes')
const submitRoutes = require('./routes/submitRoutes')
// const txnRoutes = './routes/txnRoutes'
// const checkRoutes = './routes/checkRoutes'
// app.use("/user", userRoutes);
app.use("/submit", submitRoutes);

// app.use("/txns", txnRoutes);
// app.use("/check",checkRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`)
});