import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field((type) => Int, { defaultValue: 0 })
  offset: number;

  @Field((type) => Int, { defaultValue: 10 })
  limit: number;
}
