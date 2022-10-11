import { InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateMenuItemInput {
  // @Field(() => Int, { description: 'Serial number)' })
  // serial_number: number;

  @Field(() => String, { description: 'name menuitem)' })
  name: string;

  @Field(() => String, { description: 'link menuitem)', nullable: true })
  link: string;

  // @Field(() => Number, { description: 'Serial menu ID)' })
  // menu_id: number
}