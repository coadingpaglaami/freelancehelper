import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/user.controller";

const router:Router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;
