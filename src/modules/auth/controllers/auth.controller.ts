import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { LoginRequestDto } from "../dtos/login.request";
import { LoginResponseDto } from "../dtos/login.response";
import { AuthService } from "../providers/auth.service";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/login')
    @HttpCode(200)
    async login(@Body() LoginRequestDto: LoginRequestDto): Promise<LoginResponseDto> {
        return this.authService.login(LoginRequestDto)
    }

}