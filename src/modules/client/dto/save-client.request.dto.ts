import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SaveClientRequestDto {
  @ApiProperty({
    description: 'First name',
    example: 'Sergei',
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Tsybulski',
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Middle name',
    example: 'Olegovich',
  })
  @IsNotEmpty()
  middleName: string;

  @ApiProperty({
    description: 'Client data',
    example: '{"age": 20, "gender": "male"}',
  })
  data: object;
}
