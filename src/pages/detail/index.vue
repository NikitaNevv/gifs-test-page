<template>
    <v-container>
        <router-link :to="{ name: 'PageHome' }">Go back</router-link>

        <v-row class="mt-10">
            <v-col>
                <v-img width="600" height="600" :src="info.images.original.url"/>
                <v-spacer/>
                <span class="text-subtitle-1">{{ info.title }}</span>
                <v-spacer/>
                <router-link :to="{
                    name: 'PageGifOwner',
                    params: {id: info.id, username: info.username}
                }"
            >
                    Author: {{ info.username }}
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'PageDetail'
}
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, reactive, watch  } from 'vue';
import { useGifsStore } from '../../store';

const gifsStore = useGifsStore()
const route = useRoute()
const info = computed(() => {
    return gifsStore.gifs.find(item => item.id === route.params.id)
})

onMounted(async() => {
    if (!gifsStore.gifs.length) {
        await gifsStore.apiGetGifs()
    }

    console.log(gifsStore.gifs)
})
</script>

<style lang="scss">

</style>
