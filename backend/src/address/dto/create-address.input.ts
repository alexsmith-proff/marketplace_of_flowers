import { InputType } from "@nestjs/graphql"

@InputType()
export class CreateAddressInput {
    address: string
    fullname: string
    phone: string
    user_id: number
}
