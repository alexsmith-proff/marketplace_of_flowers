import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SectionService } from './section.service';
import { SectionEntity } from './entities/section.entity';
import { CreateSectionInput } from './dto/create-section.input';
import { UpdateSectionInput } from './dto/update-section.input';

@Resolver(() => SectionEntity)
export class SectionResolver {
  constructor(private readonly sectionService: SectionService) {}

  @Mutation(() => SectionEntity)
  createSection(@Args('createSectionInput') createSectionInput: CreateSectionInput) {
    return this.sectionService.create(createSectionInput);
  }

  @Query(() => [SectionEntity], { name: 'getAllSections' })
  findAll() {
    return this.sectionService.findAll();
  }

  @Query(() => SectionEntity, { name: 'getSectionBySlug' })
  findBySlug(@Args('slug', {type: () => String}) slug: string) {
    return this.sectionService.findBySlug(slug);
  }

  @Query(() => SectionEntity, { name: 'getSectionById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.sectionService.findOne(id);
  }

  @Mutation(() => SectionEntity)
  updateSection(@Args('updateSectionInput') updateSectionInput: UpdateSectionInput) {
    return this.sectionService.update(updateSectionInput.id, updateSectionInput);
  }

  @Mutation(() => SectionEntity)
  removeSection(@Args('id', { type: () => Int }) id: number) {
    return this.sectionService.remove(id);
  }
}
