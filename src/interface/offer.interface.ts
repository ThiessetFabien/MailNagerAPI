import { Document } from 'mongoose';
import { Contract, HourlyRate } from '../schema/offers.schema';

export interface IOffer extends Document {
  readonly link: string;
  readonly contract: Contract;
  readonly hourlyRate: HourlyRate;
  readonly company: string;
  readonly location: string;
  readonly name: string;
}
