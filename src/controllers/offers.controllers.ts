import { Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { OffersService } from '../services/offers.service';
import { CreateOfferDto } from '../dto/create-offer.dto';
import { Offer } from '../schemas/offers.schema';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  async create(@Body() createOfferDto: CreateOfferDto) {
    return this.offersService.create(createOfferDto);
  }

  @Get()
  async findAll(): Promise<Offer[]> {
    return this.offersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Offer> {
    const offer = await this.offersService.findOne(id);
    if (!offer) {
      throw new NotFoundException(`Offer isn't found`);
    }
    return offer;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.offersService.delete(id);
  }
}
