import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType({description: 'Aggregations'})
export class aggegationsType{

    @Field(() => Int)
    total:number;

    @Field(() => Int)
    completed:number;

    @Field(() => Int)
    pending:number;

    @Field(() => Int, {deprecationReason: 'Use total field instead'})
    totalTodos:number;
}