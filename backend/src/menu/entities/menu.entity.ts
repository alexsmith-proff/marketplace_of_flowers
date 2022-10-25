import { MenuItemEntity } from './../../menuitem/entities/menuitem.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CreateDateColumn, JoinTable, OneToMany, UpdateDateColumn } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('menu', {
  orderBy: {
    serial_number: 'ASC'
  }
})
export class MenuEntity {
  @Field(() => ID, { description: 'id menu' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, {description: "This is name menu"})
  @Column()
  name: string

  @Field(() => String, {description: "This is slug menu"})
  @Column()
  slug: string

  @Field(() => Number, {description: "This is serial number menu"})
  @Column()
  serial_number: number

  @Field(() => [MenuItemEntity])
  @OneToMany(() => MenuItemEntity, menuitem => menuitem.menu, {eager: true, cascade: true})
  items: MenuItemEntity[]

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}
