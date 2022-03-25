import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { SaveClientRequestDto } from './dto/save-client.request.dto';
import { ClientEntity } from '../../enyity/client.entity';
import { UpdateClientRequestDto } from './dto/update-client.request.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async save(saveDto: SaveClientRequestDto): Promise<ClientEntity> {
    return await this.clientRepository.save({
      ...saveDto,
      data: saveDto.data,
    });
  }

  async update(updateDto: UpdateClientRequestDto): Promise<UpdateResult> {
    const id = updateDto.clientId;
    delete updateDto.clientId;

    const client = await this.clientRepository.findOne(id);
    if (!client) {
      throw new HttpException(
        `Client with id:${id} was not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.clientRepository.update(id, updateDto);
  }

  async getAll(): Promise<ClientEntity[]> {
    return await this.clientRepository.find();
  }

  async getById(clientId: number): Promise<ClientEntity> {
    return await this.clientRepository.findOne(clientId);
  }
}
