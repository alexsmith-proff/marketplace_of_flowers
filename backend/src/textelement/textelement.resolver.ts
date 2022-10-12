import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TextElementService } from './textelement.service';
import { TextElementEntity } from './entities/textelement.entity';
import { CreateTextElementInput } from './dto/create-textelement.input';
import { UpdateTextElementInput } from './dto/update-textelement.input';

@Resolver(() => TextElementEntity)
export class TextElementResolver {
  constructor(private readonly textElementService: TextElementService) {}

  @Mutation(() => TextElementEntity)
  createTextElement(@Args('createTextElementInput') createTextElementInput: CreateTextElementInput) {
    return this.textElementService.create(createTextElementInput);
  }

  @Query(() => [TextElementEntity], { name: 'getAllTextElement' })
  findAll() {
    return this.textElementService.findAll();
  }

  @Query(() => TextElementEntity, { name: 'getTextElementByID' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.textElementService.findOne(id);
  }

  @Mutation(() => TextElementEntity)
  updateTextElement(@Args('updateTextElementInput') updateTextElementInput: UpdateTextElementInput) {
    return this.textElementService.update(updateTextElementInput.id, updateTextElementInput);
  }

  @Mutation(() => TextElementEntity)
  removeTextElement(@Args('id', { type: () => Int }) id: number) {
    return this.textElementService.remove(id);
  }
}
