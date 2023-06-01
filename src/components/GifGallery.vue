<template>
    <v-row>
        <v-col
            v-for="n in 1"
            :key="n"
            cols="10"
            sm="3"
        >
            <Gif
                class="ma-2 pa-2"
                aspect-ratio="1"
                v-for="gif in gifStore.getModifyGif"
                :key="gif.id"
                :gif="gif"
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

     console.log(gifStore.getModifyGif)
})

</script>

<style lang="scss" scoped>

</style>
