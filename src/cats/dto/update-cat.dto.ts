import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateCatDto extends PartialType(CreateCatDto) {
  //PartialType(CreateCatDto) , datos son ahora opcionales en el update, no hace falta poner de nuevo los datos, las validacione se las trae desde el createdto
  @IsString()
  @IsOptional()
  name?: string;
  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsOptional()
  age?: number;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  weight?: number;
  @IsString()
  breed: string;
}

