import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinTable, 
  ManyToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { Role } from "./role.entity";

/**
 * User
 * 
 * example:
 *  - User 1 => role 1 => permission 1, 2 
 *  - User 1 => role 2 => permission 1, 3
 *  - User 2 => role 2 => permission 1, 3
 *  - User 3 => role 3 => permission 3, 4
 */
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;


  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role_relation'
  })
  role: Role[];
}
