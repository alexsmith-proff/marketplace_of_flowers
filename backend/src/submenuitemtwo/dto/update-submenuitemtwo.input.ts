import { CreateSubmenuItemTwoInput } from './create-submenuitemtwo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSubmenuItemTwoInput extends PartialType(CreateSubmenuItemTwoInput) {
  @Field(() => Int, { description: 'ID submenuitemtwo)' })
  id: number;

  @Field(() => Int, { description: 'serial number)', nullable: true})
  serial_number: number;

  @Field(() => String, { description: 'name submenuitem)', nullable: true })
  name: string;

  @Field(() => String, { description: 'link submenuitem)', nullable: true })
  link: string;

  @Field(() => Number, { description: 'Serial menu ID)', nullable: true })
  submenuitem_id: number
}
