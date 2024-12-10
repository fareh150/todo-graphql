import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {
    @Query(() => [String], {name: 'todos'})
    findAll(){
        return ['A', 'B', 'C'];
    }

    findOne(){
        return {};
    }

    createTodo(){
        return {};
    }

    updateTodo(){
        return {};
    }

    deleteTodo(){
        return {};
    }
}
