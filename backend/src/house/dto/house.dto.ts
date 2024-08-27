import { ApiProperty } from '@nestjs/swagger';

export class CreateHouseDTO {
  @ApiProperty({ example: 1 })
  readonly id_casa: number;
  @ApiProperty({ example: 'Wayra' })
  readonly nombre_casa: string;
  readonly fecha_registro: Date;
}
