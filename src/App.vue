<template>
    <v-app>
        <v-app-bar class="px-10 bg-orange-darken-3">
            <v-row align="center" justify="space-between">
                <v-col cols="1" class="flex justify-start">
                    <v-img v-if="data.currentUrl === '/'" height="40" width="40" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-png-image_5177367.jpg"/>

                    <router-link v-else :to="{name: 'PageHome'}">
                        <v-img height="40" width="40" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-mountain-landscape-logo-design-hiking-travel-and-adventure-concept-design-png-image_5177367.jpg"/>
                    </router-link>
                </v-col>

                <v-col cols="8">
                    <v-text-field
                        v-if="data.currentUrl === '/'"
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
import {reactive, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

watch(() => route.path, (newPath: any) => {
    data.currentUrl = newPath
})

interface data {
    searchVal: string,
    currentUrl: string
}

const data = reactive({
    searchVal: '',
    currentUrl: route.params
})
</script>

<style scoped>
.logo {
    width: 200px;
    height: 200px;
    margin: 20px;
}
</style>
