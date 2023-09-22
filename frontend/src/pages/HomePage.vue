<template>
    <div>
        <h1 class="text-center">HomePage</h1>
        <div v-if="selectedTodo">Store Is Working</div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useTodoStore from '../stores/useTodoStore';

const todoStore = useTodoStore();
const { selectedTodo } = storeToRefs(todoStore);

console.log(selectedTodo);
</script>
