import { Request, Response } from "express"
import { loginUser, registerNewUser } from "../services/auth"

const registerCrtl = async ({ body }: Request, res: Response) => {
    try {
        const response = await registerNewUser(body);
        if (response === "ALREADY_USER") {
            res.status(400).send("Usuario ya existe");
        } else {
            res.send(response);
        }
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).send("Error al registrar usuario");
    }
}

const loginCrtl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });

    if(responseUser === "PASSWORD_INCORRECT" || responseUser === "NOT_FOUND_USER") {
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