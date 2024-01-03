import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {

    @IsString()
    Title
    @IsString()
    Content
    @IsNumber()
    Likes
    @IsNumber()
    userId
}
    
