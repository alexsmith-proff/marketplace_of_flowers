import { SubmenuItemTwoEntity } from '../../submenuitemtwo/entities/submenuitemtwo.entity'
import { MenuItemEntity } from './../../menuitem/entities/menuitem.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('submenuitem', {
  orderBy: {
    serial_number: 'ASC',
  },
})
export class SubmenuItemEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Number)
  @Column({ default: 0 })
  serial_number: number;

  @Field(() => String)
  @Column({ default: '' })
  link: string;

  @Field(() => String)
  @Column({ default: '' })
  slug: string;

  @Field(() => MenuItemEntity)
  @ManyToOne(() => MenuItemEntity, (menuitem) => menuitem.submenuitems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'menuitem_id' })
  menuitem: MenuItemEntity;

  @Field(() => [SubmenuItemTwoEntity])
  @OneToMany(
    () => SubmenuItemTwoEntity,
    (sub_submenuitem) => sub_submenuitem.submenuitem,
    { eager: true, cascade: true },
  )
  submenuitems: SubmenuItemTwoEntity[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
