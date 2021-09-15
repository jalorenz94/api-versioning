import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning()
  const options = new DocumentBuilder()
    .setTitle("RYTLE API")
    .setVersion(process.env.npm_package_version || "not set")
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup("api", app, document)

  await app.listen(3000);
}
bootstrap();
