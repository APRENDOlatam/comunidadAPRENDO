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
import { CreateDesafioDTO } from './dto/desafio.dto';
import { DesafioService } from './desafio.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('desafio')
@Controller('desafio')
export class DesafioController {
  constructor(private desafioService: DesafioService) {}
  @Post('/create')
  async createUser(@Res() res, @Body() createDesafioDTO: CreateDesafioDTO) {
    try {
      const user = await this.desafioService.createDesafio(createDesafioDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Desafio creado',
        user,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/byname/:desafioName')
  async getUserByName(@Res() res, @Param('desafioName') desafioName: string) {
    try {
      const desafio = await this.desafioService.getDesafioByName(desafioName);
      if (!desafio) throw new NotFoundException('Desafio inexistente');
      return res.status(HttpStatus.OK).json(desafio);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/byid/:desafioId')
  async getProduct(@Res() res, @Param('desafioId') desafioId: number) {
    try {
      const desafio = await this.desafioService.getDesafioById(desafioId);
      if (!desafio) throw new NotFoundException('Desafio inexistente');
      return res.status(HttpStatus.OK).json(desafio);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Put('/update')
  async updateUser(
    @Res() res,
    @Body() createDesafioDTO: CreateDesafioDTO,
    @Query('desafioId') desafioId: number,
  ) {
    const userUpdated = await this.desafioService.updateDesafio(
      desafioId,
      createDesafioDTO,
    );
    if (!userUpdated) throw new NotFoundException('Desafio inexistente');
    return res.status(HttpStatus.OK).json({
      message: 'Desafio Actualizado',
      userUpdated,
    });
  }

  @Get()
  async getDesafios(@Res() res) {
    try {
      const quests = await this.desafioService.getDesafios();
      if (!quests) throw new NotFoundException('No hay desafios');
      return res.status(HttpStatus.OK).json(quests);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
