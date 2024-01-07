import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"

const registerCrtl = async ({ body }: Request, res: Response) => {
    const response = await registerNewUser(body);
    res.send(response);
}

const loginCrtl = async (req: Request, res: Response) => {
    const response = await loginUser();

}

export {
    registerCrtl,
    loginCrtl
}