import { Express } from "express";
import { router as routerUsers } from "../components/user/network";

const router = (server: Express) => {
  server.use("/user", routerUsers);
};

export { router };
