import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

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

    findAll(): Todo[] {
        return this.todos;
    }
}
