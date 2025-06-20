import express from "express";
import cors from "cors";
import { FRONT_BASE_URL, SERVER_PORT } from "./config.js";
import { router } from "./routes/router.js";
import connection from "./dbConnection.js";
import mockAllData from "./assets/mockData.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: FRONT_BASE_URL,
    credentials: true,
  })
);

app.use("/api", router);

await connection.sync({ force: true });

app.listen(SERVER_PORT, () => {
  console.log(`App listening in port ~ ${SERVER_PORT}`);
  mockAllData();
});
