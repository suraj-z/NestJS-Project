import { Controller, Get, Post, Body, Patch, Param, Delete,BadRequestException, Inject, UseGuards, Put } from '@nestjs/common';
import { BridgesService } from './bridges.service';
import { Bridge } from './entities/bridge.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateBridgeDto } from './dto/create-bridge.dto';
import { UpdateBridgeDto } from './dto/update-bridge.dto';

@ApiBearerAuth()
@ApiTags('bridge')
@Controller('/bridges')
export class BridgesController {

  constructor(private readonly bridgeRouteService: BridgesService,
    ) {}

  @Post('/createBridge')
  @UseGuards(AuthGuard('jwt'))
  async createBridge( @Body()input:CreateBridgeDto ):Promise<Bridge>  {
    return await this.bridgeRouteService.createNewBridgeEntry(input);   
  }

  @Get(':bridgeId')
  async getBridgeByID(@Param('bridgeId') bridgeId: number):Promise<Bridge> {
    return await this.bridgeRouteService.getBridgeById(bridgeId);
  }

  @Get()
  async getAllBridges() {
    return this.bridgeRouteService.getAllBridges();
  }

  @Patch('/update/:bridgeId')
  @UseGuards(AuthGuard('jwt'))
  async updateBridge(@Param('bridgeId') bridgeId:number , @Body()input:Partial<UpdateBridgeDto>):Promise<Bridge>
  {
    return await this.bridgeRouteService.updateBridge(bridgeId, input);
  }

  @Delete('/Delete/:bridgeId')
  @UseGuards(AuthGuard('jwt'))
  async deleteBridge(@Param('bridgeId')bridgeId:number):Promise<string>{
    return this.bridgeRouteService.removeBridge(bridgeId);
  }

}
