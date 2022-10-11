import { UserEntity } from 'src/user/entities/user.entity';
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

// Создание нового декоратора CurrentUser
export const CurrentUser = createParamDecorator(
    (data: keyof UserEntity, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest()
        const user = request.user
        
        return data ? user[data] : user
    }
)