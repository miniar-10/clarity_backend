

    // invoice.dto.ts

import { ApiProperty } from '@nestjs/swagger'; // Import ApiProperty decorator
import { IsInt, IsOptional, IsDateString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProjectDto } from 'src/project/dto/create-project.dto';

export class CreateInvoiceDto {
  @ApiProperty({ description: 'ID of the project associated with the invoice' }) 
  @IsInt()
  projectId: number;

  @ApiProperty({ description: 'ID of the client associated with the invoice' }) 
  @IsInt()
  clientId: number;

  @ApiProperty({ description: 'ID of the admin associated with the invoice' }) 
  @IsInt()
  adminId: number;

  @ApiProperty({ description: 'Creation date of the invoice', type: Date }) 
  @IsDateString()
  createdAt?: string;

  @ApiProperty({ description: 'Last update date of the invoice', type: Date }) 
  @IsDateString()
  updatedAt?: string;

  @ApiProperty({ description: 'Payment date of the invoice', type: Date }) 
  @IsDateString() 
  paiedAt?: string;

  @ApiProperty({ description: 'Word rate in $', type: Number, required: false }) 
  @IsOptional()
  @IsNumber()
  wordRate?: number;

  @ApiProperty({ description: 'Hourly rate in $', type: Number, required: false }) 
  @IsOptional()
  @IsNumber()
  hourRate?: number;

//   @ApiProperty({ description: 'Array of projects associated with the invoice' }) 
//   @IsOptional()
//   @Type(() => CreateProjectDto)
//   projects?: CreateProjectDto[];
 }


