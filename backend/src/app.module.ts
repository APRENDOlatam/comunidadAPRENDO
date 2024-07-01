import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PoapModule } from './poap/poap.module';
import { QuestModule } from './quest/quest.module';
import 'dotenv/config';
import { ActivityModule } from './activity/activity.module';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(process.env.DATABASE_CONEXION_STRING),
    PoapModule,
    QuestModule,
    ActivityModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
