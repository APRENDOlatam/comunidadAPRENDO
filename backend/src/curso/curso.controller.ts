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
import { CursoService } from './curso.service';
import { CreateCursoDTO } from './dto/createCursoDTO';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('curso')
@Controller('curso')
export class CursoController {
  constructor(private cursoService: CursoService) {}

  @Post('/create')
  async createUser(@Res() res, @Body() createCursoDTO: CreateCursoDTO) {
    try {
      const quest = await this.cursoService.createCurso(createCursoDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Curso creado',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/getById/:idActivity')
  async getById(@Res() res, @Param('idActivity') idActivity: string) {
    try {
      const quest = await this.cursoService.getById(idActivity);
      if (!quest) throw new NotFoundException('Activity Does not exists');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get()
  async getActivitys(@Res() res) {
    try {
      const quests = await this.cursoService.getCursos();
      if (!quests) throw new NotFoundException('Quest Does not exists');
      return res.status(HttpStatus.OK).json(quests);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
