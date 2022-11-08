import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}

    getallUser() :Promise<any> {
        return this.usersRepository.find();
    }

}
