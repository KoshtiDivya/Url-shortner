const express = require("express");
const path = require("path");
const app = express();
const { connection } = require("./connection");
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middelwares/auth");
const PORT = 8001;
// const cors = require("cors");
// app.use(cors());

const urlRoute = require("./routes/url");
const staticRoute  = require("./routes/staticRouter");
const userRoute = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", "./views");

connection(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("MongoDB connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);



app.listen(PORT, () => console.log(`Server startedon port : ${PORT}`)); 