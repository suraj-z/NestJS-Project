import { Module } from '@nestjs/common';
import { FinalsService } from './finals.service';
import { FinalsController } from './finals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Finals } from './entities/final.entity';
import { Server } from '../server/server.entity';
import { ServerService } from '../server/server.service';

@Module({
  controllers: [FinalsController],
  providers: [FinalsService,ServerService],
  imports: [TypeOrmModule.forFeature([Finals, Server])],
  exports: [FinalsService,ServerService],
})
export class FinalsModule {}
