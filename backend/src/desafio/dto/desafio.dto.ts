import { ApiProperty } from '@nestjs/swagger';

export class CreateDesafioDTO {
  @ApiProperty({
    example: 'DESAFÍO 01 (6 USD en ETH) - Relevamiento de intereses',
  })
  readonly nombre_desafío: string;
  readonly categoria: string;
  readonly incentivo: string;
  readonly blockchain: string;
  readonly estado: boolean;
  readonly createdat: Date;
}
