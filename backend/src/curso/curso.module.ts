import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CursoSchema } from './schemas/curso.schema';
import { BlockchainSchema } from 'src/blockchain/schemas/blockchain.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Curso', schema: CursoSchema }]),
    MongooseModule.forFeature([
      { name: 'Blockchain', schema: BlockchainSchema },
    ]),
  ],
  providers: [CursoService],
  controllers: [CursoController],
})
export class CursoModule {}
