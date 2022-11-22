import { Products } from './entity/products.entity';
import {
  Controller,
  Get,
  UseGuards,
  Request,
  Post,
  Body,
  Headers,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductService } from './produts.service';
import { HttpService } from '@nestjs/axios';
import { CreateProductDto } from './dto/products.dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { AuthService } from 'src/auth/auth.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: 'Find all products',
  })
  @Get('/all')
  async findAll(): Promise<Products[]> {
    return await this.productsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    summary: 'create a product',
  })
  @Post('/create')
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }
}
