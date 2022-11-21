import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImgElementService } from './imgelement.service';
import { ImgElementEntity } from './entities/imgelement.entity';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { UpdateImgElementInput } from './dto/update-imgelement.input';
import GraphQLUpload, { FileUpload } from 'graphql-upload';
import { createReadStream, createWriteStream } from 'fs';

@Resolver(() => ImgElementEntity)
export class ImgElementResolver {
  constructor(private readonly imgElementService: ImgElementService) {}

  @Mutation(() => ImgElementEntity)
  createImgElement(@Args('createImgElementInput') createImgElementInput: CreateImgElementInput) {
    return this.imgElementService.create(createImgElementInput);
  }

  @Query(() => [ImgElementEntity], { name: 'getAllImgElement' })
  findAll() {
    return this.imgElementService.findAll();
  }

  @Query(() => ImgElementEntity, { name: 'getImgElementByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imgElementService.findOne(id);
  }

  @Mutation(() => ImgElementEntity)
  updateImgElement(@Args('updateImgElementInput') updateImgElementInput: UpdateImgElementInput) {
    return this.imgElementService.update(updateImgElementInput.id, updateImgElementInput);
  }

  @Mutation(() => ImgElementEntity)
  removeImgElement(@Args('id', { type: () => Int }) id: number) {
    return this.imgElementService.remove(id);
  }
}
