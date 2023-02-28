import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRep';

class User {
  async store(req: Request, res: Response) {
    try {
      const {nome, sobrenome, idade, email, senha} = req.body
      if (nome.length < 3 || sobrenome.length < 3 || idade.length === 0 || email.length < 10 || senha.length < 6) {
        return res.status(400).json({
          msg: "Verifique se os campos estão preenchidos corretamente"
        })
      }
      const user = userRepository.create({
        nome,
        sobrenome,
        idade,
        email,
        senha
      })
      await userRepository.save(user)
      return res.status(200).json({
        msg: "Usuario criado",
        data: user
      })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
      
    }
  }
  async show (req: Request, res: Response) {
    try {
      const { id } = req.params
    const user = await userRepository.findBy({
      id: Number(id)
    })
    
    if(user.length === 0){
      return res.status(404).json({
        msg: "Usuario não existente"
      })
    }
    return res.status(200).json({
      user
    })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
    }
    
  }
  async index (req: Request, res: Response) {
    try {
      const user = await userRepository.find()
      if(user.length === 0){
        return res.status(404).json({
          msg: "Não existe registros"
        })
      }
      return res.status(200).json({
        user
      })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
    }
    
  }
  async delete (req: Request, res: Response) {
    try {
      const { id } = req.params
      let verifyUser = await userRepository.findBy({
        id: Number(id)
      })
      
      if(verifyUser.length === 0){
        return res.status(400).json({
          msg: "Não existe esse usuario!"
        })
      }
      const user = await userRepository.delete({
        id: Number(id)
      })
      
      return res.status(200).json({
        msg: "Usuario deletado",
        user: verifyUser
      })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
    }
    
  }
  async update (req: Request, res: Response) {
    try {
      const { id } = req.params
      const { nome, sobrenome, idade, email, senha } = req.body
      const user = await userRepository.findBy({
        id: Number(id)
      })
      if(user.length === 0) {
        return res.status(400).json({
          msg: "Não existe um usuario com esse ID"
        })
      }
      if (nome.length < 3 || sobrenome.length <= 3 || idade.length <= 0 || email.length <= 5 || senha.length <= 0) {
        return res.status(400).json({
          msg: "Verifique se os campos estão preenchidos corretamente"
        })
      }

      user[0].nome = nome
      user[0].sobrenome = sobrenome
      user[0].idade = idade
      user[0].email = email
      user[0].senha = senha

      await userRepository.save(user)
      return res.status(200).json({
        msg: "Usuario alterado!",
        user
      })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
    }
    

  }
  
}
export default new User()