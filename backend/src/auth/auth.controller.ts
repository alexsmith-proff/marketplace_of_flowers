import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

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

}
