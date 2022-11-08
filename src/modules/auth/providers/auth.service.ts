import { HttpException, HttpStatus } from "@nestjs/common";
import { NOTFOUND } from "dns";
import { User } from "src/modules/user/models/user.model";
import { UserService } from "src/modules/user/providers/user.service";
import { LoginRequestDto } from "../dtos/login.request";
import { LoginResponseDto } from "../dtos/login.response";

export class AuthService {
    constructor(
        private userService: UserService
    ){}


  async login(loginBody: LoginRequestDto): Promise<LoginResponseDto>{
    
            const user = await User.findOne({
                where:{email: loginBody.email} 
             })
     
             if(!user){
                throw new HttpException('User was not Found', HttpStatus.NOT_FOUND);             }
     
             const response = new LoginResponseDto()
             response.firstName = user.firstName
             response.lastName = user.lastName
     
             return response
   
    }
}