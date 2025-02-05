import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Seance } from "./Seance";
import { User } from "./User";

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Seance, { eager: true })
  seance!: Seance;

  @ManyToOne(() => User, { eager: true })
  user!: User;

  @Column()
  nbPlaces!: number;
}
