import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './interfaces/curso.interface';
import { CreateCursoDTO } from './dto/createCursoDTO';

@Injectable()
export class CursoService {
  constructor(@InjectModel('Curso') private cursoModel: Model<Curso>) {}

  async createCurso(createCursoDTO: CreateCursoDTO): Promise<Curso> {
    let curso = new this.cursoModel(createCursoDTO);
    curso.id_curso = curso._id;
    return await curso.save();
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
