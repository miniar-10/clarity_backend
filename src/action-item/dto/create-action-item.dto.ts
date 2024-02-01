import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateActionItemDto {

  @IsOptional()
  id: number;
  
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

//   @IsDefined()
  @IsOptional()
  @IsNumber()
  milestoneId: number;

  @IsOptional()
  @IsNumber()
  assigneeId: number;

  @IsOptional()
  deadline: Date;
  
  }