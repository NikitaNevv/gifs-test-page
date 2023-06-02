<template>
    <v-container class="d-flex flex-column align-center">
        <button @click="goBack">Go back</button>

        <span class="mt-10">{{info.user.username}}</span>

        <v-img
            :width="200"
            style="max-height: 200px"
            cover
            :src="info.user.avatar_url"
            class="mt-10"
            alt="user logo"
        />

        <a
            class="mt-10"
            :href="info.user.profile_url"
            target=”_blank”
        >
            Link to {{info.user.username}} profile
        </a>
    </v-container>
</template>

<script lang="ts">
export default {name: 'PageGifOwner'}
</script>

<script setup lang="ts">
import { useGifsStore } from '../../store/index.ts'
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const gifStore = useGifsStore();

const info = computed(() => {
    return gifStore.gifs.find(item => item.id === route.params.id)
})

const goBack = () => {
    router.go(-1)
}
</script>

<style scoped>

</style>
