import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from './house/house.module';
import 'dotenv/config';
import { CursoModule } from './curso/curso.module';
import { DesafioModule } from './desafio/desafio.module';
import { CertificacionModule } from './certificacion/certificacion.module';
import { BlockchainModule } from './blockchain/blockchain.module';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(process.env.DATABASE_CONEXION_STRING),
    HouseModule,
    CursoModule,
    DesafioModule,
    CertificacionModule,
    BlockchainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
