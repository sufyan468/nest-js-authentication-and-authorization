import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    return await this.usersService.findOne(email, password);
  }

  async login(user: any) {
    try {
      const payload = { email: user.email, sub: user.id };
      const token = {
        access_token: this.jwtService.sign(payload),
      };
      return {
        username: payload,
        ...token,
      };
    } catch (error) {
      throw new Error(`Error logging in ${error} user ${error.message}`);
    }
  }


}
