import { defineStore } from 'pinia'
import { getGifs } from '../api/gifs.ts'

export const useGifsStore = defineStore('gifs', {
    state: () => {
        return {
            gifs: [],
            inputVal: '',
            offset: 0,
        }
    },

    getters: {
        getMatchedGifs: (state) => {
            return state.gifs.filter((item) => {
                if (!item.title) return ''
                return item.title.toLowerCase().indexOf(state.inputVal.toLowerCase()) != -1
            })
        }
    },

    actions: {
        async apiGetGifs() {
            const res = await getGifs(this.offset)
            if ('data' in res) {
                this.gifs.push(...res.data)
            }
            this.offset += 12
        },
    }
})
