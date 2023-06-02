<template>
    <v-row>
        <v-col
            v-for="gif in gifStore.gifs"
            :key="gif.id"
            cols="4"
            sm="4"
        >
            <Gif
                class="ma-2 pa-2"
                aspect-ratio="1"
                :info="gif"
            >
            </Gif>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import {useGifsStore} from '../store/index.ts'
import Gif from './blocks/GifBlock.vue'

const gifStore = useGifsStore()

import { onMounted } from 'vue';

 onMounted(async () => {
     await gifStore.apiGetGifs()
})
</script>

<style lang="scss" scoped>

</style>
