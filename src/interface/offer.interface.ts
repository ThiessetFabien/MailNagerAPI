import { Document } from 'mongoose';

export interface IOffer extends Document {
  readonly link: string;
  readonly date: string;
  readonly contract: string;
  readonly hourlyRate: string;
  readonly company: string;
  readonly location: string;
  readonly name: string;
}
