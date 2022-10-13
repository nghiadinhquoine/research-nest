import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import mime from 'mime-types';

import type { AWSUploadFilePayloadDto } from './dto/aws-upload-file-payload.dto';
import { ApiConfigService } from '../config/config.service';
// import { GeneratorService } from '../common/generator.service';

@Injectable()
export class AwsS3Service {
  private readonly s3: AWS.S3;

  constructor(
    public apiConfigService: ApiConfigService,
    // public generatorService: GeneratorService,
  ) {
    const awsS3Config = apiConfigService.awsS3Config;

    const options: AWS.S3.Types.ClientConfiguration = {
      apiVersion: awsS3Config.bucketApiVersion,
      region: awsS3Config.bucketRegion,
    };

    this.s3 = new AWS.S3(options);
  }

  // async uploadImage(file: AWSUploadFilePayloadDto): Promise<string> {
  //   const fileName = this.generatorService.fileName(
  //     <string>mime.extension(file.mimetype),
  //   );
  //   const key = 'images/' + fileName;
  //   await this.s3
  //     .putObject({
  //       Bucket: this.apiConfigService.awsS3Config.bucketName,
  //       Body: file.buffer,
  //       ACL: 'public-read',
  //       Key: key,
  //     })
  //     .promise();

  //   return key;
  // }
}
