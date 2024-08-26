import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { House } from './interfaces/house.interface';
import { CreateHouseDTO } from './dto/house.dto';
@Injectable()
export class HouseService {
  constructor(@InjectModel('House') private houseModel: Model<House>) {}

  async getHouseByName(houseName: string): Promise<House> {
    const user = this.houseModel.findOne({ nombre_casa: houseName });
    return user;
  }

  async getHouseById(houseId: number): Promise<House> {
    const user = this.houseModel.findOne({ id_casa: houseId });
    return user;
  }

  async createHouse(createHouseDTO: CreateHouseDTO): Promise<House> {
    const product = new this.houseModel(createHouseDTO);
    return await product.save();
  }

  async updateHouse(
    id_casa: number,
    createHouseDTO: CreateHouseDTO,
  ): Promise<House> {
    const updatedHouse = await this.houseModel.findByIdAndUpdate(
      id_casa,
      createHouseDTO,
      { new: true },
    );
    return updatedHouse;
  }
}
