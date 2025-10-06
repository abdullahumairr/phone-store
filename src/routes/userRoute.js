import express from "express";
import {
  addUsersHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUsersHandler,
} from "../handler/usersHandler.js";

const useRouter = express.Router();

useRouter.get("/users", getAllUsersHandler);
useRouter.get("/users/:id", getUserByIdHandler);
useRouter.post("/users", addUsersHandler);
useRouter.put("/users/:id", updateUsersHandler);
useRouter.delete("/users/:id", deleteUserHandler);

export default useRouter;
