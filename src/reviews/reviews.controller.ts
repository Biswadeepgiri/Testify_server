import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post(':developer_username/new')
  create(@Param('developer_username') developer_username: string ,@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto.reviewer_username,createReviewDto.reviewer_email,createReviewDto.review_description,developer_username);
  }

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':developer_username')
  findOne(@Param('developer_username') developer_username: string) {
    return this.reviewsService.findReviewByDeveloperUsername(developer_username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(+id, updateReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}
