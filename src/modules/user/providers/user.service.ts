import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserInputDto } from '../dtos/user.input';
import { User } from '../models/user.model';
import { UserResponseDto } from '../dtos/user.responses';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    getAllUser() :Promise<any> {
        return this.usersRepository.find();
    }

   async createUser(userInput: UserInputDto) : Promise<UserResponseDto> {
        const user = new User()
        user.email = userInput.email
        user.firstName = userInput.firstName
        user.lastName = userInput.lastName
        user.password = await bcrypt.hash(userInput.password,10)

        user.save()

        return user;
    }

  

}
