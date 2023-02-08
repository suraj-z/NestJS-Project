import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from './server.entity';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';

@Module({
  controllers: [ServerController],
  providers: [ServerService],
  imports: [TypeOrmModule.forFeature( [Server])],
  exports: [ServerService],
})
export class ServerModule {}
