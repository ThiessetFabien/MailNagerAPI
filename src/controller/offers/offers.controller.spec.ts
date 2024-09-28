import { Test, TestingModule } from '@nestjs/testing';
import { OffersController } from './offers.controller';
import { OffersService } from '../../service/offers/offers.service';
import { CreateOfferDto } from '../../dto/create-offer.dto';
import { UpdateOfferDto } from '../../dto/update-offer.dto';
import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

describe('OffersController', () => {
  let controller: OffersController;
  let service: OffersService;

  const mockOffer = {
    id: '1',
    link: 'http://test.com',
    date: '2021-01-01',
    Contract: 'Intérim',
    HourlyRate: 'Mi-plein',
    compagny: 'Test Compagny',
    location: 'Test Location',
    title: 'Test Offer',
  };

  const mockOffersService = {
    createOffer: jest.fn().mockResolvedValue(mockOffer),
    updateOffer: jest.fn().mockResolvedValue(mockOffer),
    findAllOffers: jest.fn().mockResolvedValue([mockOffer]),
    findOneOffer: jest.fn().mockResolvedValue(mockOffer),
    deleteOffer: jest.fn().mockResolvedValue(mockOffer),
  };

  const mockResponse = () => {
    const res: Partial<Response> = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res as Response;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OffersController],
      providers: [
        {
          provide: OffersService,
          useValue: mockOffersService,
        },
      ],
    }).compile();

    controller = module.get<OffersController>(OffersController);
    service = module.get<OffersService>(OffersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an offer', async () => {
    const createOfferDto: CreateOfferDto = {
      link: 'http://test.com',
      date: '2021-01-01',
      contract: 'Intérim',
      hourlyRate: 'Mi-plein',
      company: 'Test Compagny',
      location: 'Test Location',
      title: 'Test Offer',
    };
    const res = mockResponse();

    await controller.createOffer(res, createOfferDto);

    expect(service.createOffer).toHaveBeenCalledWith(createOfferDto);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.CREATED);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Offer has been successfully created',
      newOffer: mockOffer,
    });
  });

  it('should update an offer', async () => {
    const updateOfferDto: UpdateOfferDto = {
      link: 'http://test.com',
      date: '2021-01-01',
      contract: 'Intérim',
      hourlyRate: 'Mi-plein',
      company: 'Test Compagny',
      location: 'Test Location',
      title: 'Test Offer',
    };
    const res = mockResponse();

    await controller.updateOffer(res, '1', updateOfferDto);

    expect(service.updateOffer).toHaveBeenCalledWith('1', updateOfferDto);
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Offer has been successfully updated',
      existingOffer: mockOffer,
    });
  });

  it('should get all offers', async () => {
    const res = mockResponse();

    await controller.getAllOffers(res);

    expect(service.findAllOffers).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      message: 'All offer data found successfully',
      offers: [mockOffer],
    });
  });

  it('should get an offer by id', async () => {
    const res = mockResponse();

    await controller.getOffer(res, '1');

    expect(service.findOneOffer).toHaveBeenCalledWith('1');
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Offer data found successfully',
      existingOffer: mockOffer,
    });
  });

  it('should delete an offer', async () => {
    const res = mockResponse();

    await controller.deleteOffer(res, '1');

    expect(service.deleteOffer).toHaveBeenCalledWith('1');
    expect(res.status).toHaveBeenCalledWith(HttpStatus.OK);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Offer has been deleted',
      deletedOffer: mockOffer,
    });
  });
});
