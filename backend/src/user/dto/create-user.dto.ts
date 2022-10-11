import { UserRole } from "../entities/user.entity"

export class CreateUserDto {
    id: number
    email?: string
    password?: string
    name?: string
    role?: UserRole
}
