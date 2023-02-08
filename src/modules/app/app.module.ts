import * as winston from 'winston';
import * as rotateFile from 'winston-daily-rotate-file';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { AuthModule } from '../auth/auth.module';
import { WinstonModule } from '../winston/winston.module';
import { AccessControlModule } from 'nest-access-control';
import { roles } from './app.roles';
import { BridgesModule } from '../bridges/bridges.module';
import {FinalsModule} from '../finals/finals.module'
import { ServerModule } from '../server/server.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [__dirname + './../**/**.entity{.ts,.js}'],
          // synchronize: configService.isEnv('dev'),
          synchronize:false,
          keepConnectionAlive: true,
        } as TypeOrmModuleAsyncOptions;
      },
    }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return configService.isEnv('dev')
          ? {
              level: 'info',
              format: winston.format.json(),
              defaultMeta: { service: 'user-service' },
              transports: [
                new winston.transports.Console({
                  format: winston.format.simple(),
                }),
              ],
            }
          : {
              level: 'info',
              format: winston.format.json(),
              defaultMeta: { service: 'user-service' },
              transports: [
                new winston.transports.File({
                  filename: 'logs/error.log',
                  level: 'error',
                }),
                new winston.transports.Console({
                  format: winston.format.simple(),
                }),
                new rotateFile({
                  filename: 'logs/application-%DATE%.log',
                  datePattern: 'YYYY-MM-DD',
                  zippedArchive: true,
                  maxSize: '20m',
                  maxFiles: '14d',
                }),
              ],
            };
      },
    }),
    AccessControlModule.forRoles(roles),
    ConfigModule,
    AuthModule,
    BridgesModule,
    FinalsModule,
    ServerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
