import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RolesGuard } from './auth/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Ecommerce API Documentation')
    .setDescription('The Ecommerce API description')
    .setVersion('1.0')
    .addTag('Ecommerce')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // SwaggerModule setup (see https://docs.nestjs.com/recipes/swagger)
  SwaggerModule.setup('api', app, document);

  // Global Guards (see https://docs.nestjs.com/guards#global-guards)
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new RolesGuard(reflector, app.get('UsersService')));

  // app starts listening on port 3003
  await app.listen(3003);
}
bootstrap();
