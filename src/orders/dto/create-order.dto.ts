import { ArrayMinSize, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { OrderItemDto } from "./order-item.dto";

export class CreateOrderDto {

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true }) //valida cada uno de los elementos del array
  @Type(() => OrderItemDto)
  items: OrderItemDto[]

}
