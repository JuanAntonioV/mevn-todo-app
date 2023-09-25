<template>
    <main class="flex flex-row w-full h-full">
        <Sidebar />

        <div class="w-full h-screen p-4 overscroll-auto">
            <RouterView />
        </div>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '@/components/sidebar/Sidebar.vue';
</script>
