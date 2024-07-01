import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from './interfaces/activity.interface';
import { CreateActivityDTO } from './dto/createActivityDTO';

@Injectable()
export class ActivityService {
  constructor(
    @InjectModel('Activity') private activityModel: Model<Activity>,
  ) {}

  async createActivity(createQuestDTO: CreateActivityDTO): Promise<Activity> {
    const quest = new this.activityModel(createQuestDTO);
    return await quest.save();
  }


  async getById(idActivity: string): Promise<Activity> {
    const quest = this.activityModel.findById(idActivity);
    return quest;
  }

  async getQuests(): Promise<Activity[]> {
    const quests = await this.activityModel.find();
    return quests;
  }

}
