import { ApiProperty } from '@nestjs/swagger';

export class CreateCertificacionDTO {
  readonly id_curso: string;
  readonly id_desafio: string;
  readonly id_usuario: string;
  readonly estado: boolean;
  readonly fecha_certificacion: Date;
  readonly admin_certificador: string;
  readonly createdat: Date;
}
