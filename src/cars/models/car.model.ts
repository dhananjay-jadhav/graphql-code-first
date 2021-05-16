import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Car{
    @Field(type => Int)
    id: number;

    @Field()
    company: string;

    @Field()
    modelName: string;
}