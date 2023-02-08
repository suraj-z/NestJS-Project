import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne } from 'typeorm';
import { Bridge } from '../bridges/entities/bridge.entity';
import { typeEnum, billingTypeEnum } from './server.utils';
import { Finals } from '../finals/entities/final.entity';


/**
 * Profile Entity Class
 */
@Entity({
    name: 'servers',
})
export class Server {
    /**
    * UUID column
    */
    @PrimaryGeneratedColumn()
    id: number;

    /**
    * hostname column
    */
    @Column({ nullable: false, unique: true })
    hostname: string;

    /**
    * is_nat column
    */
    @Column({ nullable: false, unique: true })
    is_nat: number;

    /**
    * datacenter_id column
    */
    @Column()
    datacenter_id: number;

    /**
    * zabbix_hostid column 
    */
    @Column()
    zabbix_hostid: string;

    /**
    * hosting_company_id column
    */
    @Column()
    hosting_company_id: number;

    /**
    * type column
    */
    @Column()
    type: typeEnum;

    /**
    * billing_type column 
    */
    @Column()
    billing_type: billingTypeEnum;

    /**
    * price column
    */
    @Column()
    price: number;

    /**
    * bandwidth_limit column
    */
    @Column()
    bandwidth_limit: string;

    /**
    * Column to represent a one to many relationship with the roles entity
    */
    @OneToMany(type => Bridge, bridge => bridge.server)
    bridge: Bridge[];

    /**
    * Column to represent a one to many relationship with the roles entity
    */
    @OneToMany(type => Finals, final => final.server)
    final: Finals[];

}
