import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('address')
export class AddressEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    address: string

    @Column()
    fullname: string

    @Column()
    phone: string

    @ManyToOne(() => UserEntity, user => user.addresses, {onDelete: 'CASCADE'})
    user_ref: UserEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
