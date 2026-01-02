import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";


dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("connected to MongoDB");
}).catch((err) => {
  console.log("Error: " + err)
});






const app = express()
const port = 8000


app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

app.use('/server/user', userRouter);
