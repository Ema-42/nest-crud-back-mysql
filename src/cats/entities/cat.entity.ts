import { Breed } from 'src/breeds/entities/breed.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  age: number;
  @Column()
  weight: number;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Breed, (breed) => breed.id, { eager: true })
  breed: Breed;
}

