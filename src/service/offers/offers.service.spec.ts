import { Test, TestingModule } from '@nestjs/testing';
import { OffersService } from './offers.service';
import { getModelToken } from '@nestjs/mongoose';
import { Offer } from '../../schema/offers.schema';
import { NotFoundException } from '@nestjs/common';

const mockOfferModel = {
  new: jest.fn().mockResolvedValue({ save: jest.fn() }),
  constructor: jest.fn().mockResolvedValue({}),
  find: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
  findByIdAndDelete: jest.fn(),
};

describe('OffersService', () => {
  let service: OffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OffersService,
        {
          provide: getModelToken(Offer.name),
          useValue: mockOfferModel,
        },
      ],
    }).compile();

    service = module.get<OffersService>(OffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an offer', async () => {
    const createOfferDto = { name: 'Test Offer' };
    mockOfferModel.new.mockReturnValue({
      save: jest.fn().mockResolvedValue(createOfferDto),
    });

    const result = await service.createOffer(createOfferDto as any);
    expect(result).toEqual(createOfferDto);
  });

  it('should update an offer', async () => {
    const updateOfferDto = { name: 'Updated Offer' };
    const offerId = 'someId';
    mockOfferModel.findByIdAndUpdate.mockResolvedValue(updateOfferDto);

    const result = await service.updateOffer(offerId, updateOfferDto as any);
    expect(result).toEqual(updateOfferDto);
  });

  it('should throw NotFoundException when updating non-existing offer', async () => {
    const updateOfferDto = { name: 'Updated Offer' };
    const offerId = 'nonExistingId';
    mockOfferModel.findByIdAndUpdate.mockResolvedValue(null);

    await expect(
      service.updateOffer(offerId, updateOfferDto as any),
    ).rejects.toThrow(NotFoundException);
  });

  it('should find all offers', async () => {
    const offers = [{ name: 'Offer1' }, { name: 'Offer2' }];
    mockOfferModel.find.mockResolvedValue(offers);

    const result = await service.findAllOffers();
    expect(result).toEqual(offers);
  });

  it('should find one offer', async () => {
    const offer = { name: 'Offer1' };
    const offerId = 'someId';
    mockOfferModel.findById.mockResolvedValue({
      exec: jest.fn().mockResolvedValue(offer),
    });

    const result = await service.findOneOffer(offerId);
    expect(result).toEqual(offer);
  });

  it('should throw NotFoundException when finding non-existing offer', async () => {
    const offerId = 'nonExistingId';
    mockOfferModel.findById.mockResolvedValue({
      exec: jest.fn().mockResolvedValue(null),
    });

    await expect(service.findOneOffer(offerId)).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should delete an offer', async () => {
    const offer = { name: 'Offer1' };
    const offerId = 'someId';
    mockOfferModel.findByIdAndDelete.mockResolvedValue(offer);

    const result = await service.deleteOffer(offerId);
    expect(result).toEqual(offer);
  });

  it('should throw NotFoundException when deleting non-existing offer', async () => {
    const offerId = 'nonExistingId';
    mockOfferModel.findByIdAndDelete.mockResolvedValue(null);

    await expect(service.deleteOffer(offerId)).rejects.toThrow(
      NotFoundException,
    );
  });
});
