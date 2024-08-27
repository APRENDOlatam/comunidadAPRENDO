import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificacionDTO {
  @ApiProperty({ example: '66cdb0b728d61400860a348b' })
  readonly id_curso: string;
  @ApiProperty({ example: '66cdb0b728d61400860a348b' })
  readonly id_desafio: string;
  @ApiProperty({ example: '66cdb0b728d61400860a348b' })
  readonly id_usuario: string;
  @ApiProperty({ example: true })
  readonly estado: boolean;
  @ApiProperty({ example: '2024-08-27' })
  readonly fecha_certificacion: Date;
  @ApiProperty({ example: '66cdb0b728d61400860a348b' })
  readonly admin_certificador: string;
  readonly createdat: Date;
}
