import { ArgsType, Field, Int } from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/pagination.args';

@ArgsType()
export class GetAuthorArgs extends PaginationArgs {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true,defaultValue:'dhananjay' })
  firstName?: string;
}
