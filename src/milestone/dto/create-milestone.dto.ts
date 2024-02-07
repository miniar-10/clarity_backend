import { ActionItem } from "@prisma/client"
import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateMilestoneDto {
  @IsOptional()
  name: string
  @IsOptional()
  details: string
  @IsNotEmpty()
  order: number
  @IsNotEmpty()
  deadline: Date
//   @IsOptional()
  @IsOptional()
  deliveryDate: Date
  @IsOptional()
  score: number
  @IsNotEmpty()
  statusId :number
  //this should be String
  @IsOptional()
  projectId: number
  
 

//   status Status @relation(fields: [statusId], references: [id])
//   delivrables Delivrable[]
}
