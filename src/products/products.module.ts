import { ProductController } from './products.controller';
import { Module } from '@nestjs/common';
import { ProductService } from './produts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { Products } from './entity/products.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([Products]), HttpModule],
})
export class ProductsModule {}
