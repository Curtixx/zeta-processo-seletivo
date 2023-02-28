import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column({type: 'text'})
  nome: string
  @Column({type: 'text'})
  sobrenome: string
  @Column()
  idade: number
  @Column({type: 'text'})
  email: string
  @Column({type: 'text'})
  senha: string
}