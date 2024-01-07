import { Router } from "express";
import { getOrders } from "../controllers/order";
import { checkJwt } from "../middleware/session";

/*
 * A esta ruta solo pueden acceder las personas que tengan una sesión activa
 * que tengan un JWT valido
 */

const router = Router();

router.get('/', checkJwt,getOrders)

export { router };