import { NestFactory } from '@nestjs/core';
import { NodeJSChapterModule } from './nodejs-chapter.module';

async function bootstrap() {
  const app = await NestFactory.create(NodeJSChapterModule);
  await app.listen(3000);
}
bootstrap();
