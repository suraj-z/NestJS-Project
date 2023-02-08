import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Server } from '../../server/server.entity';
/**
 * Profile Entity Class
 */
@Entity({
    name: 'finals',
})
export class Finals {
    /**
     * UUID column
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * order column
     */
    @Column({ nullable: false })
    order: number;

    /**
     * name column
     */
    @Column({ nullable: false })
    name: string;

    /**
     * alias column
     */
    @Column({ nullable: false, unique: true })
    alias: string;

    /**
     * group_alias column 
     */
    @Column()
    group_alias: string;

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
     * max_connections column 
     */
    @Column()
    max_connections: number;

    /**
    * max_files column 
    */
    @Column()
    max_files: number;

    /**
    * downstream_limit column
    */
    @Column()
    downstream_limit: number;

    /**
    * user_cache_reloading_interval column
    */
    @Column()
    user_cache_reloading_interval: number;

    /**
    * is_nat column
    */
    @Column()
    is_nat: number;

    /**
    * proxify_ipv6 column
    */
    @Column()
    proxify_ipv6: number;

    /**
    * hidden column
    */
    @Column()
    hidden: number;

    /**
    * is_proxy column
    */
    @Column()
    is_proxy: number;

    /**
     * threads column
     */
    @Column()
    threads: number;

    /**
    * password column
    */
    @Column()
    password: string;

    /**
    * zabbix_hostid column
    */
    @Column()
    zabbix_hostid: string;

    /**
     * datacenter_id column
     */
    @Column()
    datacenter_id: number;

    /**
     * logging column 
     */
    @Column()
    logging: number;

    /**
     * Column to represent a many to one relationship with the profile entity
     */
    @ManyToOne(type => Server, server => server.final, { nullable: false })
    @JoinColumn({ name: 'server_id' })
    server: Server;

    /**
    * server_id column 
    */
    @Column()
    server_id: number;
}