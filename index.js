import express from "express";
import { SERVER_PORT } from "./config.js";
import { router } from "./routes/router.js";
import connection from "./dbConnection.js";
import mockAllData from "./assets/mockData.js";

const app = express();

app.use(express.json());

app.use("/api", router);

await connection.sync({ alter: true });

app.listen(SERVER_PORT, () => {
  console.log(`App listening in port ~ ${SERVER_PORT}`);
  mockAllData();
});
