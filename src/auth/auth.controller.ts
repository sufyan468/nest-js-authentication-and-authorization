import {
  Controller,
  Post,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'Login as a user',
  })
  @UsePipes(ValidationPipe)
  @Post('/login')
  async login(@Request() req: any) {
    return await this.authService.login(req.user);
  }
}
