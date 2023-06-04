import { defineStore } from 'pinia'
import { getGifs } from '../api/gifs.ts'

export const useGifsStore = defineStore('gifs', {
    state: () => {
        return {
            gifs: [] as object[],
            inputVal: '' as string,
            offset: 0 as number,
        }
    },

    getters: {
        getMatchedGifs: (state): object => {
            return state.gifs.filter((item: object): boolean | string => {
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
