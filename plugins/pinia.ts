import { mainStore } from '~/store'

export default defineNuxtPlugin(() => {
    return {
        provide: mainStore()
    }
})