import {defineStore} from 'pinia'
import { getGifs } from '../api/gifs.ts'

export const useGifsStore = defineStore('gifs', {
    state: () => {
        return {
            gifs: []
        }
    },

    getters: {
        getModifyGif: (state) => {
            const arr = []
            for (const key in state.gifs) {
                arr.push({
                    id: key,
                    url: key,
                })
            }

            return arr;
        }
    },

    actions: {
        async apiGetGifs(locale?: string) {
            const res = await getGifs()
            if (res.success) {
                this.gifs = res.data
                return res
            }
        },
    }
})
