import { Router } from "express";
import { loginCrtl, registerCrtl } from "../controllers/auth";

const router = Router();

/**
 * htpp://localhost:3000/auth/register [POST]
 * htpp://localhost:3000/auth/login [POST]
*/

router.post("/register", registerCrtl);
router.post("/login", loginCrtl);

export { router };  