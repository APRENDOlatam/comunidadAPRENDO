import { ApiProperty } from '@nestjs/swagger';

export class CreateDesafioDTO {
  @ApiProperty({
    example: 'DESAFÍO 01 (6 USD en ETH) - Relevamiento de intereses',
  })
  readonly nombre_desafío: string;
  @ApiProperty({
    example: 'Conociendo los intereses de la comunidad APRENDO',
  })
  readonly descripcion: string;
  @ApiProperty({
    example: 'Comunidad APRENDO',
  })
  readonly categoria: string;
  @ApiProperty({
    example: '6.00',
  })
  readonly incentivo: string;
  @ApiProperty({
    example: '66cdb0b728d61400860a348b',
  })
  readonly blockchain: string;
  @ApiProperty({
    example: true,
  })
  readonly estado: boolean;
  readonly createdat: Date;
}
