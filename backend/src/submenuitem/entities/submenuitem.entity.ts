import { MenuItemEntity } from './../../menuitem/entities/menuitem.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity('submenuitem')
export class SubmenuItemEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field(() => String)
  @Column()
  name: string

  @Field(() => Number)
  @Column({ default: 0 })
  serial_number: number

  @Field(() => String)
  @Column({ default: "" })
  link: string

  @Field(() => MenuItemEntity)
  @ManyToOne(() => MenuItemEntity, menuitem => menuitem.submenuitems, {onDelete: 'CASCADE'})
  @JoinColumn({name: 'menuitem_id'})
  menuitem: MenuItemEntity

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
