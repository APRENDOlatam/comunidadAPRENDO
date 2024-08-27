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
import { CertificacionService } from './certificacion.service';
import { CreateCertificacionDTO } from './dto/certificacion.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('certificacion')
@Controller('certificacion')
export class CertificacionController {
  constructor(private certificacionService: CertificacionService) {}

  @Post('/create')
  async createUser(
    @Res() res,
    @Body() createCertificacionDTO: CreateCertificacionDTO,
  ) {
    try {
      const quest = await this.certificacionService.createCertificacion(
        createCertificacionDTO,
      );
      return res.status(HttpStatus.OK).json({
        message: 'Certificacion creada',
        quest,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/getById/:idCertificacion')
  async getById(@Res() res, @Param('idCertificacion') idCertificacion: string) {
    try {
      const quest =
        await this.certificacionService.getCertificacionById(idCertificacion);
      if (!quest) throw new NotFoundException('Certificacion inexistente');
      return res.status(HttpStatus.OK).json(quest);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get()
  async getCertificaciones(@Res() res) {
    try {
      const quests = await this.certificacionService.getCertificaciones();
      if (!quests) throw new NotFoundException('No hay certificaciones');
      return res.status(HttpStatus.OK).json(quests);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }
}
