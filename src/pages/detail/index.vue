<template>
    <v-container>
        <router-link :to="{ name: 'PageHome' }">Go back</router-link>

        <v-row class="mt-10">
            <v-col>
                <v-img width="600" height="600" :src="info.images.original.url"/>
                <v-spacer/>

                <span class="text-subtitle-1">{{ info.title }}</span>
                <v-spacer/>

                <router-link
                    v-if="info.username"
                    :to="{name: 'PageGifOwner', params: {id: info.id, username: info.username}}"
                >
                    Author: {{ info.username }}
                </router-link>

                <span v-else>Unknown author</span>
            </v-col>
        </v-row>


        <v-btn class="mt-10" @click="share">Share it with friends!</v-btn>

        <ComponentSlider class="mt-15"/>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'PageDetail'
}
</script>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, onMounted, reactive } from 'vue';
import { useGifsStore } from '../../store';
import ComponentSlider from '../../components/slider/index.vue'

const gifsStore = useGifsStore()
const route = useRoute()
const info = computed(() => {
    //@ts-ignore
    const gifObject = gifsStore.gifs.find(item => item.id === route.params.id);

    data.title = gifObject.title;
    data.id = gifObject.id;
    data.url = gifObject.images.original.url;
    data.username = gifObject.username

    return gifObject;
})

onMounted(async() => {
    if (!gifsStore.gifs.length) {
        await gifsStore.apiGetGifs()
    }
})

const data = reactive({
    title: '',
    id: '',
    url: '',
    username: ''
})

const shareData = {
    title: data.title,
    text: 'Learn web development on MDN!',
    url: data.url,
};

const share = () => {
    navigator.share(shareData);
}
</script>

<style>
</style>
