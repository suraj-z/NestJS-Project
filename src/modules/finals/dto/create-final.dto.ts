import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFinalDto {
        
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    order: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    alias: string;
    
    
    @ApiProperty()
    @IsOptional()
    @IsString()
    group_alias: string ;
    
    
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
    max_connections: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    max_files: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    downstream_limit: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    user_cache_reloading_interval: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    is_nat: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    proxify_ipv6: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    hidden: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    is_proxy: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    threads: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
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
    @IsNotEmpty()
    @IsNumber()
    logging: number;
    
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    server_id: number
}