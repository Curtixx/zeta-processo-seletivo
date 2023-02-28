"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userRep_1 = require("../repositories/userRep");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
class TokenLoginController {
    async login(req, res) {
        var _a;
        try {
            const { email, senha } = req.body;
            const user = await userRep_1.userRepository.findOneBy({ email });
            if (!user) {
                return res.status(400).json({
                    msg: "E-mail ou senha não são validos"
                });
            }
            const verifyPassword = senha === user.senha;
            if (!verifyPassword) {
                return res.status(400).json({
                    msg: "E-mail ou senha não são validos"
                });
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id }, (_a = process.env.JWT_PASS) !== null && _a !== void 0 ? _a : "", { expiresIn: "24h" });
            return res.status(200).json({
                token,
                email,
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
}
exports.default = new TokenLoginController();
