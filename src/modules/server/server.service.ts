import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Server } from './server.entity';

@Injectable()
export class ServerService {
  
   /**
   * Constructor
   * @param {Repository<Server>} serverRepository
   */

  constructor(
    @InjectRepository(Server)
    private readonly serverRepository: Repository<Server>,
    ){}

  getServerById(id:number):Promise<Server>{
    return this.serverRepository.findOne({ where: { id} });
  }

}