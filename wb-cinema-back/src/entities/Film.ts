import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Genre } from "./Genre";

@Entity()
export class Film {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  titre!: string;

  @Column()
  description!: string;

  @Column()
  duree!: number;

  @Column()
  image!: string;

  @ManyToMany(() => Genre, (genre) => genre.films, { cascade: true })
  @JoinTable()
  genres!: Genre[];
}
