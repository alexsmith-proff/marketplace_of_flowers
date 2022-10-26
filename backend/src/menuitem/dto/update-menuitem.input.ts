import { CreateMenuItemInput } from './create-menuitem.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMenuItemInput extends PartialType(CreateMenuItemInput) {
  @Field(() => Int, { description: 'ID menuitem' })
  id: number;

  @Field(() => String, { description: 'name menuitem', nullable: true })
  name: string;

  @Field(() => Int, { description: 'serial number', nullable: true})
  serial_number: number;

  @Field(() => String, { description: 'name menuitem', nullable: true })
  link: string;

  @Field(() => Number, { description: 'Serial menu ID', nullable: true })
  menu_id: number
}
