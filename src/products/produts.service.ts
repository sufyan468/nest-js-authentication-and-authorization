import { CreateProductDto } from './dto/products.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entity/products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async findAll(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async create(createProductDto: CreateProductDto): Promise<Products> {
    try {
      const product = new Products();
      product.name = createProductDto.name;
      product.SKU = createProductDto.SKU;
      product.description = createProductDto.description;
      product.price = createProductDto.price;
      return await this.productsRepository.save(product);
    } catch (err) {
      throw new Error(`Error creating ${err} product ${err.message}`);
    }
  }
}
