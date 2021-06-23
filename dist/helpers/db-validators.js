"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStateUserTrue = exports.existsEmailUser = exports.existsIdUser = void 0;
const user_1 = __importDefault(require("../models/user"));
// users => Valida si id de usuario existe
const existsIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existsIdUser = yield user_1.default.findByPk(id);
    if (!existsIdUser)
        throw new Error(`El usuario con id ${id} no existe`);
});
exports.existsIdUser = existsIdUser;
// users => Valida si email de usuario existe
const existsEmailUser = (email, { req }) => __awaiter(void 0, void 0, void 0, function* () {
    const existsEmailUser = yield user_1.default.findOne({
        where: {
            email
        }
    });
    if ((existsEmailUser) && (existsEmailUser.id != req.params.id))
        throw new Error(`El usuario con el correo ${email} ya existe`);
});
exports.existsEmailUser = existsEmailUser;
// users => Valida si state de user es true
const isStateUserTrue = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { state } = yield user_1.default.findByPk(id);
    if (!state)
        throw new Error(`El usuario con el id ${id} no existe - state: false`);
});
exports.isStateUserTrue = isStateUserTrue;
//# sourceMappingURL=db-validators.js.map