import { ApiProperty } from "@nestjs/swagger";
import {  IsString } from "class-validator";

export class CreateStatusDto {
  @ApiProperty({ description: 'Last update date of the invoice', type: Date }) 
  @IsString()
  name: string;
}
