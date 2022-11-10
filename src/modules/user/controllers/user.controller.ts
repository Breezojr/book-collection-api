
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { UserService } from '../providers/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@Req() request: Request) {
        return this.userService.getAllUser()
    }

    // @Get('/saveUser')
    // saveUser(@Req() request: Request) {
    //     return this.userService.addUser()
    // }


    // @Post('/create')
    // async create(@Body() UserRequestDto: UserRequestDto) {
    //     return this.userService.create(UserRequestDto)
    // }

}
