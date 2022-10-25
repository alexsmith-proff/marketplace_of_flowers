import { SubmenuItemEntity } from 'src/submenuitem/entities/submenuitem.entity';
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
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('submenuitemtwo', {
  orderBy: {
    serial_number: 'ASC',
  },
})
export class SubmenuItemTwoEntity {
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

  @Field(() => SubmenuItemEntity)
  @ManyToOne(() => SubmenuItemEntity, (submenuitem) => submenuitem.submenuitems, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'submenuitem_id' })
  submenuitem: SubmenuItemEntity;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
