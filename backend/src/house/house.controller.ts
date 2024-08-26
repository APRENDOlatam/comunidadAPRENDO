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
import { CreateHouseDTO } from './dto/house.dto';
import { HouseService } from './house.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('house')
@Controller('house')
export class HouseController {
  constructor(private houseService: HouseService) {}
  @Post('/create')
  async createUser(@Res() res, @Body() createHouseDTO: CreateHouseDTO) {
    try {
      const user = await this.houseService.createHouse(createHouseDTO);
      return res.status(HttpStatus.OK).json({
        message: 'Casa creada',
        user,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/byname/:houseName')
  async getUserByName(@Res() res, @Param('houseName') houseName: string) {
    try {
      const house = await this.houseService.getHouseByName(houseName);
      if (!house) throw new NotFoundException('Casa inexistente');
      return res.status(HttpStatus.OK).json(house);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Get('/byid/:houseId')
  async getProduct(@Res() res, @Param('houseId') houseId: number) {
    try {
      const house = await this.houseService.getHouseById(houseId);
      if (!house) throw new NotFoundException('Casa inexistente');
      return res.status(HttpStatus.OK).json(house);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(error);
    }
  }

  @Put('/update')
  async updateUser(
    @Res() res,
    @Body() createHouseDTO: CreateHouseDTO,
    @Query('houseId') houseId: number,
  ) {
    const userUpdated = await this.houseService.updateHouse(
      houseId,
      createHouseDTO,
    );
    if (!userUpdated) throw new NotFoundException('User Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Updated Succesfully',
      userUpdated,
    });
  }
}
