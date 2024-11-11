import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class OrdersService {
  private readonly redis = new Redis();

  async createOrder(userId: string, items: any[]): Promise<string> {
    const orderId = `order:${Date.now()}`;
    await this.redis.set(orderId, JSON.stringify({ userId, items }));
    return orderId;
  }
}
