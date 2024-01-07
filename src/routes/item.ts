import { Router, Request, Response } from "express";

const router = Router();

/*
* https://localhost:3000/items [GET]
*/
router.get("/", (req: Request, res: Response) => {
    res.send({data: "AQUI_VAN_LOS_MODELOS"})
});

export { router };