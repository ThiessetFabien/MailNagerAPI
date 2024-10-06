import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IOffer } from '../../interface/offer.interface';
import { Offer } from '../../schema/offers.schema';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
@Injectable()
export class OffersService {
  constructor(@InjectModel('Offer') private offerModel: Model<IOffer>) {}

  async findAllOffers(): Promise<IOffer[]> {
    const offers = await this.offerModel.find();
    return offers;
  }

  async findOneOffer(offerId: string): Promise<IOffer> {
    const existingOffer = await this.offerModel.findById(offerId).exec();
    if (!existingOffer) {
      throw new Error('Offer not found');
    }
    return existingOffer;
  }

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
      throw new NotFoundException('Offer not found');
    }
    return existingOffer;
  }

  async deleteOffer(offerId: string): Promise<IOffer> {
    const deletedOffer = await this.offerModel.findByIdAndDelete(offerId);
    if (!deletedOffer) {
      throw new Error('Offer not found');
    }
    return deletedOffer;
  }
}
