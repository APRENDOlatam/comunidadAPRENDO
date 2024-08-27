import { Module } from '@nestjs/common';
import { DesafioController } from './desafio.controller';
import { DesafioService } from './desafio.service';
import { DesafioSchema } from './schemas/desafio.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Desafio', schema: DesafioSchema }]),
  ],
  controllers: [DesafioController],
  providers: [DesafioService],
})
export class DesafioModule {}
