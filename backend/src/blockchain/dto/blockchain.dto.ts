import { ApiProperty } from '@nestjs/swagger';

export class CreateBlockchainDTO {
  readonly nombre: string;
  readonly chain_id: Number;
  readonly createdat: Date;
}
