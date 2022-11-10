import { IsEmail } from "class-validator";

export class RegisterRequestDto{
    firstName: string;

    lastName: string;

    @IsEmail()
    email: string;

    password: string;
    
    confirmPassword: string;
}