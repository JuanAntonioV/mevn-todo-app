<template>
    <aside class="w-fit">
        <div class="drawer lg:drawer-open">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div
                class="flex flex-col items-center justify-center drawer-content"
            >
                <label
                    for="sidebar"
                    class="btn btn-primary drawer-button lg:hidden"
                >
                    <v-icon name="hi-solid-menu-alt-2" size="30" />
                </label>
            </div>
            <div class="drawer-side">
                <label for="sidebar" class="drawer-overlay"></label>
                <ul
                    class="min-h-full px-0 py-8 bg-white border-r menu w-60 text-base-content"
                >
                    <li v-for="item in menuLists">
                        <MenuItem :item="item" />
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { addIcons } from 'oh-vue-icons';
import { HiSolidMenuAlt2 } from 'oh-vue-icons/icons';
import MenuItem from './MenuItem.vue';
import { menuLists } from './constants';

addIcons(HiSolidMenuAlt2);
</script>
