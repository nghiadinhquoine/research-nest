import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';

import { UserLoginHandler } from "./handles/user-login.handle";
import { UserLoginPayloadDto } from "./dto/user-login-payload.dto";

@Controller('user')
export class UserController {
  constructor(
    private userLoginHandler: UserLoginHandler,
  ) {}
  
  @HttpCode(HttpStatus.OK)
  @Post('')
  async userLogin(
    // @Req() request: AppRequest,
    @Req() request: any,
    @Body() payload: UserLoginPayloadDto,
  ) {
    return this.userLoginHandler.execute(request, payload);
  }
}
