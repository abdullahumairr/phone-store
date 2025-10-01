import express from "express";
import {
  addUsersHandler,
  getAllUsersHandler,
  getUserByIdHandler,
} from "../handler/usersHandler.js";

const useRouter = express.Router();

useRouter.get("/users", getAllUsersHandler);
useRouter.get("/users/:id", getUserByIdHandler);
useRouter.post("/users", addUsersHandler)

export default useRouter;
