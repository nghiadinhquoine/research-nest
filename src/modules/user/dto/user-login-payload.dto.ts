import { ApiProperty } from '@nestjs/swagger';

export class UserLoginPayloadDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
