import { Auth } from './../auth/decorators/auth.decorator';
import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpCode, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Get('profile')
  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  //  @Auth()
  // async getProfile(@CurrentUser('id') id: number) {
  //   console.log('kkkkkkkkkkkkk');
    
  //   return this.userService.getById(id)
  // }

  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  // @Auth()
  // @Get('profile')
  // async getProfile(@Request() req) {
  //   const token = req.headers.authorization.split(' ')[1]
  //   return this.userService.getUser(token)
  // }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch(':id')
  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  @Auth()
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    
    return await this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  @Auth()
  async remove(@Param('id') id: string) {
    return await this.userService.remove(+id);
  }
}
