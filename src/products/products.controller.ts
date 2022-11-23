import { Products } from './entity/products.entity';
import { Controller, Get, UseGuards, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductService } from './produts.service';
import { CreateProductDto } from './dto/products.dto';
import { ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Role } from '../enums/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Get('/all')
  @ApiOperation({
    summary: 'Find all products',
  })
  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UsePipes(ValidationPipe)
  async findAll(): Promise<Products[]> {
    return await this.productsService.findAll();
  }

  @Post('/create')
  @ApiOperation({
    summary: 'create a product',
  })
  @Roles('admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @UsePipes(ValidationPipe)
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }
}
