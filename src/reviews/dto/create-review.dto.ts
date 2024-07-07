import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
  } from 'class-validator';
  

  export class CreateReviewDto {
    // @IsString()
    // @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    // @IsNotEmpty()
    // name: string;
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    // @IsAlphanumeric(null, {
    //   message: 'Username does not allow other than alpha numeric chars.',
    // })
    developer_username: string;
  
    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    // @IsAlphanumeric(null, {
    //   message: 'Username does not allow other than alpha numeric chars.',
    // })
    reviewer_username: string;
  
    @IsNotEmpty()
    @IsEmail(null, { message: 'Please provide valid Email.' })
    reviewer_email: string;
  
    // @IsInt()
    // age: number;
  
    // @IsString()
    // @IsEnum(['f', 'm', 'u'])
    // gender: string;
  
    // @IsNotEmpty()
    // // @Matches(passwordRegEx, {
    // //   message: `Password must contain Minimum 8 and maximum 20 characters, 
    // //   at least one uppercase letter, 
    // //   one lowercase letter, 
    // //   one number and 
    // //   one special character`,
    // // })
    // password: string;

    @IsNotEmpty()
    @MinLength(10, { message: 'Review must have atleast 10 characters.' })
    // @IsAlphanumeric(null, {
    //   message: 'Username does not allow other than alpha numeric chars.',
    // })
    review_description: string;

  }

