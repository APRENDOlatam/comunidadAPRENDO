import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto';
@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getUserByName(userName: string): Promise<User> {
    const user = this.userModel.findOne({ username: userName });
    return user;
  }

  async getUserByAccountId(accountId: string): Promise<User> {
    const user = this.userModel.findOne({ accountid: accountId });
    return user;
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const product = new this.userModel(createUserDTO);
    return await product.save();
  }

  async updateUser(
    idUser: string,
    createUserDTO: CreateUserDTO,
  ): Promise<User> {
    const updatedProduct = await this.userModel.findByIdAndUpdate(
      idUser,
      createUserDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
