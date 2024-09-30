import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { IOffer } from 'src/interface/offer.interface';
import { Offer } from 'src/schema/offers.schema';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name) private offerModel: mongoose.Model<Offer>
  ) {}

  async createOffer(createOfferDto: CreateOfferDto): Promise<Offer> {
      const createdOffer = new this.offerModel(createOfferDto);
      return createdOffer;
  }

  async updateOffer(
    offerId: string,
    updateOfferDto: UpdateOfferDto,
  ): Promise<Offer> {
    const existingOffer = await this.offerModel.findByIdAndUpdate(
      offerId,
      updateOfferDto,
      { new: true },
    );
    return existingOffer;
  }

  async findAllOffers(): Promise<Offer[]> {
    const offers = await this.offerModel.find();
    return offers;
  }

  async findOneOffer(offerId: string): Promise<Offer> {
    const existingOffer = await this.offerModel.findById(offerId).exec();
    return existingOffer;
  }

  async deleteOffer(offerId: string): Promise<Offer> {
    const deletedOffer = await this.offerModel.findByIdAndDelete(offerId);
    return deletedOffer;
  }
}
