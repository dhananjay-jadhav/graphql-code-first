import { Module } from '@nestjs/common';
import { WarriorResolver } from './warriors.resolver';

@Module({
  providers: [WarriorResolver],
})
export class WarriorsModule {}
