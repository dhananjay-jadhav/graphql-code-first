import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export function Paginated<T>(classRef: Type<T>):any {
  @ObjectType(`${classRef.name}Edge`, { isAbstract: true })
  abstract class EdgeType {
    @Field((type) => String)
    cursor: string;

    @Field((type) => classRef)
    node: T;
  }

  @ObjectType({isAbstract: true})
  abstract class PaginatedType {

    @Field(type => [EdgeType],{nullable: true})
    edges: EdgeType[];

    @Field(type => [classRef],{ nullable: true})
    nodes: T[];

    @Field(type => Int)
    totalCount:number;

    @Field()
    hasNextPage: boolean;
  }

  return PaginatedType;
}
