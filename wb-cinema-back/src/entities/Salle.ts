import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Salle {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nom!: string;

  @Column()
  capacite!: number;
}
