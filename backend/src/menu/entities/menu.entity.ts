import { MenuItemEntity } from './../../menuitem/entities/menuitem.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CreateDateColumn, OneToMany, UpdateDateColumn } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('menu')
export class MenuEntity {
  @Field(() => ID, { description: 'id munu' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, {description: "This is name menu"})
  @Column()
  name: String

  @Field(() => [MenuItemEntity])
  @OneToMany(() => MenuItemEntity, menuitem => menuitem.menu)
  item: MenuItemEntity[]

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
