import { NextFunction, Request, Response } from "express"

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
   const header = req.headers;
   const userAgent = header["user-agent"];
    res.send(userAgent)
    next()
}

export { logMiddleware }