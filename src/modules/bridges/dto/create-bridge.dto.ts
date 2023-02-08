import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBridgeDto {

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    group: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    group_alias: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ip: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    ipv6: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    tcp_port: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    udp_port: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    wi_port: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    wi_password: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    max_files: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    user_cache_reloading_interval: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    threads: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    ddos_protection: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    datacenter_id: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    logging: number;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    zabbix_hostid: string;


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;


    @ApiProperty()
    @IsNotEmpty()
    server_id: number;

}