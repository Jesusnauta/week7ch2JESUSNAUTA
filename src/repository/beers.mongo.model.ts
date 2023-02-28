import { model, Schema, SchemaTypes } from 'mongoose';
import { Beer } from '../entities/beers';

const beerSchema = new Schema<Beer>({
  id: {
    type: SchemaTypes.String,
    require: true,
    unique: true,
  },
  name: {
    type: SchemaTypes.String,
    require: true,
    unique: true,
  },
  price: {
    type: SchemaTypes.Number,
    require: true,
    unique: true,
  },
});

export const BeerModel = model('Beer', beerSchema, 'beers');
