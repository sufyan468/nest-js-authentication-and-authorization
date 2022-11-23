import { ProductController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductService } from './produts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { Products } from './entity/products.entity';
import { HttpModule } from '@nestjs/axios';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, RolesGuard],
  exports: [ProductService, UsersService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([Products]), HttpModule],
})
export class ProductsModule {}
