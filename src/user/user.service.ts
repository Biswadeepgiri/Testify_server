import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()


export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(username:string,email:string,password:string): Promise<User> {
    const user: User = new User();
    // user.name = createUserDto.name;
    // user.age = createUserDto.age;
    user.email = email;
    user.username = username;
    user.password = password;
    // user.gender = createUserDto.gender;
    return this.userRepository.save(user);
  }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOneUser(id: number) {
    return this.userRepository.findOneBy({id});
  }

  findUserByEmail(email:string) {
    return this.userRepository.findOneBy({email});
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();
    // user.name = updateUserDto.name;
    // user.age = updateUserDto.age;
    user.email = updateUserDto.email;
    user.username = updateUserDto.username;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
  }

  removeUser(id: number) {
    return this.userRepository.delete(id);
  }
}
