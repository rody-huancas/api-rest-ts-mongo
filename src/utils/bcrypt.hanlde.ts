import { compare, hash } from "bcryptjs"

const encrypt = async (pass: string) => {
    const saltRounds = 10;
    const passwordHash = await hash(pass, saltRounds);
    return passwordHash;
}


const verified = async (pass: string, passHash: string) => {
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
}

export {
    encrypt,
    verified
}