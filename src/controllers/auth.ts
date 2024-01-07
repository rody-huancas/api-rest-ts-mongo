import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"

const registerCrtl = async ({ body }: Request, res: Response) => {
    const response = await registerNewUser(body);
    res.send(response);
}

const loginCrtl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });

    if(responseUser === "PASSWORD_INCORRECT") {
        res.status(403);
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
}

export {
    registerCrtl,
    loginCrtl
}