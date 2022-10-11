import { InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateSubmenuItemInput {
  @Field(() => Int, { description: 'Serial number)', nullable: true })
  serial_number: number;

  @Field(() => String, { description: 'name submenuitem)' })
  name: string;

  @Field(() => String, { description: 'link submenuitem)', nullable: true })
  link: string;

  @Field(() => Number, { description: 'serial menu ID)', nullable: true })
  menuitem_id: number
}
