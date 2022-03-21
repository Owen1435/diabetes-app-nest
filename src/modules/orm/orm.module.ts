import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('DATABASE_URL'),
    ssl: {
      rejectUnauthorized: false,
    },
    synchronize: true,
    entities: ['dist/src/entity/*entity.js'],
  }),
};

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  exports: [TypeOrmModule],
})
export class OrmModule {}
