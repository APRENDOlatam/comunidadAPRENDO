import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Desafio } from './interfaces/desafio.interface';
import { CreateDesafioDTO } from './dto/desafio.dto';

@Injectable()
export class DesafioService {
  constructor(@InjectModel('Desafio') private desafioModel: Model<Desafio>) {}

  async getDesafioByName(desafioName: string): Promise<Desafio> {
    const desafio = this.desafioModel.findOne({ nombre_desafio: desafioName });
    return desafio;
  }

  async getDesafioById(desafioId: number): Promise<Desafio> {
    const desafio = this.desafioModel.findOne({ id_desafio: desafioId });
    return desafio;
  }

  async createDesafio(createDesafioDTO: CreateDesafioDTO): Promise<Desafio> {
    let desafio = new this.desafioModel(createDesafioDTO);
    desafio.id_desafio = desafio._id;
    return await desafio.save();
  }

  async updateDesafio(
    id_desafio: number,
    createDesafioDTO: CreateDesafioDTO,
  ): Promise<Desafio> {
    const updatedHouse = await this.desafioModel.findByIdAndUpdate(
      id_desafio,
      createDesafioDTO,
      { new: true },
    );
    return updatedHouse;
  }
}
