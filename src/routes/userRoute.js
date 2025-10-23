import express from "express";
import {
  createUsersHandler,
  getAllUsersHandler,
  getUserByIdHandler,
} from "../controllers/userController.js";

const useRouter = express.Router();

useRouter.get("/users", getAllUsersHandler);
useRouter.get("/users/:id", getUserByIdHandler);
useRouter.post("/users", createUsersHandler);
// useRouter.put("/users/:id", updateUsersHandler);
// useRouter.delete("/users/:id", deleteUserHandler);

export default useRouter;
