import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { ElementEntity } from 'src/element/entities/element.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('textelement')
export class TextElementEntity {
  @Field(() => ID, { description: 'id TextElement' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, { description: 'name TextElement' })
  @Column()
  name: string

  @Field(() => String, { description: 'slug TextElement' })
  @Column()
  slug: string

  @Field(() => String, { description: 'text TextElement' })
  @Column()
  text: string

  @Field(() => ElementEntity)
  @ManyToOne(() => ElementEntity, element => element.text_elements, {onDelete: 'CASCADE'})
  element_ref: ElementEntity

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
