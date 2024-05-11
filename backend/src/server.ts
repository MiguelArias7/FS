import express, { Express, Router } from "express";
import { router } from "./network/routes";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
export { app };
