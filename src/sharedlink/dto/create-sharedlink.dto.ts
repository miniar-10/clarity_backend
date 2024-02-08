import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateSharedlinkDto {

        @ApiProperty({ description: 'Name of the shared link', required: false })
        @IsOptional()
        @IsString()
        name?: string;
      
        @ApiProperty({ description: 'Details of the shared link', required: false })
        @IsOptional()
        @IsString()
        details?: string;
      
        @ApiProperty({ description: 'Link to the shared resource' })
        @IsString()
        link: string;
      
        @ApiProperty({ description: 'ID of the client associated with the shared link' })
        @IsInt()
        clientId: number;
      }

