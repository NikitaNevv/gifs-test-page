<template>
    <v-app>
        <v-sheet class="d-flex align-center">
            <Logo class="logo" />
            <SearchBar/>
        </v-sheet>
        <v-main>
            <GifGallery/>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import GifGallery from './components/GifGallery.vue'
import Logo from './components/blocks/Logo.vue'

</script>

<style scoped>
.logo {
    width: 200px;
    height: 200px;
    margin: 20px;
}
</style>
