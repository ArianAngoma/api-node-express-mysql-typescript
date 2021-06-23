import { Identifier } from "sequelize/types";
import User from "../models/user";

// users => Valida si id de usuario existe
export const existsIdUser = async (id: string) => {
    const existsIdUser: any = await User.findByPk(id);
    if (!existsIdUser) throw new Error(`El usuario con id ${id} no existe`);
}

// users => Valida si email de usuario existe
export const existsEmailUser = async (email: string, {req}: { req: any }) => {
    const existsEmailUser: any = await User.findOne({
        where: {
            email
        }
    });
    if ((existsEmailUser) && (existsEmailUser.id != req.params.id)) throw new Error(`El usuario con el correo ${email} ya existe`);
}

// users => Valida si state de user es true
export const isStateUserTrue = async (id: Identifier) => {
    const {state}: any = await User.findByPk(id);
    if (!state) throw new Error(`El usuario con el id ${id} no existe - state: false`)
}