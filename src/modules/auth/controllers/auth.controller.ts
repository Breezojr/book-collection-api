import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { UserService } from "src/modules/user/providers/user.service";
import { LoginRequestDto } from "../dtos/login.request";
import { LoginResponseDto } from "../dtos/login.response";
import { RegisterRequestDto } from "../dtos/register.request";
import { RegisterResponseDto } from "../dtos/register.responses";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { AuthService } from "../providers/auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private readonly userService: UserService

    ){}

    @Post('/login')
    @HttpCode(200)
    async login(@Body() LoginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
        return this.authService.login(LoginRequestDto)
    }

    @Post('/register')
    async register(@Body() registerRequestDto: RegisterRequestDto): Promise<RegisterResponseDto> {
        return this.authService.register(registerRequestDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.userService.getAllUser()
    }

}