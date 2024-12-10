import { Field, InputType } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MaxLength, IsInt, Min, IsOptional, IsBoolean } from "class-validator";

@InputType()
export class UpdateTodoInput {

    @Field(() => Number,{description: 'Id of the todo'})
    @IsInt()
    @Min(1)
    id: number;
 
    @Field(() => String,{description: 'Description of the todo', nullable: true})
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional()
    description?: string;

    @Field(() => Boolean,{description: 'Status of the todo', nullable: true})
    @IsOptional()
    @IsBoolean()
    done?: boolean;
}