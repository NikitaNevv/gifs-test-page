import { defineStore } from 'pinia'
import { getGifs } from '../api/gifs.ts'

export const useGifsStore = defineStore('gifs', {
    state: () => {
        return {
            gifs: [],
        }
    },

    getters: {},

    actions: {
        async apiGetGifs() {
            const res = await getGifs()
            console.log(res);

            this.gifs = res.data
        },
    }
})
