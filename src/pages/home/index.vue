<template>
    <v-container class="pt-12">
        <v-row>
            <v-card
                v-if="gifStore.getMatchedGifs.length === 0"
                class="mx-auto"
                max-width="344"
            >
                <v-img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjE1NWQyMWZiMjIzMDVjYzUzNDJhMmI3MGVkNjU4ZmUyNGJlYWY3ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/11gZBGuDnYwdpu/giphy.gif"
                    height="200px"
                />

                <v-card-title class="text-subtitle-2">
                    Not Found
                </v-card-title>
            </v-card>

            <v-col
                v-else
                v-for="gif in gifStore.getMatchedGifs"
                :key="gif.id || 'test'"
                cols="3"
            >
                <v-card
                    :to="{name: 'PageDetail', params: {id: gif.id || 'test'}}"
                    class="mx-auto"
                    max-width="344"
                >
                    <v-img
                        :src="gif.images?.original?.url"
                        height="200px"
                    />

                    <v-card-title class="text-subtitle-2">
                        {{ gif.title }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'PageHome'
}
</script>

<script setup lang="ts">
import { useGifsStore } from '../../store/index.ts'

const gifStore = useGifsStore()
</script>

<style scoped>
</style>
