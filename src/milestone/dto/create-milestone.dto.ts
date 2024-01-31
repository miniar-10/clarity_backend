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
  socre: number
  @IsNotEmpty()
  statusId :number
  


//   status Status @relation(fields: [statusId], references: [id])
//   delivrables Delivrable[]
}
