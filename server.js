const express = require('express');
const userRouter = require("./routes/UserRoutes/UserRoutes");
const postRouter = require("./routes/postRoutes/PostRoutes");
const categoryRouter = require('./routes/categoryRoutes/CategoryRoutes');
const commentRouter = require('./routes/commentRoutes/CommentRoutes');
require('dotenv').config()
require('./config/DBconnect')
const app = express();


// middleware

// routes


// ----users route-------

app.use("/api/v1/users", userRouter);

// ------posts route---------

app.use("/api/v1/posts", postRouter);

// -------comments route-------

app.use("/api/v1/comments", commentRouter);

// -------category route----------
app.use("/api/v1/categories", categoryRouter);




//console.log(app)


const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up running on ${PORT}`));





