import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateBridgeDto } from './create-bridge.dto';

export class UpdateBridgeDto extends PartialType(CreateBridgeDto) {

    @IsOptional()
    @IsNumber()
    group: number;

    @IsOptional()
    @IsString()
    group_alias: string;

    @IsOptional()
    @IsString()
    ip: string;

    @IsOptional()
    @IsString()
    ipv6: string;

    @IsOptional()
    @IsNumber()
    tcp_port: number;

    @IsOptional()
    @IsNumber()
    udp_port: number;

    @IsOptional()
    @IsNumber()
    wi_port: number;

    @IsOptional()
    @IsString()
    wi_password: string;

    @IsOptional()
    @IsNumber()
    max_files: number;

    @IsOptional()
    @IsNumber()
    user_cache_reloading_interval: number;

    @IsOptional()
    @IsNumber()
    threads: number;

    @IsOptional()
    @IsNumber()
    ddos_protection: number;

    @IsOptional()
    @IsNumber()
    datacenter_id: number;

    @IsOptional()
    @IsNumber()
    logging: number;

    @IsOptional()
    @IsString()
    zabbix_hostid: string;

    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    server_id: number;
}