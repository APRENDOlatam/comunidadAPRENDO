import { ApiProperty } from '@nestjs/swagger';

export class CreateCursoDTO {
  @ApiProperty({ example: '2024 - Criptomonedas y Blockchain' })
  readonly nombre_curso: string;
  @ApiProperty({ example: 'Curso sobre criptomonedas y blockchain' })
  readonly descripcion: string;
  @ApiProperty({ example: 'Plata' })
  readonly nivel: string;
  @ApiProperty({ example: '20.00' })
  readonly incentivo: string;
  @ApiProperty({ example: '66cdb0b728d61400860a348b' })
  readonly blockchain: string;
  @ApiProperty({ example: true })
  readonly estado: boolean;
  readonly createdat: Date;
}
