import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './interfaces/curso.interface';
import { Blockchain } from '../blockchain/interfaces/blockchain.interface';
import { CreateCursoDTO } from './dto/createCursoDTO';

@Injectable()
export class CursoService {
  constructor(
    @InjectModel('Curso') private cursoModel: Model<Curso>,
    @InjectModel('Blockchain')
    private blockchainModel: Model<Blockchain>,
  ) {}

  async createCurso(createCursoDTO: CreateCursoDTO): Promise<Curso> {
    const blockchain = await this.blockchainModel.find({
      id_blockchain: createCursoDTO.blockchain,
    });

    if (blockchain) {
      let curso = new this.cursoModel(createCursoDTO);
      curso.id_curso = curso._id;
      return await curso.save();
    } else {
      throw new Error('Blockchain inexistente');
    }
  }

  async getById(idCurso: string): Promise<Curso> {
    const curso = this.cursoModel.findById(idCurso);
    return curso;
  }

  async getCursos(): Promise<Curso[]> {
    const cursos = await this.cursoModel.find();
    return cursos;
  }
}
