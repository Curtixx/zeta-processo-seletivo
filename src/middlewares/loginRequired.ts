import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import 'dotenv/config'
import { userRepository } from '../repositories/userRep';

type Tjwt = {
  id: number
}
export const loginRequired = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers
    if (!authorization) {
      res.status(400).json({
        msg: "Acesso negado"
      })
    }
    const token = authorization?.split(' ')[1] as string
    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as unknown as Tjwt

    const user = await userRepository.findOneBy({ id })
    if (!user) {
      return res.status(400).json({
        msg: "Acesso negado"
      })
    }
    
    const {senha:_, ...userLogged} = user

    req.user = userLogged
    next()
  } catch (e) {
    return res.status(400).json({
      msg: "Ops...Ocorreu algum problema"
    })
  }
  
    
}