import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { ApiConfigService } from './shared/services/config/config.service';
import { SharedModule } from './shared/shared.module';

import { AppModule } from './app.module';
import { bootstrapApp } from './utils/bootstrap-app';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const apiConfigService = app.select(SharedModule).get(ApiConfigService);
  bootstrapApp(app);

  await app.listen(apiConfigService.appConfig.port);
}
bootstrap();
