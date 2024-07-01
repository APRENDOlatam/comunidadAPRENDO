import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestDTO {
  @ApiProperty({ example: 'Mint NFT' })
  readonly nameQuest: string;
  readonly createdat: Date;
}
