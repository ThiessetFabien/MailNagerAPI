import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateOfferDto } from '../dto/create-offer.dto';
import { Offer } from '../schemas/offers.schema';

@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name) private readonly offerModel: Model<Offer>,
  ) {}

  async create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const createdOffer = new this.offerModel(createOfferDto);
    return createdOffer;
  }

  async findAll(): Promise<Offer[]> {
    return this.offerModel.find().exec();
  }

  async findOne(id: string): Promise<Offer | null> {
    return this.offerModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise<Offer | null> {
    const deleteOffer = await this.offerModel
      .findByIdAndDelete({ _id: id })
      .exec();
    return deleteOffer;
  }
}
