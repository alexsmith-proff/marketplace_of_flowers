import { Body, Controller, Get, HttpCode, Post, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Auth } from './decorators/auth.decorator';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return this.authService.register(dto)
  }

  // @UsePipes(new ValidationPipe())
  // @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return this.authService.login(dto)
  }

  // @Auth() - защита. Только авторизованный пользователь может использовать этот endPoint
  @Auth()
  @Get('profile')
  async getProfile(@Request() req) {
    const token = req.headers.authorization.split(' ')[1]
    return this.authService.getProfile(token)
  }

}
