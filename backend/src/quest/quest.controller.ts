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
import { QuestService } from './quest.service';
import { CreateQuestDTO } from './dto/createQuestDTO';
import { CreateSubscriptionDTO } from './dto/createSubscriptionDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quest')
@Controller('quest')
export class QuestController {
  constructor(private questService: QuestService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createQuestDTO: CreateQuestDTO) {
    try {
      const quest = await this.questService.createQuest(createQuestDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Quest created',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Post('/create/subscription')
  async createSubscription(
    @Res() res,
    @Body() createSubscriptionDTO: CreateSubscriptionDTO,
  ) {
    try {
      const quest = await this.questService.createSubscriptionQuest(
        createSubscriptionDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Quest subscription created',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/getById/:idQuest')
  async getById(@Res() res, @Param('idQuest') idQuest: string) {
    try {
      const quest = await this.questService.getById(idQuest);
      if (!quest) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get()
  async getQuests(@Res() res) {
    try {
      const quests = await this.questService.getQuests();
      if (!quests) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quests);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/getSubscriptionsByIdUser/:idUser')
  async getSubscriptionsByIdUser(@Res() res, @Param('idUser') idUser: string) {
    try {
      const quest = await this.questService.getSubscriptionsByIdUser(idUser);
      if (!quest) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
