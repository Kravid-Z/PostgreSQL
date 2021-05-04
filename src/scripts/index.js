import dotenv from "dotenv";
import fs from "fs";
import { join, dirname } from "path";
import db from "../db/index.js";
// import {pool} from "../db/"
import { promisify } from "util";

dotenv.config();

const read = promisify(fs.readFile);
const __dirname = dirname(import.meta.url);

const sqlFilePath = join(__dirname, "import.sql");

const createTable = async () => {
  try {
    const data = await read(sqlFilePath);
    const sqlQueryString = data.toString();
    await db.query(sqlQueryString);
    console.info(`✅ All tables are  successfully created.`);
  } catch (e) {
    console.error(`❌ Tables are  not created.`);
    console.error(e);
  }
  db.pool.end();
};

createTable();
