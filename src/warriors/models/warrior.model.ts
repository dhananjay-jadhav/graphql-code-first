import { ObjectType,Field } from "@nestjs/graphql";
import { Character } from "./charachter.model";

@ObjectType()
export class Warrior extends Character{
    @Field()
    level:number;
}