import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description: 'Aggregations'})
export class aggegationsType{

    @Field(() => Int)
    total:number;

    @Field(() => Int)
    completed:number;

    @Field(() => Int)
    pending:number;

    @Field(() => Int)
    totalTodos:number;
}