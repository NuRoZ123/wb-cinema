import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Film } from "./Film";

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  nom!: string;

  @ManyToMany(() => Film, (film) => film.genres)
  films!: Film[];
}
