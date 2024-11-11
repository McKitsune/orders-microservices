import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@Body() orderData: { userId: string; items: any[] }) {
    return await this.ordersService.createOrder(orderData.userId, orderData.items);
  }
}
