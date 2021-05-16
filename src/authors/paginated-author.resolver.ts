import { Resolver } from '@nestjs/graphql';
import { BaseResolver } from 'src/common/base-resolver';
import { PaginatedAuthor } from './models/paginated-author.model';

@Resolver((of) => PaginatedAuthor)
export class PaginatedAuthorResolver extends BaseResolver(PaginatedAuthor) {}
