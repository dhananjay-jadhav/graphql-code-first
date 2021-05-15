import { Resolver, Query } from '@nestjs/graphql';
import { warrios } from 'src/mockData/mock';
import { Warrior } from './models/warrior.model';

@Resolver((of) => Warrior)
export class WarriorResolver {
  @Query((returns) => [Warrior], { name: 'warriors', nullable: true })
  getWarrios(): Warrior[] {
    return warrios;
  }
}
