import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum OrderStatus {
    AWAIT_PAYMENT = "Ожидает оплаты",
    PAYMENT = "Оплачен",
    CANCELED = "Отменен",
}

@Entity('order')
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    number: number

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    status: OrderStatus

    @Column()
    deliveryDate: Date

    @ManyToOne(() => UserEntity, user => user.orders, {onDelete: 'CASCADE'})
    user_ref: UserEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}