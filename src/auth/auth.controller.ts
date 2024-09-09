import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import { Request } from 'express';

import { Role } from '../common/enums/rol.enum';
import { Auth } from 'src/decorators/auth.decorator';
import { ActiveUser } from 'src/common/decorators/active-user.decorator';
import { UserActiveInterface } from 'src/common/interfaces/user-active.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  /*   @Get('profile')
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  profile(@Req() req: RequestWithUser) {
    return this.authService.profile(req.user);
  } */
  @ApiBearerAuth()
  @Get('profile')
  //este decorador contiene a otros
  @Auth(Role.USER)
  profile(@ActiveUser() user: UserActiveInterface) {
    return this.authService.profile(user);
  }
}

