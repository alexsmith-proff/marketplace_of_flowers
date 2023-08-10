import { InputType } from "@nestjs/graphql";
import { OrderStatus } from "../entities/order.entity";

@InputType()
export class CreateOrderInput {
    number: number
    name: string
    price: number
    status: OrderStatus
    deliveryDate: string
    user_id: number
}
