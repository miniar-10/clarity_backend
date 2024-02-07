import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateLanguageDto {
    @IsNotEmpty()
    name: string
    // @IsOptional()
    // // isRessourceLanguage: boolean
    // @IsOptional()
    // isDeliverableLanguage: boolean
    //TODO:kqkqlqlq
    //FIXME: lqlqlq
    
}
