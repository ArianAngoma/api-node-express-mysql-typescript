import {Router} from "express";
import {check} from 'express-validator';
import {deleteUser, getUser, getUsers, postUser, putUser} from "../controllers/user";
import {existsIdUser, existsEmailUser, isStateUserTrue} from "../helpers/db-validators";
import validateFields from "../middlewares/validate-fields";

const router = Router();

router.get('/', getUsers);

router.get('/:id', [
    check('id').custom(existsIdUser),
    check('id').custom(isStateUserTrue),
    validateFields
], getUser);

router.post('/', [
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('email', 'No es un correo válido').isEmail(),
    check('email').custom(existsEmailUser),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validateFields
], postUser);

router.put('/:id', [
    check('id').custom(existsIdUser),
    check('email', 'No es un correo válido').isEmail(),
    check('email').custom(existsEmailUser),
    validateFields
], putUser);

router.delete('/:id', [
    check('id').custom(existsIdUser),
    check('id').custom(isStateUserTrue),
    validateFields
], deleteUser);

export default router;