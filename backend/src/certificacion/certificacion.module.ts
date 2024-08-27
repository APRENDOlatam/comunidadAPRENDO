import { Module } from '@nestjs/common';
import { CertificacionController } from './certificacion.controller';
import { CertificacionService } from './certificacion.service';
import { CertificacionSchema } from './schemas/certificacion.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Certificacion', schema: CertificacionSchema },
    ]),
  ],
  controllers: [CertificacionController],
  providers: [CertificacionService],
})
export class CertificacionModule {}
