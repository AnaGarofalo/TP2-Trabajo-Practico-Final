import express from "express";
import cors from "cors";
import { FRONT_BASE_URL, SERVER_PORT } from "./config.js";
import { router } from "./routes/router.js";
import connection from "./dbConnection.js";
import mockAllData from "./assets/mockData.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: FRONT_BASE_URL,
  })
);

app.use("/api", router);

await connection.sync({ force: true });

app.listen(SERVER_PORT, () => {
  console.log(`App listening in port ~ ${SERVER_PORT}`);
  mockAllData();
});
