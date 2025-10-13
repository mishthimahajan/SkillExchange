// const cors = require("cors");
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     methods: ["GET, POST, PUT, PATCH, DELETE"],
//     credentials: true,
//   })
// );

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname,'public')));
// app.use('/',indexRouter);
// app.use('/users',usersRouter);

// module.exports = app;

// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const cors = require("cors");

// const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");

// const app = express();
// const authRouter = require('./routes/routes'); // or ./routes/auth.js
// app.use('/api/auth', authRouter);


// // ✅ Allow requests from React frontend (Vite runs on 5173)
// app.use(
//   cors({
//     origin: "http://localhost:5173", // no trailing slash
//     methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
//     credentials: true,
//   })
// );

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use("/api/auth", authRouter);

// module.exports = app;


const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");


const app = express();

// ✅ Allow requests from React frontend (Vite runs on 5173)
app.use(
  cors({
    origin: "http://localhost:5173", // no trailing slash
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// ✅ Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", require("./routes/index"));
// app.use("/api", indexRouter); // all your register/login/profile/explore routes
// app.use("/api/users", usersRouter);
app.use("/uploads", express.static("uploads"));





module.exports = app;

