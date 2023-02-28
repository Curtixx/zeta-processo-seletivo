"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const loginRequired_1 = require("./middlewares/loginRequired");
const TokenLoginController_1 = __importDefault(require("./controllers/TokenLoginController"));
const routes = (0, express_1.Router)();
routes.post('/create', UserController_1.default.store);
routes.post('/token', TokenLoginController_1.default.login);
routes.get('/show/:id', UserController_1.default.show);
routes.get('/', UserController_1.default.index);
routes.delete('/:id', loginRequired_1.loginRequired, UserController_1.default.delete);
routes.put('/:id', loginRequired_1.loginRequired, UserController_1.default.update);
exports.default = routes;
