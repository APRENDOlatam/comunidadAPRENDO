import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Certificacion } from './interfaces/certificacion.interface';
import { CreateCertificacionDTO } from './dto/certificacion.dto';
@Injectable()
export class CertificacionService {
  constructor(
    @InjectModel('Certificacion')
    private certificacionModel: Model<Certificacion>,
  ) {}

  async getCertificacionById(certificacionId: string): Promise<Certificacion> {
    const desafio = this.certificacionModel.findOne({
      id_certificacion: certificacionId,
    });
    return desafio;
  }

  async createCertificacion(
    createCertificacionDTO: CreateCertificacionDTO,
  ): Promise<Certificacion> {
    let certificacion = new this.certificacionModel(createCertificacionDTO);
    certificacion.id_certificacion = certificacion._id;
    return await certificacion.save();
  }

  async updateCertificacion(
    id_certificacion: number,
    createCertificacionDTO: CreateCertificacionDTO,
  ): Promise<Certificacion> {
    const updatedCertificacion =
      await this.certificacionModel.findByIdAndUpdate(
        id_certificacion,
        createCertificacionDTO,
        { new: true },
      );
    return updatedCertificacion;
  }

  async getCertificaciones(): Promise<Certificacion[]> {
    const cursos = await this.certificacionModel.find();
    return cursos;
  }
}
