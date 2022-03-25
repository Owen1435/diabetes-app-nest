import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { OrmModule } from './modules/orm/orm.module';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [ConfigModule.forRoot(), OrmModule, ClientModule],
  controllers: [AppController],
})
export class AppModule {}
