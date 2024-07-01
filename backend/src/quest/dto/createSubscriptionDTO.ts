import { ApiProperty } from '@nestjs/swagger';

export class CreateSubscriptionDTO {
  @ApiProperty({ example: '64db87be228a3805976bb173' })
  readonly idQuest: string;
  @ApiProperty({ example: '64db87be228a3805976bb173' })
  readonly idUser: string;
  readonly createdat: Date;
}
