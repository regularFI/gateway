import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  app.enableCors();
  await app.listen(7070);
};
bootstrap().then(r => r);
