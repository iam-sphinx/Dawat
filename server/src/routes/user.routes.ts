import { Router } from "express";
import { createUser, updateUser, getUser } from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth.middleware";
import { validateMyRequest } from "../middlewares/validation.middleware";

const router = Router();
router.route("/").post(jwtCheck, createUser);
router.route("/").put(jwtCheck, jwtParse, validateMyRequest, updateUser);
router.route("/").get(jwtCheck, jwtParse, getUser)

export default router;
