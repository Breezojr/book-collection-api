
import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserRequestDto } from '../dtos/user.request';
import { UserService } from '../providers/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    findAll(@Req() request: Request) {
        return this.userService.getAllUser()
    }

    @Get('/saveUser')
    saveUser(@Req() request: Request) {
        return this.userService.addUser()
    }


    @Post('/create')
    async create(@Body() UserRequestDto: UserRequestDto) {
        return this.userService.create(UserRequestDto)
    }

}
