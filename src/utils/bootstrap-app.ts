import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import type { NestExpressApplication } from '@nestjs/platform-express';

import { ApiConfigService } from "../shared/services/config/config.service";
import { SharedModule } from "../shared/shared.module";

export async function bootstrapApp(app: NestExpressApplication) {
  const apiConfigService = app.select(SharedModule).get(ApiConfigService);
  const documentBuilder = new DocumentBuilder()
    .setTitle('API')
    .setDescription('The API description')
    // .setVersion('1.0')
    .addTag('tags')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
        description: 'API key for external calls',
      },
      'x-api-key',
    )
    .addBearerAuth();
  if (process.env.API_VERSION) {
    documentBuilder.setVersion(process.env.API_VERSION);
  }
  const document = SwaggerModule.createDocument(app, documentBuilder.build());
  SwaggerModule.setup(`${apiConfigService.appConfig.apiVersion}/swagger`, app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });
  console.info(
    `Documentation: http://localhost:${process.env.PORT}/documentation`,
  );
}
