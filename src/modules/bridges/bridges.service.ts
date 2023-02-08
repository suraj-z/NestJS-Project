import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from 'winston';
import { Bridge } from './entities/bridge.entity';
import { ServerService } from '../server/server.service';
import { CreateBridgeDto } from './dto/create-bridge.dto';
import { UpdateBridgeDto } from './dto/update-bridge.dto';

/**
 * Bridge Service
 */
@Injectable()
export class BridgesService {

  /**
  * Constructor
  * @param {Repository<Bridges>} bridgeRepository
  * @param {Service<Server>} serverService
  * @param {Logger} logger
  */
  constructor(
    @InjectRepository(Bridge)
    private readonly bridgeRepository: Repository<Bridge>,
    private readonly serverService: ServerService,
    @Inject('winston') private readonly logger: Logger,
  ) { }


  /**
  * Create a bridge with Register input fields
  * @param {CreateBridgeDto} input bridge payload
  * @returns {Promise<Bridge>} Data From The Created Bridge
  */
  async createNewBridgeEntry(input: CreateBridgeDto): Promise<Bridge> {
    try {
      this.logger.info(`createNewBridgeEntry |services | input ${JSON.stringify(input)}`)
      const serverData = await this.serverService.getServerById(input?.server_id);
      if (!serverData) {
        throw new BadRequestException(`The Server For Given ID Not Found`);
      }
      console.log(serverData);

      let bridge = this.bridgeRepository.create(input);
      console.log(bridge);
      await this.bridgeRepository.save(input);
      return bridge;
    }
    catch (e) {
      this.logger.error(`Error in createNewBridgeEntry ${e.message}`)
      throw new BadRequestException(e.message)
    }
  }


  /**
  * Fetches bridge from database by id
  * @param {number} id
  * @returns {Promise<Bridge>} data from queried Bridge
  */
  async getBridgeById(id: number): Promise<Bridge> {
    try {
      const bridgeData = await this.bridgeRepository.findOne({ where: { id } });
      if (!bridgeData) {
        throw new BadRequestException('The bridges with given id found');
      }
      return bridgeData;
    }
    catch (e) {
      this.logger.error(`Error in getBridgeById ${e.message}`)
      throw new BadRequestException(e.message)
    }
  }


  /**
  * Fetches bridges array
  * @returns {Promise<Bridge>} data from queried Bridges
  */
  async getAllBridges(): Promise<Bridge[]> {
    try {
      const bridgeDataArray = await this.bridgeRepository.find();
      if (!bridgeDataArray) {
        throw new BadRequestException('No bridges found');
      }
      return bridgeDataArray;
    }
    catch (e) {
      this.logger.error(`Error in getAllBridges ${e.message}`)
      throw new BadRequestException(e.message)
    }
  }


  /**
  * Update bridge data
  * @param {UpdateBridgeDto} input
  * @returns {Promise<Bridge>} Updated Bridge Data
  */
  async updateBridge(id: number, input: Partial<UpdateBridgeDto>): Promise<Bridge> {
    try {
      const bridgeData = await this.getBridgeById(id);
      if (!bridgeData) {
        throw new BadRequestException(`No Bridge For Given Id Found`)
      }
      await this.bridgeRepository.update({ id: Number(id) }, input)
      return this.bridgeRepository.findOne({ where: { id } });
    }
    catch (e) {
      this.logger.error(`Error in updateBridge ${e.message}`)
      throw new BadRequestException(e.message)
    }
  }


  /**
  * Delete bridge for given id
  * @param {number} id
  * @returns {Promise<String>} whether or not the delete operation was completed
  */
  async removeBridge(id: number): Promise<string> {
    try {
      const bridgeData = await this.getBridgeById(id);
      if (!bridgeData) {
        throw new BadRequestException(`Bridge for given id not found!`);
      }
      this.bridgeRepository.delete({ id });
      return `Bridge For Given ID Deleted`
    }
    catch (e) {
      this.logger.error(`Error while deleting ${e.message}`);
      throw new BadRequestException(e.message)
    }
  }

}