import { defineStore } from 'pinia'
import { useAuth } from './auth'
import { useApp } from './app'

// export default {
//     methods: {
//         // gives access to this.increment() inside the component
//         // same as calling from store.increment()
//         ...mapActions(useAuth, ['increment']),
//         // same as above but registers it as this.myOwnName()
//         ...mapActions(useAuth, { myOwnName: 'increment' }),
//     },
// }
const useMainStore = defineStore('main', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment() {
            // `this` is the store instance
            this.counter++
        },
    },
})
export const mainStore = () => {
    return {
        auth: useAuth(),
        app: useApp(),
        store: useMainStore()
    }
}