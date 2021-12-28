import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { MongooseModule } from '@nestjs/mongoose';

const credentials = encodeURIComponent('ArcMyWorld#2017');
const uri = 'mongodb://bmk:' + credentials + '@localhost:27017';

@Module({
  imports: [CustomersModule, MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
