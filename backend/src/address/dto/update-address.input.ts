import { PartialType } from '@nestjs/mapped-types';
import { CreateAddressInput } from './create-address.input';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAddressInput extends PartialType(CreateAddressInput) {
    address: string
    fullname: string
    phone: string
    user_id: number
}
