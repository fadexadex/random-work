import express from "express";
import { loginController, registerController } from "./controllers";
import {
  loginValidator,
  registerValidator,
} from "../../utils/middlewares/validator";

const router = express.Router();

router.post("/register", registerValidator, registerController);
router.post("/login", loginValidator, loginController);

export default router;