import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logger } from 'winston';
import { Finals } from '../finals/entities/final.entity';
import { FinalType } from './finals.utils';
import { ServerService } from '../server/server.service';

@Injectable()
export class FinalsService {

  /**
  * Constructor
  * @param {Repository<Finals>} finalsRepository
  */

  constructor(
    @InjectRepository(Finals)
    private readonly finalsRepository: Repository<Finals>,
    private readonly serverService: ServerService,
    @Inject('winston') private readonly logger: Logger,
  ) { }


  async createFinal(input: FinalType) {
    try {
      const serverData = await this.serverService.getServerById(input?.server_id);
      this.logger.info(`createBridge | serverData ${JSON.stringify(serverData)} `);
      if (!serverData) {
        throw new BadRequestException(
          `The Server For Given ID Not Found`
        );
      }
      let finals = new Finals();
      finals = Object.assign(finals, { ...input });
      this.logger.info(`finals ${JSON.stringify(finals)}`);

      return this.finalsRepository.save(finals)
    }
    catch (e) {
      this.logger.error(`Error in createFinal ${e.message}`);
      throw new BadRequestException(e.message);
    }
  }

  async getFinalById(id: number): Promise<Finals> {
    try {
      const finalData = await this.finalsRepository.findOne({ where: { id } });
      this.logger.info(`getFinalById | finalData ${JSON.stringify(finalData)}`);
      if (!finalData) {
        throw new BadRequestException(
          'The Final with given id found.',
        );
      }
      return finalData;
    }
    catch (e) {
      this.logger.error(`Error in getFinalById ${e.message}`);
      throw new BadRequestException(e.message);
    }
  }

  async getAllFinals(): Promise<Finals[]> {
    try {
      const finalsDataArray = await this.finalsRepository.find();
      this.logger.info(`getAllBridgeBy | finalsDataArray ${JSON.stringify(finalsDataArray)}`)
      if (!finalsDataArray) {
        throw new BadRequestException(
          'No bridges found',
        );
      }
      return finalsDataArray;
    }
    catch (e) {
      this.logger.error(`Error in getAllFinals ${e.message}`);
      throw new BadRequestException(e.message);
    }
  }

  async updateFinal(id: number, input: FinalType): Promise<Finals> {
    try {
      const finalData = await this.getFinalById(id);
      if (!finalData) {
        throw new BadRequestException(
          `No Final For Given Id Found`
        )
      }
      await this.finalsRepository.update(
        { id: Number(id) },
        input,

      )
      return this.finalsRepository.findOne({ where: { id } });
    }
    catch (e) {
      this.logger.error(`Error in updatefinal ${e.message}`);
      throw new BadRequestException(e.message);
    }
  }

  async deleteFinal(id: number): Promise<string> {
    try {
      const finalData = await this.getFinalById(id);
      if (!finalData) {
        throw new BadRequestException(`Final for given id not found!`)
      }
      this.finalsRepository.delete({ id });
      return `Message : Final For Given ID Deleted`
    }
    catch (e) {
      this.logger.error(`Error while deleting ${e.message}`);
      throw new BadRequestException(`Final for given id not found!`)
    }
  }
}
