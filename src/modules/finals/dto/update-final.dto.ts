import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateFinalDto } from './create-final.dto';

export class UpdateFinalDto extends PartialType(CreateFinalDto) {

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    order: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    alias: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    group_alias: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    tcp_port: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    udp_port: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    wi_port: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    wi_password: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    max_connections: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    max_files: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    downstream_limit: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    user_cache_reloading_interval: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    is_nat: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    proxify_ipv6: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    hidden: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    is_proxy: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    threads: number;

    @ApiProperty()
    @IsOptional()
    @IsString()
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    zabbix_hostid: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    datacenter_id: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    logging: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    server_id: number
}