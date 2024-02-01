import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateProjectLanguageDto {
@IsNotEmpty()
 languageId:number
 @IsNotEmpty()
 projectId: number
 @IsOptional()
 isRessourceLanguage:boolean
 @IsOptional()
 isDeliverableLanguage:boolean
}
