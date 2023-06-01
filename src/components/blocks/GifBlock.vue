<template>
    <v-img src="{{gif.url}}"/>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
    gif: {
        url: string;
        id: string;
    }
}

const props = defineProps<Props>();

</script>

<style lang="scss" scoped>

</style>
