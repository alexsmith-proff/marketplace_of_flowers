import { InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateMenuItemInput {
  @Field(() => String, { description: 'name menuitem)' })
  name: string;

  @Field(() => Number, { description: 'menu ID)' })
  menu_id: number

  @Field(() => Number, { description: 'serial_number menuitem)', nullable: true })
  serial_number: number;

  @Field(() => String, { description: 'link menuitem)', nullable: true })
  link: string;  
}