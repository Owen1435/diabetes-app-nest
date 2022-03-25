import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class UpdateClientRequestDto {
  @ApiProperty({
    description: 'Client id',
    example: 10,
  })
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  clientId: number;

  @ApiProperty({
    description: 'First name',
    example: 'Sergei',
  })
  firstName?: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Tsybulski',
  })
  lastName?: string;

  @ApiProperty({
    description: 'Middle name',
    example: 'Olegovich',
  })
  middleName?: string;

  @ApiProperty({
    description: 'Client data',
    example: '{"age": 20, "gender": "male"}',
  })
  data?: object;
}
