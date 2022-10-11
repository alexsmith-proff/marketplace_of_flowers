import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TextSectionService } from './textsection.service';
import { TextSectionEntity } from './entities/textsection.entity';
import { CreateTextSectionInput } from './dto/create-textsection.input';
import { UpdateTextSectionInput } from './dto/update-textsection.input';

@Resolver(() => TextSectionEntity)
export class TextSectionResolver {
  constructor(private readonly textSectionService: TextSectionService) {}

  @Mutation(() => TextSectionEntity)
  createTextSection(@Args('createTextSectionInput') createTextSectionInput: CreateTextSectionInput) {
    return this.textSectionService.create(createTextSectionInput);
  }

  @Query(() => [TextSectionEntity], { name: 'getAllTextSection' })
  findAll() {
    return this.textSectionService.findAll();
  }

  @Query(() => TextSectionEntity, { name: 'getTextSectionByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.textSectionService.findOne(id);
  }

  @Mutation(() => TextSectionEntity)
  updateTextSection(@Args('updateTextSectionInput') updateTextSectionInput: UpdateTextSectionInput) {
    return this.textSectionService.update(updateTextSectionInput.id, updateTextSectionInput);
  }

  @Mutation(() => TextSectionEntity)
  removeTextSection(@Args('id', { type: () => Int }) id: number) {
    return this.textSectionService.remove(id);
  }
}
