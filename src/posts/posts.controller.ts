import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {CreatePostDto} from "./dto/CreatePost.dto";
import {FileInterceptor} from "@nestjs/platform-express";

@Controller('posts')
export class PostsController {

    constructor(private posrService: PostsService) {
    }
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
               @UploadedFile() image) {
        return this.posrService.create(dto, image)
    }
}
