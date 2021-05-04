import express from "express";
import studentsRoute from "./students/index.js";
import tutorsRoute from "./tutors/index.js";
import modulesRoute from "./modules/index.js";

const route = express.Router();

route.use("/tutors", tutorsRoute);
route.use("/modules", modulesRoute);
route.use("/students", studentsRoute);

export default route;
