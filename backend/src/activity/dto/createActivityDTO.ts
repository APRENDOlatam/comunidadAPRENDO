import { ApiProperty } from '@nestjs/swagger';

export class CreateActivityDTO {
  @ApiProperty({ example: 'Mint NFT' })
  readonly title : string;
  readonly description  : string;
  readonly required_POAP_Id : string;
  readonly createdat: Date;
}
