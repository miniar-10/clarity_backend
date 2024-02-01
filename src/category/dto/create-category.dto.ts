import { Project } from "@prisma/client"
import { IsNotEmpty, IsOptional,  } from "class-validator"

export class CreateCategoryDto {
// id Int @id @default(autoincrement())
@IsNotEmpty()
name: string
// @IsOptional()
// projects: Project[]
}
