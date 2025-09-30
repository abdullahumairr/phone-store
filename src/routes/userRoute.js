import express from "express";
import {
  getAllUsersHandler,
  getUserByIdHandler,
} from "../handler/usersHandler.js";

const useRouter = express.Router();

useRouter.get("/users", getAllUsersHandler);
useRouter.get("/users/:id", getUserByIdHandler);

export default useRouter;
