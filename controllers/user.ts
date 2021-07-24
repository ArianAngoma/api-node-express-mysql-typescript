import {Request, Response} from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json({users});
}

export const getUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const user = await User.findByPk(id);
    res.json(user);
}

export const postUser = async (req: Request, res: Response) => {
    const {name, email} = req.body;
    try {
        const user = User.build({name, email});
        await user.save();
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

export const putUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, email, state} = req.body;
    try {
        const user = await User.findByPk(id);
        await user?.update({name, email, state});
        res.json(user)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params;

    // Buscar usuario por ID
    const user = await User.findByPk(id);

    // Eliminación física
    /*await user?.destroy();*/

    await user?.update({state: false});

    res.json(user);
}