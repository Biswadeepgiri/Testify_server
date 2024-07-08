import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import moment from 'moment';



@Injectable()
export class ReviewsService {

  constructor(
    @InjectRepository(Review) private readonly ReviewRepository: Repository<Review>,
  ) {}

  create(username:string,email:string,description:string,developer_username:string): Promise<Review> {

    let currentDate = new Date().toLocaleDateString();


    
    function getRandomInt(min:number, max:number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    // let randomInt = getRandomInt(20, 60);

    const review: Review = new Review();
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    review.reviewer_email = email;
    review.reviewer_username = username;
    review.review_description = description;
    review.developer_username = developer_username;
    review.rating = getRandomInt(1,5);
    review.date = currentDate;
    // user.gender = createUserDto.gender;
    return this.ReviewRepository.save(review);
  }

  findAll(): Promise<Review[]> {
    return this.ReviewRepository.find();
  }

  findReviewByDeveloperUsername(developer_username: string) {
    return this.ReviewRepository.findBy({developer_username});
  }

  update(id: number, updateReviewDto: UpdateReviewDto):Promise<Review> {
    const review: Review = new Review();
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    // review.reviewer_email = updateReviewDto.reviewer_email;
    // review.reviewer_username = updateReviewDto.reviewer_username;
    review.review_description = updateReviewDto.review_description;
    // review.developer_username = updateReviewDto.developer_username;
    // user.gender = createUserDto.gender;
    review.id=id;
    return this.ReviewRepository.save(review);
  }

  remove(id: number) {
    return this.ReviewRepository.delete(+id);
  }
}
