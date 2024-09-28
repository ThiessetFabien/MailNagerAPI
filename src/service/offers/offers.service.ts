import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { IOffer } from '../../interface/offer.interface';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
import { Offer } from '../../schema/offers.schema';
@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name) private offerModel: mongoose.Model<Offer>,
  ) {}

  async createOffer(createOfferDto: CreateOfferDto): Promise<IOffer> {
    return new this.offerModel(createOfferDto).save();
  }

  async updateOffer(
    offerId: string,
    updateOfferDto: UpdateOfferDto,
  ): Promise<IOffer> {
    const existingOffer = await this.offerModel.findByIdAndUpdate(
      offerId,
      updateOfferDto,
      { new: true },
    );
    if (!existingOffer) {
      throw new NotFoundException(`Offer #${offerId} not found`);
    }
    return existingOffer;
  }

  async findAllOffers(): Promise<IOffer[]> {
    const offers = await this.offerModel.find();
    return offers;
  }

  async findOneOffer(offerId: string): Promise<IOffer> {
    const existingOffer = await this.offerModel.findById(offerId).exec();
    if (!existingOffer) {
      throw new NotFoundException(`Offer #${offerId} not found`);
    }
    return existingOffer;
  }

  async deleteOffer(offerId: string): Promise<IOffer> {
    const deletedOffer = await this.offerModel.findByIdAndDelete(offerId);
    if (!deletedOffer) {
      throw new NotFoundException(`Offer #${offerId} not found`);
    }
    return deletedOffer;
  }
}
