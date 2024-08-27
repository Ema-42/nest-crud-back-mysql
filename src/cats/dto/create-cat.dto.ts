import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsOptional()
  age: number;
  @IsNumber()
  @IsPositive()
  weight: number;
  @IsString()
  breed: string;
}

