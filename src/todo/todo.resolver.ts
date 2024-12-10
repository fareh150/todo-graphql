import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { StatusArgs } from './dto/args';
import { aggegationsType } from './types/aggregations.type';

@Resolver(() => Todo)
export class TodoResolver {
    constructor(
        private readonly todoService: TodoService
    ) {}

    @Query(() => [Todo], {name: 'todos'})
    findAll(
        @Args() statusArgs?: StatusArgs
    ): Todo[] {
        return this.todoService.findAll(statusArgs);
    }

    @Query(() => Todo, {name: 'todo'})
    findOne(
        @Args('id', {type: () => Int}) id: number
    ){
        return this.todoService.findOne(id);
    }

    @Mutation(() => Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInput') createTodoInput: CreateTodoInput
    ){
        return this.todoService.create(createTodoInput);
    }

    @Mutation(() => Todo, {name: 'updateTodo'})
    updateTodo(
        @Args('UpdateTodoInput') updateTodoInput: UpdateTodoInput
    ){
        return this.todoService.update(updateTodoInput);
    }

    @Mutation(() => Todo, {name: 'deleteTodo'})
    deleteTodo(
        @Args('id', {type: () => Int}) id: number
    ){
        return this.todoService.delete(id);
    }

    //Aggregation
    @Query(() => Int, {name: 'totalTodos'})
    totalTodos(): number {
        return this.todoService.totalTodos;
    }

    @Query(() => Int, {name: 'completedTodos'})
    completedTodos(): number {
        return this.todoService.completedTodos;
    }

    @Query(() => Int, {name: 'pendingTodos'})
    pendingTodos(): number {
        return this.todoService.pendingTodos;
    }

    @Query(() => aggegationsType)
    aggregations(): aggegationsType {
        return {
            total: this.todoService.totalTodos,
            completed: this.todoService.completedTodos,
            pending: this.todoService.pendingTodos,
            totalTodos: this.todoService.totalTodos
        };
    }
}
