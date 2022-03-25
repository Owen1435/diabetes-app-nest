import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ClientEntity } from '../../enyity/client.entity';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('DATABASE_URL'),
    synchronize: true,
    logging: false,
    extra: { ssl: { rejectUnauthorized: false } },
    entities: [ClientEntity],
  }),
};

@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfigAsync)],
  exports: [TypeOrmModule],
})
export class OrmModule {}
