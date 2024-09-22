import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
import { OffersService } from '../../service/offers/offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Post()
  async createOffer(
    @Res() response: Response,
    @Body() createOfferDto: CreateOfferDto,
  ) {
    try {
      const newOffer = await this.offersService.createOffer(createOfferDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Offer has been successfully created',
        newOffer,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Offer not created!',
        error: 'Bad Request',
      });
    }
  }

  @Put('/:id')
  async updateOffer(
    @Res() response: Response,
    @Param('id') offerId: string,
    @Body() updateOfferDto: UpdateOfferDto,
  ) {
    try {
      const existingOffer = await this.offersService.updateOffer(
        offerId,
        updateOfferDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Offer has been successfully updated',
        existingOffer,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: 'Error: Offer not found',
        error: 'Not Found',
      });
    }
  }

  @Get()
  async getAllOffers(@Res() response: Response) {
    try {
      const offerData = await this.offersService.getAllOffers();
      return response.status(HttpStatus.OK).json({
        message: 'All offer data found successfully',
        offerData,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: 'Error: Offers not found',
        error: 'Not Found',
      });
    }
  }

  @Get('/:id')
  async getOffer(@Res() response: Response, @Param('id') offerId: string) {
    try {
      const existingOffer = await this.offersService.getOffer(offerId);
      return response.status(HttpStatus.OK).json({
        message: 'Offer data found successfully',
        existingOffer,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: 'Error: Offer not found',
        error: 'Not Found',
      });
    }
  }

  @Delete('/:id')
  async deleteOffer(@Res() response: Response, @Param('id') offerId: string) {
    try {
      const deletedOffer = await this.offersService.deleteOffer(offerId);
      return response.status(HttpStatus.OK).json({
        message: 'Offer has been deleted',
        deletedOffer,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: 404,
        message: 'Error: Offer not found',
        error: 'Not Found',
      });
    }
  }
}
