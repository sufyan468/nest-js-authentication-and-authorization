import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from '../../users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly usersService: UsersService,
  ) {
    console.log('RolesGuard');
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    console.log('roles', roles);
    const request = context.switchToHttp().getRequest();

    if (!roles) {
      return true;
    }
    if (request?.user) {
      const { id, password } = request.user;
      const user = await this.usersService.findOne(id, password);
      return roles.includes(user.role);
    }
  }
}
