import {Router} from "express";
import {check} from 'express-validator';
import {deleteUser, getUser, getUsers, postUser, putUser} from "../controllers/user";
import {existsIdUser, existsEmailUser, isStateUserTrue} from "../helpers/db-validators";
import validateFields from "../middlewares/validate-fields";

const router = Router();

// Obtener todos los usuarios
router.get('/', getUsers);

// Obtener USER por ID
router.get('/:id', [
    check('id').custom(existsIdUser),
    check('id').custom(isStateUserTrue),
    validateFields
], getUser);

// Crear nuevo USER
router.post('/', [
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('email', 'No es un correo válido').isEmail(),
    check('email').custom(existsEmailUser),
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    validateFields
], postUser);

// Actualizar User por Id
router.put('/:id', [
    check('id').custom(existsIdUser),
    check('email', 'No es un correo válido').isEmail(),
    check('email').custom(existsEmailUser),
    validateFields
], putUser);

// Eliminar User by Id
router.delete('/:id', [
    check('id').custom(existsIdUser),
    check('id').custom(isStateUserTrue),
    validateFields
], deleteUser);

export default router;