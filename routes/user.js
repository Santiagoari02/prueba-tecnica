import { Router } from "express"
import { userController } from "../controllers/user.js";

export const userRouter = Router()

userRouter.get("/", userController.getAllUsers);

userRouter.post("/", userController.createUser);

userRouter.put("/:documento", userController.updateUser);