import { Module } from '@nestjs/common';
import { BridgesService } from './bridges.service';
import { BridgesController } from './bridges.controller';
import { Bridge } from './entities/bridge.entity';
import { Server } from '../server/server.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServerService } from '../server/server.service';

@Module({
  controllers: [BridgesController],
  providers: [BridgesService,ServerService],
  imports: [TypeOrmModule.forFeature([Bridge, Server])],
  exports: [BridgesService,ServerService],
})
export class BridgesModule {}
