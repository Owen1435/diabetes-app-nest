import { Injectable } from '@nestjs/common';
import { ClientRepository } from './client.repository';
import { SaveClientRequestDto } from './dto/save-client.request.dto';

@Injectable()
export class ClientService {
  constructor(private clientRepository: ClientRepository) {}

  async save(saveDto: SaveClientRequestDto): Promise<void> {
    await this.clientRepository.save({
      ...saveDto,
      data: JSON.stringify(saveDto.data),
    });
    return;
  }
}
