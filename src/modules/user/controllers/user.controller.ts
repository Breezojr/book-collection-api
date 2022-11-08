
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../providers/user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ){}
  @Get()
  findAll(@Req() request: Request) {
    return this.userService.getallUser()
  }
}
