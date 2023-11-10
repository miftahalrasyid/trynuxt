import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';
import "vuetify/styles";
import '@/assets/scss/main.scss';
import { createVuetify, type ThemeDefinition } from 'vuetify'
const myCustomLightTheme: ThemeDefinition = {
    colors: {
        secondary: '#f9f9f9',
        blue: '#222257'
    },
}
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        // ... your configuration

        theme: {

            defaultTheme: 'myCustomLightTheme',
            themes: {
                myCustomLightTheme,
                // light: {
                //     white_normal: '#FFFFFF',
                // }
            }
        }

    })
    app.vueApp.use(vuetify)
})