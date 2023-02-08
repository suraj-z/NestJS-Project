import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from 'typeorm';
import {Server} from '../../server/server.entity';
/**
 * Profile Entity Class
 */
@Entity({
    name: 'bridges',
})
export class Bridge {
    /**
     * UUID column
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * name column
     */
    @Column({ nullable: false, unique: true })
    name: string;

    /**
     * group column
     */
    @Column({nullable:true})
    group: number;

    /**
     * group_alias column
     */
    @Column({nullable:true})
    group_alias: string;

    /**
     * ip column 
     */
    @Column({nullable:true})
    ip: string;

    /**
   * ipv6 column
   */
    @Column({nullable:true})
    ipv6: string;

    /**
     * tcp_port column
     */
    @Column()
    tcp_port: number;

    /**
     * udp_port column 
     */
    @Column()
    udp_port: number;

    /**
    * wi_port column
    */
    @Column()
    wi_port: number;

    /**
     * wi_password column
     */
    @Column()
    wi_password: string;

    /**
     * max_files column 
     */
    @Column()
    max_files: number;

    /**
    * user_cache_reloading_interval column
    */
    @Column()
    user_cache_reloading_interval: number;

    /**
     * threads column
     */
    @Column()
    threads: number;

    /**
     * ddos_protection column 
     */
    @Column()
    ddos_protection: number;

    /**
    * zabbix_hostid column
    */
    @Column()
    zabbix_hostid: string;

    /**
     * datacenter_id column
     */
    @Column({nullable:true})
    datacenter_id: number;

    /**
     * logging column 
     */
    @Column()
    logging: number;

    /**
     * Column to represent a many to one relationship with the profile entity
     */
    @ManyToOne(type => Server, server => server.bridge, {nullable:false})
    @JoinColumn({name: 'server_id'})
    server: Server;

    /**
    * logging column 
    */
    @Column()
    server_id: number;

}