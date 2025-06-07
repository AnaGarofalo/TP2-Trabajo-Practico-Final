import express from "express";
import { SERVER_PORT } from "./config.js";
import { router } from "./routes/router.js";
import connection from "./dbConnection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`App listening in port ~ ${SERVER_PORT}`);
});
