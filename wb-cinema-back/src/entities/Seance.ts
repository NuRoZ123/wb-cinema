import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Film } from "./Film";
import { Salle } from "./Salle";

@Entity()
export class Seance {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Film, { eager: true })
  film!: Film;

  @ManyToOne(() => Salle, { eager: true })
  salle!: Salle;

  @Column()
  dateHeure!: Date;
}
