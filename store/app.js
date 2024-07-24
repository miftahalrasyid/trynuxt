import { defineStore } from 'pinia'
export const useApp = defineStore({
    id: 'app-store',
    state: () => ({
        lang: ''
    }),
    getters: {
        // getLayout: (state) => state.layout,
    },
    actions: {
        checkLang() {
            const { setLocale } = useI18n();
            if (useCookie('lang').value !== undefined) {
                setLocale(useCookie('lang').value)
                this.lang = useCookie('lang').value
            }
            else {
                setLocale(useCookie('i18n_redirected').value)
                this.lang = useCookie('i18n_redirected').value
            }
        },
    },
})