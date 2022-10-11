import { InputType, Int, Field} from '@nestjs/graphql';

@InputType()
export class CreateSubmenuItemInput {
  @Field(() => String, { description: 'name submenuitem)' })
  name: string;

  @Field(() => Number, { description: 'serial menu ID)' })
  menuitem_id: number

  @Field(() => Int, { description: 'Serial number)', nullable: true })
  serial_number: number;

  @Field(() => String, { description: 'link submenuitem)', nullable: true })
  link: string;
  
}
