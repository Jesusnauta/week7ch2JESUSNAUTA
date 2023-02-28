import { Router } from 'express';
import { BeerController } from '../controllers/beers.controller.js';
import { BeerMongoRepo } from '../repository/beers.mongo.repo.js';

// eslint-disable-next-line new-cap
export const beersRouter = Router();
//  A const repo = new BearsFileRepo();
const repo = new BeerMongoRepo();
const controller = new BeerController(repo);

beersRouter.get('/', controller.readAll.bind(controller));
beersRouter.get('/:id', controller.readID.bind(controller));
beersRouter.post('/', controller.write.bind(controller));
beersRouter.patch('/:id', controller.update.bind(controller));
beersRouter.delete('/:id', controller.delete.bind(controller));
