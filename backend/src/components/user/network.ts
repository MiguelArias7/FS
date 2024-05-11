import express, { Request, Response, request } from "express";
import { successHandler, errorHandler } from "../../network/response";
import { sign, verify } from "jsonwebtoken";
import { getUser, addUser } from "./controller";
import { compare } from "bcrypt";
import { User } from "@prisma/client";
const secretKey = process.env.SECRET;

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    successHandler(req, res, "User was created", await addUser(req.body.email, req.body.name, req.body.password, req.body.address, req.body.id_departamento, req.body.id_municipio), 200);
  } catch (error: any) {
    errorHandler(req, res, "Could not create user", 500, error);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) return errorHandler(req, res, "Login failed", 401, new Error("Email and password are required"));

    // If the user doesn't exist, return an error
    let user: User = await getUser(email);
    if (!user.email) return errorHandler(req, res, "Login failed", 401, new Error("User does not exist"));

    const isMatch: boolean = await compare(password, user.password);
    if (!isMatch) return errorHandler(req, res, "Login failed", 401, new Error("Wrong password"));

    res.cookie("token", sign({ email: user.email }, secretKey), { httpOnly: true });
    user.password = "";
    successHandler(req, res, "Login successful", user, 200);
  } catch (error: any) {
    errorHandler(req, res, "Login failed", 500, error);
  }
});

router.get("/logout", async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    successHandler(req, res, "Logout successful", {}, 200);
  } catch (error: any) {
    errorHandler(req, res, "Logout failed", 500, error);
  }
});

function verifyToken(req: Request, res: Response, next: Function) {
  try {
    const token = req.cookies.token;
    if (!token) return errorHandler(req, res, "Authentication failed", 401, new Error("Token not provied"));
    verify(token, secretKey);
    next();
  } catch (error: any) {
    errorHandler(req, res, "Token not valid", 403, error);
  }
}

router.get("/protected", verifyToken, (req, res) => {
  return successHandler(req, res, "You have access", {}, 200);
});

export { router };
