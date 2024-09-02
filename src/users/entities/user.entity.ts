import { Role } from '../../common/enums/rol.enum';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ nullable: false, select: false })
  password: string;
  @Column({ type: 'enum', default: Role.USER, enum: Role })
  role: string;
  @DeleteDateColumn()
  deletedAtDate;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
}

