<template>
  <v-container>
    <v-col>
      <v-row>
        <v-col>
          <v-img width="400" height="400" :src="info.images.original.url"/>
          <v-spacer/>
          <span class="text-subtitle-1">{{ info.title }}</span>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'PageDetail'
}
</script>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted } from 'vue';
import { useGifsStore } from '../../store';

const gifsStore = useGifsStore()
const router = useRouter()
const route = useRoute()

const info = computed(() => {
  return gifsStore.gifs.find(item => item.id === route.params.id)
})

onMounted(async() => {
  if (!gifsStore.gifs.length) {
    await gifsStore.apiGetGifs()
  }
})

</script>

<style lang="scss">

</style>
