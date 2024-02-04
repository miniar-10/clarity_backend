import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}))
  const config = new DocumentBuilder()
    .setTitle('Clarity')
    .setDescription('prject description')
    .setVersion('1.0')
    .addTag('Project')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, // This is the security scheme object
    'access-token', // This is the name of the security scheme
  )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
