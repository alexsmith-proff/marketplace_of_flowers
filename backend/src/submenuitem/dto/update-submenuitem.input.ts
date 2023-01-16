import { CreateSubmenuItemInput } from './create-submenuitem.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubmenuItemInput extends PartialType(CreateSubmenuItemInput) {
  @Field(() => Int, { description: 'ID submenuitem)' })
  id: number;

  @Field(() => Int, { description: 'serial number)', nullable: true})
  serial_number: number;

  @Field(() => String, { description: 'name submenuitem)', nullable: true })
  name: string;

  @Field(() => String, { description: 'link submenuitem)', nullable: true })
  link: string;

  @Field(() => String, { description: 'link submenuitem)', nullable: true })
  slug: string;

  @Field(() => Number, { description: 'Serial menu ID)', nullable: true })
  menuitem_id: number
}
