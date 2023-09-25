<template>
    <header>
        <div class="join">
            <input
                class="input input-bordered join-item"
                placeholder="Search Todo"
            />
            <button class="rounded-r-full btn join-item">
                <v-icon name="hi-solid-search" size="20" />
            </button>
        </div>
    </header>
    <section>
        <SectionTitle
            title="Today Activities"
            desc="Manage your daily activities"
        />
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useTodoStore from '../stores/useTodoStore';
import SectionTitle from '../components/titles/SectionTitle.vue';
import { addIcons } from 'oh-vue-icons';
import { HiSolidSearch } from 'oh-vue-icons/icons';
addIcons(HiSolidSearch);

const todoStore = useTodoStore();
const { selectedTodo } = storeToRefs(todoStore);

console.log(selectedTodo);
</script>
