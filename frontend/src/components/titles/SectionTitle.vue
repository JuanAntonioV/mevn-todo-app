<template>
    <header class="flexBetween">
        <div>
            <h1 class="text-2xl font-bold">
                {{ title }}
            </h1>
            <p class="text-sm text-gray-500">
                {{ desc }}
            </p>
        </div>

        <div>
            <slot />
        </div>
    </header>
</template>

<script setup>
const { title, desc } = defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        default: '',
    },
});
</script>
