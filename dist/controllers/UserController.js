"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userRep_1 = require("../repositories/userRep");
class User {
    async store(req, res) {
        try {
            const { nome, sobrenome, idade, email, senha } = req.body;
            if (nome.length < 3 || sobrenome.length < 3 || idade.length === 0 || email.length < 10 || senha.length < 6) {
                return res.status(400).json({
                    msg: "Verifique se os campos estão preenchidos corretamente"
                });
            }
            const user = userRep_1.userRepository.create({
                nome,
                sobrenome,
                idade,
                email,
                senha
            });
            await userRep_1.userRepository.save(user);
            return res.status(200).json({
                msg: "Usuario criado",
                data: user
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
    async show(req, res) {
        try {
            const { id } = req.params;
            const user = await userRep_1.userRepository.findBy({
                id: Number(id)
            });
            if (user.length === 0) {
                return res.status(404).json({
                    msg: "Usuario não existente"
                });
            }
            return res.status(200).json({
                user
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
    async index(req, res) {
        try {
            const user = await userRep_1.userRepository.find();
            if (user.length === 0) {
                return res.status(404).json({
                    msg: "Não existe registros"
                });
            }
            return res.status(200).json({
                user
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            let verifyUser = await userRep_1.userRepository.findBy({
                id: Number(id)
            });
            if (verifyUser.length === 0) {
                return res.status(400).json({
                    msg: "Não existe esse usuario!"
                });
            }
            const user = await userRep_1.userRepository.delete({
                id: Number(id)
            });
            return res.status(200).json({
                msg: "Usuario deletado",
                user: verifyUser
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { nome, sobrenome, idade, email, senha } = req.body;
            const user = await userRep_1.userRepository.findBy({
                id: Number(id)
            });
            if (user.length === 0) {
                return res.status(400).json({
                    msg: "Não existe um usuario com esse ID"
                });
            }
            if (nome.length < 3 || sobrenome.length <= 3 || idade.length <= 0 || email.length <= 5 || senha.length <= 0) {
                return res.status(400).json({
                    msg: "Verifique se os campos estão preenchidos corretamente"
                });
            }
            user[0].nome = nome;
            user[0].sobrenome = sobrenome;
            user[0].idade = idade;
            user[0].email = email;
            user[0].senha = senha;
            await userRep_1.userRepository.save(user);
            return res.status(200).json({
                msg: "Usuario alterado!",
                user
            });
        }
        catch (e) {
            return res.status(500).json({
                msg: "Ops...Ocorreu algum problema"
            });
        }
    }
}
exports.default = new User();
