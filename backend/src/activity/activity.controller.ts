import {
  Controller,
  Post,
  Get,
  Put,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Delete,
  Query,
} from '@nestjs/common';
import { ActivityService } from './activity.service';
import { CreateActivityDTO } from './dto/createActivityDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('activity')
@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createActivityDTO: CreateActivityDTO) {
    try {
      const quest = await this.activityService.createActivity(createActivityDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Quest created',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }


  @Get('/getById/:idActivity')
  async getById(@Res() res, @Param('idActivity') idActivity: string) {
    try {
      const quest = await this.activityService.getById(idActivity);
      if (!quest) throw new NotFoundException('Activity Does not exists');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get()
  async getActivitys(@Res() res) {
    try {
      const quests = await this.activityService.getQuests();
      if (!quests) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quests);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

}
