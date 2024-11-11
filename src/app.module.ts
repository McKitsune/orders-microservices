import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [OrdersModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
