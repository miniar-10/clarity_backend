import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateProjectDto {
    @IsNotEmpty()
    @IsString()
    name:string
    @IsOptional()
    @IsString()
    details: string
    @IsNotEmpty()
    isPinned: boolean
    @IsNotEmpty()
    @IsString()
    briefing:string
    @IsNotEmpty()
    is_reccurent:boolean
    @IsNotEmpty()
    deadline:Date
    @IsNotEmpty()
    budget:number
    @IsNotEmpty()
    clientId:number 
    @IsNotEmpty()
    adminId:number
    @IsNotEmpty()
    categoryId:number
    @IsNotEmpty()
    invoiceId:number
}
