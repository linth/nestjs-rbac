import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinTable,
  ManyToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from "typeorm";
import { Resource } from "./resource.entity";

@Entity()
export class Permission {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  desc: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @ManyToMany(() => Resource)
  @JoinTable({
    name: 'permission_resource_relation'
  })
  resource: Resource[];
}