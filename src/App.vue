<template>
  <v-app>
    <v-app-bar class="px-10 bg-orange-darken-3">
      <v-row align="center" justify="space-between">
        <v-col cols="1" class="flex justify-start">
          <v-img height="40" width="40" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-png-image_5177367.jpg"/>
        </v-col>

        <v-col cols="8">
          <v-text-field
              density="compact"
              variant="solo"
              label="Search"
              append-inner-icon="mdi-magnify"
              single-line
              hide-details
              :v-model="data.searchVal"
          />
        </v-col>
      </v-row>
    </v-app-bar>

    <div class="px-10 pt-16">
      <router-view/>
    </div>

    <v-footer class="bg-orange-darken-3 mt-10">
      2023
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import GifGallery from './components/GifGallery.vue'
import Logo from './components/blocks/Logo.vue'
import { reactive } from 'vue';

const data = reactive({
  searchVal: ''
})
</script>

<style scoped>
.logo {
  width: 200px;
  height: 200px;
  margin: 20px;
}
</style>
