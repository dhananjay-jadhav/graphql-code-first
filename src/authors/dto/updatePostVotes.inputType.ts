import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class UpdatePostVotesInputType{
    @Field(type => Int)
    postId: number;

    @Field(type => Int)
    votes: number;
}