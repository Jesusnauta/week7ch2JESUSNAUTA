import createDebug from 'debug';
import { Beer } from '../entities/beers.js';
import { HTTPError } from '../errors/errors';
import { BeerModel } from './beers.mongo.model';
import { Repo } from './repo.interface';

const debug = createDebug('W7CH3:repo');

export class BeerRepo implements Repo<Beer> {
  async query(): Promise<Beer[]> {
    debug('query');
    const data = await BeerModel.find();

    return data;
  }

  async queryId(id: string): Promise<Beer> {
    debug('queryId');
    const data = await BeerModel.findById(id);
    if (!data) throw new HTTPError(404, 'Not Found', 'Id not found');
    return data;
  }

  async create(info: Partial<Beer>): Promise<Beer> {
    debug('create');
    const data = await BeerModel.create(info);

    return data;
  }

  async update(info: Partial<Beer>): Promise<Beer> {
    debug('update');
    const data = await BeerModel.findByIdAndUpdate(info.id, info, {
      new: true,
    });
    if (!data) throw new HTTPError(404, 'Not Found', 'Id not found in update');
    return data;
  }

  async destroy(id: string): Promise<void> {
    debug('delete');
    const data = await BeerModel.findByIdAndRemove(id);
    if (!data)
      throw new HTTPError(404, 'Not found', 'Delete interrupted, id not found');
  }
}
