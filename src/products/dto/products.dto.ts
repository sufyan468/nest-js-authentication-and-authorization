import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({
    message: 'Name is required',
  })
  name: string;

  @IsNotEmpty({
    message: 'Product SKU is required',
  })
  SKU: string;

  @IsNotEmpty({
    message: 'Product Description is required',
  })
  description: string;

  @IsNotEmpty({
    message: 'Product Price is required',
  })
  price: string;
}
