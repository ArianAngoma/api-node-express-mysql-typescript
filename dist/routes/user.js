"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
const db_validators_1 = require("../helpers/db-validators");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const router = express_1.Router();
router.get('/', user_1.getUsers);
router.get('/:id', [
    express_validator_1.check('id').custom(db_validators_1.existsIdUser),
    express_validator_1.check('id').custom(db_validators_1.isStateUserTrue),
    validate_fields_1.default
], user_1.getUser);
router.post('/', [
    express_validator_1.check('email', 'El correo es obligatorio').not().isEmpty(),
    express_validator_1.check('email', 'No es un correo válido').isEmail(),
    express_validator_1.check('email').custom(db_validators_1.existsEmailUser),
    express_validator_1.check('name', 'El nombre es obligatorio').not().isEmpty(),
    validate_fields_1.default
], user_1.postUser);
router.put('/:id', [
    express_validator_1.check('id').custom(db_validators_1.existsIdUser),
    express_validator_1.check('email', 'No es un correo válido').isEmail(),
    express_validator_1.check('email').custom(db_validators_1.existsEmailUser),
    validate_fields_1.default
], user_1.putUser);
router.delete('/:id', [
    express_validator_1.check('id').custom(db_validators_1.existsIdUser),
    express_validator_1.check('id').custom(db_validators_1.isStateUserTrue),
    validate_fields_1.default
], user_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map