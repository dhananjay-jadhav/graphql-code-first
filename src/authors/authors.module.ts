import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';
import { PaginatedAuthorResolver } from './paginated-author.resolver';

@Module({
  providers: [AuthorsService,AuthorsResolver,PaginatedAuthorResolver]
})
export class AuthorsModule {}
