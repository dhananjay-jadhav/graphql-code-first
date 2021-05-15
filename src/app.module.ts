import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';
import { AuthorsModule } from './authors/authors.module';
import { WarriorsModule } from './warriors/warriors.module';

@Module({
  imports: [
    RecipesModule,
    AuthorsModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      debug: true,
    }),
    WarriorsModule,
  ],
})
export class AppModule {}
