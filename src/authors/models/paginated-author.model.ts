import { ObjectType } from '@nestjs/graphql';
import { Paginated } from 'src/common/pagination/paginated.type';
import { Author } from './author.model';

@ObjectType()
export class PaginatedAuthor extends Paginated(Author) {}
