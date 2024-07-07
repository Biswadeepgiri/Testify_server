import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';
import {User} from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/entities/review.entity';

@Module({
  imports: [
    
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        password: 'psql2004',
        username: 'postgres',
        entities: [User,Review],
        database: 'testifydb',
        synchronize: true,
        logging: true,
      }),
    
      UserModule,
    
      AuthModule,
    
      ReviewsModule,
      // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
