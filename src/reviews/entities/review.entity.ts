import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Review {
  /**
   * this decorator will help to auto generate id for the table.
   */
  @PrimaryGeneratedColumn()
  id: number;

  

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
