import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'src/config';
import { PRODUCT_SERVICE } from 'src/config/services';
import { NatsModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [NatsModule]
})
export class OrdersModule {}
