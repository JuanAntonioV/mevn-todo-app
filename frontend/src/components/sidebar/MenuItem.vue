<template>
    <div
        class="relative p-4 transition rounded-none hover:bg-blue-50 active:!bg-blue-100 active:!text-blue-500"
        :class="{
            'bg-blue-50 text-blue-500': $route.name === item.name,
        }"
        @click="onMenuClicked()"
    >
        <span class="text-sm font-semibold">{{ item.title }}</span>

        <div
            class="absolute right-0 w-1 -translate-y-1/2 bg-blue-500 rounded-l-full h-2/4 top-1/2"
            v-if="$route.name === item.name"
        ></div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const { item } = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const onMenuClicked = () => {
    router.push({ name: item.name });
};
</script>
