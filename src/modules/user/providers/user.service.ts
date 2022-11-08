import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRequestDto } from '../dtos/user.request';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    getAllUser() :Promise<any> {
        return this.usersRepository.find();
    }

    addUser() : User {
        const user = new User()
        user.email = 'bonimwingine'
        user.firstName = 'bonimwingine'
        user.lastName = 'bonimwingine'
        user.password = 'bonimwingine'

        user.save()

        return user;
    }

    create(userRequest: UserRequestDto) : string {
        const user = new User()
        user.email = userRequest.email
        user.firstName = userRequest.firstName
        user.lastName = userRequest.lastName
        user.password = userRequest.password

        user.save()

        return 'user saved good'
    }

}
