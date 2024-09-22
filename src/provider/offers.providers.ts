import { Connection } from "mongoose";
import { OfferSchema } from "../schema/offers.schema";

export const offersProviders = [
  {
    provide: 'OFFER_MODEL',
    useFactory: (connection: Connection) => connection.model('Offer', OfferSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];