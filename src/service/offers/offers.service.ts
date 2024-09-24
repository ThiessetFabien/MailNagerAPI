import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { IOffer } from '../../interface/offer.interface';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
import { Offer } from '../../schema/offers.schema';
@Injectable()
export class OffersService {
  constructor(
    @InjectModel(Offer.name) private offerModel: mongoose.Model<Offer>,
    // @InjectConnection() private connection: Connection,
  ) {}

  async createOffer(createOfferDto: CreateOfferDto): Promise<IOffer> {
    const newOffer = new this.offerModel(createOfferDto);
    return newOffer.save();
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

  async findAllOffers(): Promise<Offer[]> {
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
