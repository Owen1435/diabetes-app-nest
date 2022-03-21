import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { SaveClientRequestDto } from './dto/save-client.request.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/save')
  async save(@Body() saveDto: SaveClientRequestDto): Promise<string> {
    await this.clientService.save(saveDto);
    return 'Client has been save';
  }
}
