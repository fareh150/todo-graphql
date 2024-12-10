import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { CreateTodoInput, StatusArgs, UpdateTodoInput } from './dto';

@Injectable()
export class TodoService {

    // simular db
    private todos: Todo[] =  [
        {
            id: 1,
            description: 'Gema del Alma',
            done: false
        },
        {
            id: 2,
            description: 'Gema del Tiempo',
            done: false
        },
        {
            id: 3,
            description: 'Gema de la Realidad',
            done: false
        },
        {
            id: 4,
            description: 'Gema del Poder',
            done: false
        },
        {
            id: 5,
            description: 'Gema del Espacio',
            done: false
        },
        {
            id: 6,
            description: 'Gema de la Mente',
            done: false
        }
    ]

    findAll(statusArgs: StatusArgs): Todo[] {
        if (statusArgs.status !== undefined)
        {
            return this.todos.filter(todo => todo.done === statusArgs.status);
        }

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo)
        {
            throw new NotFoundException(`Todo with id ${id} not found`);
        }
        return todo;
    }

    create(createTodoInput: CreateTodoInput): Todo {
        const todo = new Todo();
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        todo.description = createTodoInput.description;

        this.todos.push(todo);

        return todo;
    }

    update(updateTodoInput: UpdateTodoInput): Todo {
        const { id, description, done } = updateTodoInput;
        const todoToUpdate = this.findOne(id);

        if (description)
        {
            todoToUpdate.description = description;
        }

        if (done !== undefined)
        {
            todoToUpdate.done = done;
        }

        this.todos = this.todos.map(todo => todo.id === id ? todoToUpdate : todo);

        return todoToUpdate;
    }

    delete(id: number): Todo {
        const todoToDelete = this.findOne(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        return todoToDelete;
    }
}
