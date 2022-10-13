import { Injectable } from '@nestjs/common';
import { ApiConfigService } from '../../../shared/services/config/config.service';
import { UserLoginPayloadDto } from '../dto/user-login-payload.dto';
import { UserLoginResponseDto } from '../dto/user-login-response.dto';

@Injectable()
export class UserLoginHandler {
  constructor(private apiConfigService: ApiConfigService) {}

  async execute(
    // context: RequestContext,
    context: any,
    payload: UserLoginPayloadDto,
  ): Promise<UserLoginResponseDto> {
    // const { correlationId, logger } = context;
    try {
      // return this.apiConfigService.appConfig.
      console.log('###', this.apiConfigService.appConfig);
      return {
        token: "test",
      }
    } catch (error) {
      const msg = 'Exception error in UserLoginHandler';

      throw error;
    }
  }
}
