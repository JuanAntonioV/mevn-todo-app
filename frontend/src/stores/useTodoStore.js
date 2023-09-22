import { defineStore } from 'pinia';
import { TodoStoreName } from './storeNames';

const useTodoStore = defineStore(TodoStoreName, {
    state: () => ({
        todos: [],
        selectedTodo: {
            id: 1,
        },
    }),
    actions: {
        addTodo: (todo) => {
            useTodoStore.todos.push(todo);
        },
    },
});

export default useTodoStore;
