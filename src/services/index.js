import express from "express"



const route = express.Router();


// const studentsRoute = require("./students");
// const tutorsRoute = require("./tutors");
// const modulesRoute = require("./modules");

route.use("/tutors", tutorsRoute);
route.use("/modules", modulesRoute);
route.use("/students", studentsRoute);


export default route