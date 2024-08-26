import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CursoSchema } from './schemas/curso.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Curso', schema: CursoSchema }]),
  ],
  providers: [CursoService],
  controllers: [CursoController],
})
export class CursoModule {}
