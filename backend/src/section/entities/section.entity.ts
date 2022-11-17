import { ObjectType, Field, ID } from '@nestjs/graphql';
import { ElementEntity } from 'src/element/entities/element.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity('section')
export class SectionEntity {
  @Field(() => ID, { description: 'id section' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name section' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug section' })
  @Column()
  slug: string

  @Field(() => [ElementEntity])
  @OneToMany(() => ElementEntity, element => element.section_ref, { eager: true, cascade: true })
  elements: ElementEntity[]
}
