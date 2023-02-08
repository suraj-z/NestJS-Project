export interface BridgeType {
    group? : number, 
    group_alias? : string , 
    ip? : string, 
    ipv6? : string, 
    tcp_port? : number, 
    udp_port? : number, 
    wi_port? : number, 
    wi_password? : string, 
    max_files? : number, 
    user_cache_reloading_interval? : number, 
    threads? : number, 
    ddos_protection? : number, 
    datacenter_id? : number, 
    logging? : number, 
    zabbix_hostid? : string, 
    name? : string, 
    server_id? : number 
}