import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { SaveClientRequestDto } from './dto/save-client.request.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { ClientEntity } from '../../enyity/client.entity';
import { UpdateClientRequestDto } from './dto/update-client.request.dto';
import { UpdateResult } from 'typeorm';
import { Pagination } from 'nestjs-typeorm-paginate';

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
  @Get('/get-all')
  async getAll(): Promise<ClientEntity[]> {
    return await this.clientService.getAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/get/:id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<ClientEntity> {
    return await this.clientService.getById(id);
  }
  @ApiQuery({ name: 'limit', description: 'Limit', example: 5 })
  @ApiQuery({ name: 'page', description: 'Page', example: 1 })
  @HttpCode(HttpStatus.OK)
  @Get('get')
  async paginate(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ): Promise<Pagination<ClientEntity>> {
    limit = limit > 100 ? 100 : limit;
    return this.clientService.paginate({
      page,
      limit,
      route: '/client',
    });
  }
}
