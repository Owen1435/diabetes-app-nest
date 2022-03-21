import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OrmModule } from './modules/orm/orm.module';

@Module({
  imports: [ConfigModule.forRoot(), OrmModule],
  controllers: [AppController],
})
export class AppModule {}
