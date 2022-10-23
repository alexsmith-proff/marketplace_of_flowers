import { MenuItemEntity } from './../../menuitem/entities/menuitem.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('submenuitem')
///////////////////////////////////
@Tree('closure-table')
///////////////////////////////////
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

  @Field(() => MenuItemEntity)
  @ManyToOne(() => MenuItemEntity, (menuitem) => menuitem.submenuitems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'menuitem_id' })
  menuitem: MenuItemEntity;

  ///////////////////////////////////
  // @Field(() => SubmenuItemEntity)
  // @OneToMany(
  //   () => SubmenuItemEntity,
  //   (sub_submenuitem) => sub_submenuitem.submenuitem,
  //   // { eager: true, cascade: true },
  //   // { cascade: true },
  //   {  },
  // )
  // submenuitems: SubmenuItemEntity[];

  // @Field(() => SubmenuItemEntity)
  // @ManyToOne(
  //   () => SubmenuItemEntity,
  //   (submenuitem) => submenuitem.submenuitems,
  //   // { onDelete: 'CASCADE' },
  // )
  // @JoinColumn({ name: 'submenuitem_id' })
  // submenuitem: SubmenuItemEntity;
  ///////////////////////////////////
  ///////////////////////////////////
  @Field(() => [SubmenuItemEntity])
  @TreeChildren({ cascade: true })
  // children
  submenuitems: SubmenuItemEntity[];

  @Field(() => SubmenuItemEntity)
  @TreeParent({ onDelete: 'CASCADE' })
  // parent
  submenuitem: SubmenuItemEntity;
  ///////////////////////////////////
  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
