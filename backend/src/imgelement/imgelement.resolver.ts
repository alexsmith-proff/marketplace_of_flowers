import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImgElementService } from './imgelement.service';
import { ImgElementEntity } from './entities/imgelement.entity';
import { CreateImgElementInput } from './dto/create-imgelement.input';
import { UpdateImgElementInput } from './dto/update-imgelement.input';
import uuidv4 from 'uuid'
import { GraphQLUpload, graphqlUploadExpress } from 'graphql-upload/GraphQLUpload.js'

@Resolver(() => ImgElementEntity)
export class ImgElementResolver {
  constructor(private readonly imgElementService: ImgElementService) {}

  // @Mutation(() => [ImgElementEntity])
  // addPhoto(@Args({name: 'file', type: () => GraphQLUpload}) file: FileUpload) {
  //   const ext = file.filename.match(/\.[a-z]+$/)
  //   const filename = `${uuidv4}${ext}`
  //   console.log('file.filenameeeeeeeeeee', file.filename);
    
  //   console.log('filenameeeee', filename);
  //   console.log('file GraphQLUploaddddd', file);

  //   return this.imgElementService.findAll();
  // }



  // @Mutation(() => String)
  // addPhoto(@Args({name: 'file', type: () => GraphQLUpload}) file: string) {
  //   console.log('file.filenameeee', file);

  //   return 'vvvv'
  // }




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
