import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request{
    user?: string | JwtPayload; 
}

const getOrders = (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS CON UNA SESSION VÁLIDA/JWT",
            user: req.user
        })
    } catch (e) {
        handleHttp(res, 'ERROR_GET_BLOG');
    }
}

export {
    getOrders,
}