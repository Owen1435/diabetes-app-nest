import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: parseInt(configService.get('DATABASE_PORT'), 10),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_DATABASE'),
    entities: ['dist/src/entity/*entity.js'],
    synchronize: true,
  }),
};

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  exports: [TypeOrmModule],
})
export class OrmModule {}
