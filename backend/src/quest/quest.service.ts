import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Quest } from './interfaces/quest.interface';
import { QuestSubscription } from './interfaces/questSubscription.interface';
import { CreateQuestDTO } from './dto/createQuestDTO';
import { CreateSubscriptionDTO } from './dto/createSubscriptionDTO';
@Injectable()
export class QuestService {
  constructor(
    @InjectModel('Quest') private questModel: Model<Quest>,
    @InjectModel('QuestSubscription')
    private questSubscriptionModel: Model<QuestSubscription>,
  ) {}

  async createQuest(createQuestDTO: CreateQuestDTO): Promise<Quest> {
    const quest = new this.questModel(createQuestDTO);
    return await quest.save();
  }

  async createSubscriptionQuest(
    createSubscriptionDTO: CreateSubscriptionDTO,
  ): Promise<QuestSubscription> {
    const quest = new this.questSubscriptionModel(createSubscriptionDTO);
    return await quest.save();
  }

  async getById(idQuest: string): Promise<Quest> {
    const quest = this.questModel.findById(idQuest);
    return quest;
  }

  async getQuests(): Promise<Quest[]> {
    const quests = await this.questModel.find();
    return quests;
  }

  async getSubscriptionsByIdUser(idUser: string): Promise<Quest[]> {
    const questSubscriptions = await this.questSubscriptionModel.find({
      idUsuario: idUser,
    });
    const questId = questSubscriptions.map((x) => x.idQuest);
    const questResult = await this.questModel.find({
      _id: { $in: questId },
    });

    return questResult;
  }
}
