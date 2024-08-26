import { ApiProperty } from '@nestjs/swagger';

export class CreateCursoDTO {
  @ApiProperty({ example: 'Mint NFT' })
  readonly nombre_curso: string;
  readonly descripcion: string;
  readonly nivel: string;
  readonly incentivo: string;
  readonly blockchain: string;
  readonly estado: boolean;
  readonly createdat: Date;
}
