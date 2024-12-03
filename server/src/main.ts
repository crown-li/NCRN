import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 启用 CORS
  app.enableCors();

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port || 3000);
}
bootstrap();
