import { Post } from './models/post.model';
import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { PaginationArgs } from 'src/common/pagination.args';
import { GetAuthorArgs } from './dto/get-author.args';
import { authors, posts } from '../mockData/mock';
import { Author } from './models/author.model';
import { UpdatePostVotesInputType } from './dto/updatePostVotes.inputType';

@Resolver((of) => Author)
export class AuthorsResolver {
  @Query((returns) => [Author], { name: 'authors' })
  getAuthors(@Args() paginationArgs: PaginationArgs): Author[] {
    return authors;
  }

  // @Query((retuns) => Author, { name: 'author', nullable: true})
  // getAuthor(
  //   @Args('id', { name: 'author Id', type: () => Int }) id: number,
  //   @Args('firstName',{nullable: true, defaultValue: 'Dhananjay'}) firstName: string
  // ): Author {
  //   console.log(firstName);
  //   return authors.find((author) => author.id === id);
  // }

  @Query((retuns) => Author, { name: 'author', nullable: true })
  getAuthor(@Args() authorArgs: GetAuthorArgs): Author {
    const { id, firstName } = authorArgs;
    console.log(firstName);
    return authors.find((author) => author.id === id);
  }

  // @ResolveField('posts', returns => [Post])
  // posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return posts.find((post) => post.authorId === id);
  // }

  @Mutation((returns) => Post, { nullable: true })
  upVotepost(@Args({ name: 'postId', type: () => Int }) postId: number) {
    const post = posts.find((post) => post.id == postId);
    ++post.votes;
    return post;
  }

  @Mutation((returns) => Post)
  updatePostVotes(
    @Args('updatePostVotesInputType')
    updatePostVotesInputType: UpdatePostVotesInputType
  ) {
    const { postId, votes } = updatePostVotesInputType;
    const post = posts.find((post) => post.id === postId);
    post.votes = votes;
    return post;
  }
}
