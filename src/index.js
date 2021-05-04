import express from "express";
import cors from "cors";
import services from "./services";

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api", services);

app.listen(port, () => console.info(" 🚀 Server is running: ", port));

app.on("error", (error) =>
  console.info(" ❌ Server is not running due to : ", error)
);
