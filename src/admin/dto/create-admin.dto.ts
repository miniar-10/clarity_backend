import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateAdminDto{
    @IsEmail()
    @IsNotEmpty()
    email: string
    @IsString()
    @IsNotEmpty()
    password: string
    @IsOptional()
    @IsString()
    firstName: string
    @IsOptional()
    @IsString()
    lastName: string
    @IsOptional()
    updatedAt: Date
    @IsOptional()
    @IsString()
    whatsapp: string
}