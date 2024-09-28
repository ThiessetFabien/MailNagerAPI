import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/module/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World on API of MailNager!');
  });

  it('/offers (GET)', () => {
    return request(app.getHttpServer()).get('/offers').expect(200).expect({
      message: 'All offer data found successfully',
      offers: [],
    });
  });

  it('/offers/:id (GET)', () => {
    return request(app.getHttpServer()).get('/offers/1').expect(200).expect({
      message: 'Offer data found successfully',
      existingOffer: [],
    });
  });

  it('/offers (POST)', () => {
    return request(app.getHttpServer())
      .post('/offers')
      .send({
        link: 'http://test.com',
        date: '2021-01-01',
        Contract: 'Intérim',
        HourlyRate: 'Mi-plein',
        compagny: 'Test Compagny',
        location: 'Test Location',
        title: 'Test Offer',
      })
      .expect(201)
      .expect({
        message: 'Offer created successfully',
        existingOffer: {
          link: 'http://test.com',
          date: '2021-01-01',
          Contract: 'Intérim',
          HourlyRate: 'Mi-plein',
          compagny: 'Test Compagny',
          location: 'Test Location',
          title: 'Test Offer',
        },
      });
  });

  it('/offers/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/offers/1')
      .send({
        link: 'http://test.com',
        date: '2021-01-01',
        Contract: 'Intérim',
        HourlyRate: 'Mi-plein',
        compagny: 'Test Compagny',
        location: 'Test Location',
        title: 'Test Offer',
      })
      .expect(200)
      .expect({
        message: 'Offer updated successfully',
        existingOffer: {
          link: 'http://test.com',
          date: '2021-01-01',
          Contract: 'Intérim',
          HourlyRate: 'Mi-plein',
          compagny: 'Test Compagny',
          location: 'Test Location',
          title: 'Test Offer',
        },
      });
  });

  it('/offers/:id (DELETE)', () => {
    return request(app.getHttpServer()).delete('/offers/1').expect(200).expect({
      message: 'Offer deleted successfully',
    });
  });
});
