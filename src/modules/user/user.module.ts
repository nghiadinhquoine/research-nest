import { Module } from '@nestjs/common';
import { SharedModule } from '../../shared/shared.module';
import { UserController } from './user.controller';
import { UserLoginHandler } from './handles/user-login.handle';

@Module({
  controllers: [UserController],
  imports: [SharedModule],
  providers: [UserLoginHandler],
})
export class UserModule {}
