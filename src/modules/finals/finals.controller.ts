import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards } from '@nestjs/common';
import { FinalsService } from './finals.service';
import { Finals } from '../finals/entities/final.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CreateFinalDto } from './dto/create-final.dto';
import { UpdateFinalDto } from './dto/update-final.dto';

@ApiBearerAuth()
@ApiTags('final')
@Controller('/finals')
export class FinalsController {

  constructor(private readonly finalsService: FinalsService,
  ) { }

  @Post('/createFinal')
  @UseGuards(AuthGuard('jwt'))
  async createFinal(@Body() input: CreateFinalDto): Promise<Finals> {
    return await this.finalsService.createFinal(input);
  }

  @Get(':finalId')
  async getFinalByID(@Param('finalId') finalId: number): Promise<Finals> {
    return await this.finalsService.getFinalById(finalId);
  }

  @Get()
  async getAllFinals(): Promise<Finals[]> {
    return await this.finalsService.getAllFinals();
  }

  @Patch('/update/:finalId')
  @UseGuards(AuthGuard('jwt'))
  async updateFinal( @Param('finalId') finalId: number, @Body() input: Partial<UpdateFinalDto> ): Promise<Finals> {
    return await this.finalsService.updateFinal(finalId, input);
  }

  @Delete('/delete/:finalId')
  @UseGuards(AuthGuard('jwt'))
  async deleteFinal(@Param('finalId') finalId: number): Promise<string> {
    return this.finalsService.deleteFinal(finalId);
  }

}
