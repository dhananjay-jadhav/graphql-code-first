import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/common/base-resolver';
import { Car } from './models/car.model';

@Resolver((of) => Car)
export class CarsResolver extends BaseResolver(Car) {
  constructor() {
    super();
  }
}
