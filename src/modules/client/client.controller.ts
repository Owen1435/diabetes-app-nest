import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { SaveClientRequestDto } from './dto/save-client.request.dto';
import { ApiTags } from '@nestjs/swagger';
import { ClientEntity } from '../../enyity/client.entity';
import { UpdateClientRequestDto } from './dto/update-client.request.dto';
import { UpdateResult } from 'typeorm';

@ApiTags('client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('/save')
  async save(@Body() saveDto: SaveClientRequestDto): Promise<ClientEntity> {
    return await this.clientService.save(saveDto);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/update')
  async update(
    @Body() updateDto: UpdateClientRequestDto,
  ): Promise<UpdateResult> {
    return await this.clientService.update(updateDto);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/get')
  async getAll(): Promise<ClientEntity[]> {
    return await this.clientService.getAll();
  }

  @HttpCode(HttpStatus.CREATED)
  @Get('/get/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<ClientEntity> {
    return await this.clientService.getById(id);
  }
}
