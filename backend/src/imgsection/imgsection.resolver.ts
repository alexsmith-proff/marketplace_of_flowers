import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImgSectionService } from './imgsection.service';
import { ImgSectionEntity } from './entities/imgsection.entity';
import { CreateImgSectionInput } from './dto/create-imgsection.input';
import { UpdateImgSectionInput } from './dto/update-imgsection.input';

@Resolver(() => ImgSectionEntity)
export class ImgSectionResolver {
  constructor(private readonly imgSectionService: ImgSectionService) {}

  @Mutation(() => ImgSectionEntity)
  createImgSection(@Args('createImgSectionInput') createImgSectionInput: CreateImgSectionInput) {
    return this.imgSectionService.create(createImgSectionInput);
  }

  @Query(() => [ImgSectionEntity], { name: 'getAllImgSection' })
  findAll() {
    return this.imgSectionService.findAll();
  }

  @Query(() => ImgSectionEntity, { name: 'getImgSectionByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imgSectionService.findOne(id);
  }

  @Mutation(() => ImgSectionEntity)
  updateImgSection(@Args('updateImgSectionInput') updateImgSectionInput: UpdateImgSectionInput) {
    return this.imgSectionService.update(updateImgSectionInput.id, updateImgSectionInput);
  }

  @Mutation(() => ImgSectionEntity)
  removeImgSection(@Args('id', { type: () => Int }) id: number) {
    return this.imgSectionService.remove(id);
  }
}
