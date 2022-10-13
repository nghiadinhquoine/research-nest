import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ConfigModule } from '@nestjs/config';

import { ApiConfigService } from './services/config/config.service';
// import { AwsS3Service } from './services/third-party/aws.service';
// import { GeneratorService } from './services/common/generator.service';
// import { ValidatorService } from './services/common/validator.service';

const providers = [
  ApiConfigService,
  // ValidatorService,
  // AwsS3Service,
  // GeneratorService,
];

@Global()
@Module({
  providers,
  imports: [
    HttpModule,
    CqrsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      expandVariables: true,
    }),
  ],
  exports: [...providers, HttpModule, CqrsModule],
})
export class SharedModule {}