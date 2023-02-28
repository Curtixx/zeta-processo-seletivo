import { Request, Response } from 'express';
import { userRepository } from '../repositories/userRep';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

class TokenLoginController {
  async login(req: Request, res: Response) {
    try {
      const { email, senha } = req.body
      const user = await userRepository.findOneBy({ email })
      if (!user) {
        return res.status(400).json({
          msg: "E-mail ou senha não são validos"
        })
      }
  
      const verifyPassword = senha === user.senha
      if(!verifyPassword) {
        return res.status(400).json({
          msg: "E-mail ou senha não são validos"
        })
      }
  
      const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", { expiresIn: "24h" })
      return res.status(200).json({
        token,
        email,
      })
    } catch (e) {
      return res.status(500).json({
        msg: "Ops...Ocorreu algum problema"
      })
    }
  }
}
export default new TokenLoginController()
