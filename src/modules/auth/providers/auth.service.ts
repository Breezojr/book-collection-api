import { HttpException, HttpStatus, Logger } from "@nestjs/common";
import { User } from "src/modules/user/models/user.model";
import { UserService } from "src/modules/user/providers/user.service";
import * as bcrypt from 'bcrypt';
import { LoginRequestDto } from "../dtos/login.request";
import { LoginResponseDto } from "../dtos/login.response";
import { RegisterRequestDto } from "../dtos/register.request";
import { RegisterResponseDto } from "../dtos/register.responses";
import { JwtService } from '@nestjs/jwt';
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ) { }

    //   jwtService = new JwtService({
    //     secret: process.env.JWT_SECRET,
    //     signOptions: { expiresIn: '1h' },
    //   })

    readonly logger = new Logger(AuthService.name)

    async login(loginBody: LoginRequestDto): Promise<LoginResponseDto> {

        const user = await User.findOne({
            where: { email: loginBody.email }
        })

        if (!user) {
            throw new HttpException('User was not Found', HttpStatus.NOT_FOUND);
        }

        const isPassword = await bcrypt.compare(loginBody.password, user.password);
    
        if (!isPassword) {
            throw new HttpException('Password providedis wrong', HttpStatus.NOT_FOUND);
        }

        const payload = { username: user.firstName};
        return {
          accessToken: this.jwtService.sign(payload),
        };

    }

    async register(registerBody: RegisterRequestDto): Promise<RegisterResponseDto> {
        const userFound = await User.findOne({
            where: { email: registerBody.email }
        })

        if (userFound) {
            throw new HttpException('User already exists, try login', HttpStatus.BAD_REQUEST);
        }

        const isConfirm = registerBody.password === registerBody.confirmPassword
        if (!isConfirm) {
            throw new HttpException('Passwords do not match', HttpStatus.BAD_REQUEST)
        }

        const user = new User()
        user.email = registerBody.email
        user.firstName = registerBody.firstName
        user.lastName = registerBody.lastName
        user.password = await bcrypt.hash(registerBody.password,10)

        user.save()

        return {
            firstName: registerBody.firstName,
            lastName: registerBody.lastName
        }

    }
}