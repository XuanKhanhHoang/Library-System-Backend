import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { ListCanBeSortDTO } from 'src/share/dto/base.dto';
export class GetUserLoanReturnTransactions extends ListCanBeSortDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number.parseInt(value))
  id?: number;

  @IsOptional()
  @IsNotEmpty()
  document_name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => {
    let a = new Date(decodeURIComponent(value));
    a.setHours(0, 0, 0);
    return a;
  })
  min_date?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => {
    let a = new Date(decodeURIComponent(value));
    a.setHours(23, 59, 59);
    return a;
  })
  max_date?: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => value != 'false')
  is_returned?: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  @Transform(({ value }) => value != 'false')
  is_punished?: boolean;
}
export class GetLoanReturnTransactions extends GetUserLoanReturnTransactions {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number.parseInt(value))
  librarian_id?: number;
  @IsOptional()
  @IsNotEmpty()
  reader_name?: string;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => Number.parseInt(value))
  user_id?: number;
}
