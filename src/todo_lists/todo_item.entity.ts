import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoItem {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ default: false })
  completed!: boolean;

  @Column()
  todoListId!: number;
}