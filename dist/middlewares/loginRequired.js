"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRequired = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const userRep_1 = require("../repositories/userRep");
const loginRequired = async (req, res, next) => {
    var _a;
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(400).json({
                msg: "Acesso negado"
            });
        }
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.split(' ')[1];
        const { id } = jsonwebtoken_1.default.verify(token, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : '');
        const user = await userRep_1.userRepository.findOneBy({ id });
        if (!user) {
            return res.status(400).json({
                msg: "Acesso negado"
            });
        }
        const { senha: _, ...userLogged } = user;
        req.user = userLogged;
        next();
    }
    catch (e) {
        return res.status(400).json({
            msg: "Ops...Ocorreu algum problema"
        });
    }
};
exports.loginRequired = loginRequired;
