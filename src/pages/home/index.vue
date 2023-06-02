<template>
  <v-container class="pt-12">
    <v-row>
      <v-col
          v-for="gif in gifStore.gifs"
          :key="gif.id"
          cols="3"
      >
        <v-card
            :to="{name: 'PageDetail', params: {id: gif.id}}"
            class="mx-auto"
            max-width="344"
        >
          <v-img
              :src="gif.images.original.url"
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
import {useGifsStore} from '../../store/index.ts'
import { onMounted } from 'vue';

const gifStore = useGifsStore()

onMounted(async () => {
  await gifStore.apiGetGifs()
})
</script>

<style scoped>
</style>
