import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  
  @Column()
  rating: number;

  // we can use the default to add a default value in the column and then change it later in the services function
  @Column({type:'varchar' , default:'thisdate' })
  date:string;

  @Column({ type: 'varchar', length: 15 })
  developer_username: string;

  @Column({ type: 'varchar', length: 15 })
  reviewer_username: string;

  @Column({ type: 'varchar', length: 40 })
  reviewer_email: string;

  @Column({ type: 'varchar', length: 300})
  review_description: string;

  

//   @Column({ type: 'varchar' })
//   password: string;

 
}
