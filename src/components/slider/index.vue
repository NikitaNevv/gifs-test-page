<template>
    <v-sheet
        class="mx-auto"
        elevation="8"
        max-width="800"
    >
        <v-slide-group
            class="pa-4 w-100"
            selected-class="bg-success"
            show-arrows
        >
            <v-slide-group-item
                v-for="gif in gifStore.gifs"
                :key="gif.id "
            >
                <v-card
                    color="grey-lighten-1"
                    :class="['ma-4']"
                    height="100"
                    width="100"
                    cover
                >
                    <v-img
                        :src="gif.images?.original?.url"
                        height="800px"
                        cover
                    />
                </v-card>
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
</template>

<script lang="ts">
export default {name: 'ComponentSlider'}
</script>

<script setup lang="ts">
import { useGifsStore } from '../../store/index.ts'

const gifStore = useGifsStore()
</script>
