import { SubmenuItemEntity } from '../../submenuitem/entities/submenuitem.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { CreateDateColumn, JoinTable, ManyToOne, OneToMany, UpdateDateColumn } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MenuEntity } from 'src/menu/entities/menu.entity';

@ObjectType()
@Entity('menuitem')
export class MenuItemEntity {
  @Field(() => ID, { description: 'id menuitem' })
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String, {description: "This is name menuitem"})
  @Column()
  name: string

  @Field(() => Number)
  @Column({ default: 0 })
  serial_number: number 
  
  @Field(() => String)
  @Column({ default: "" })
  link: string

  @Field(() => MenuEntity)
  @ManyToOne(() => MenuEntity, menu => menu.item)
  menu: MenuEntity

  @Field(() => [SubmenuItemEntity])
  @OneToMany(() => SubmenuItemEntity, submenuitem => submenuitem.menuitem, {eager: true})
  submenuitems: SubmenuItemEntity[]

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date
}