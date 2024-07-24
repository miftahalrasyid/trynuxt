<template>
    <nav class="navbar navbar-expand-md navbar-light justify-content-between position-fixed p-0" :style="{
        height: '6rem',
        backgroundColor: '#F0F2F1',
        zIndex: '1', width: '100%',
        top: '0'
    }">
        <div class=" w-100" :style="{ marginTop: '2.7rem' }">
            <div id="up-nav"
                v-bind:style="({ position: 'absolute', top: 0, left: 0, zIndex: 1, background: '#222257', width: '100%', height: '2.8rem' })"
                class="container-fluid px-0">
                <nav class="navbar px-0">
                    <ul class="nav navbar-nav ml-auto align-items-center">
                        <li class=" nav-item">
                            <div>
                                <font-awesome-icon :style="{
                                    pointerEvents: 'none',
                                    position: 'relative', left: '25px', fontFamily: 'poppins',
                                    fontSize: '.875rem', padding: '0 0.5rem', color: 'white'
                                }" icon="fa-solid fa-earth-asia" size="1x"></font-awesome-icon>
                                <select name="lang" @change="onLangChange" v-model="lang" id="lang" :style="{
                                    textIndent: '15px', minWidth: '62px', fontFamily: 'poppins',
                                    fontSize: '.875rem', padding: '0 0.5rem', color: 'white'
                                }">
                                    <option value="id-ID">ID</option>
                                    <option value="en-US">En</option>
                                    <option value="ja-JP">日本</option>
                                </select>
                            </div>
                        </li>
                        <li class=" nav-item"><a
                                v-bind:style="{ fontFamily: 'poppins', fontSize: '.875rem', padding: '0 0.5rem', color: 'white' }"
                                class="nav-link">(+62) 877 2208 3048</a>
                        </li>
                        <li class="nav-item"><a
                                v-bind:style="{ fontFamily: 'poppins', fontSize: '.875rem', padding: '0 0.5rem', color: 'white' }"
                                class="nav-link">Whatsapp</a></li>
                        <li class="nav-item">

                            <hr
                                v-bind:style="{ margin: 'auto', borderLeft: '1px solid white', height: '1.5rem', top: '-1rem', left: '50%' }" />
                        </li>
                        <li class="nav-item">
                            <div id="wrapper" v-bind:style="{ padding: '0 0.8rem', }">

                                <nuxt-link to="/login">
                                <div class="sign-in"
                                    v-bind:style="{ background: '#595786', fontSize: '.75rem', padding: '0.3rem 0.9rem', color: 'white', borderRadius: '5px' }">
                                        <span>Masuk</span>
                                    </div>
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- <v-card class="mt-11"> -->

            <!-- </v-card> -->

            <!-- <div class="collapse navbar-collapse container-fluid">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                    </li>
                </ul>
            </div> -->
        </div>
    </nav>
    <v-layout>
        <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

        <!-- <v-app-bar color="white" class="mt-11"> -->
        <v-app-bar color="white" prominent class="mt-11">
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <NuxtLink to="/">
                    <NuxtImg class="navbar-brand" width="200" src="/logo.svg" />
                </NuxtLink>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <NuxtLink class="nav-link d-inline-block h-100 p-0" to="/">
                <v-btn variant="text" class="h-100 fw-normal arial text-capitalize">
                    {{ $t("app.home") }}
                </v-btn>
            </NuxtLink>
            <NuxtLink class="nav-link d-inline-block h-100 p-0" to="/about">
                <v-btn variant="text" class="h-100 fw-normal arial text-capitalize">
                    {{ $t("app.about") }}
                </v-btn>
            </NuxtLink>
            <!-- <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" location="bottom" temporary>
            <v-list :items="items"></v-list>
        </v-navigation-drawer>

        <v-main :style="({ height: '100vh' })">
            <!-- <v-card-text>
                The navigation drawer will appear from the bottom on smaller size screens. -->
            <div class="container-fluid custom_container">
                <slot />
            </div>
            <!-- </v-card-text> -->
        </v-main>
    </v-layout>
    <!-- <div class="container-fluid custom_container">
        <slot />
    </div> -->
</template>
<script>
import { useLocale } from 'vuetify';

// import { useI18n } from '@nuxtjs/i18n';
export default defineNuxtComponent({

    data() {
        const { locale, setLocale, setLocaleCookie } = useI18n();
        let lang = useCookie('i18n_redirected');
        if (useCookie('lang').value !== undefined) {
            setLocale(useCookie('lang').value)
            lang = useCookie('lang').value
        }
        // useCookie('langi').value = "en"
        return {
            setLocale,
            setLocaleCookie,
            lang,
            sidebar: false,
            menuItems: [
                { title: 'Home', path: '/home', icon: 'home' },
                { title: 'Sign Up', path: '/signup', icon: 'face' },
                { title: 'Sign In', path: '/signin', icon: 'lock_open' }
            ],
            drawer: false,
            group: null,
            items: [
                {
                    title: 'Foo',
                    value: 'foo',
                },
                {
                    title: 'Bar',
                    value: 'bar',
                },
                {
                    title: 'Fizz',
                    value: 'fizz',
                },
                {
                    title: 'Buzz',
                    value: 'buzz',
                },
            ],
        }
    },
    mounted() {

    },
    watch: {
        group() {
            this.drawer = false
        },
    },
    methods: {
        onLangChange(ev) {
            this.setLocale(this.lang)
            useCookie('lang').value = this.lang
            // this.setLocaleCookie(this.lang)
            // console.log("get cookie", this.getLocaleCookie())
            // this.$router.push(this.switchLocalePath(this.lang))
        }
    }
})
</script>
<style lang="scss">
.custom_container {
    margin-top: 3rem;
}

p,
button:not(.arial) {
    font-family: "Poppins";
    font-weight: 500;
}

.arial {
    font-family: Arial, Helvetica, sans-serif !important;
}

#lang:focus {
    outline: none;
}

.sign-in {
    a {
        color: white;
        text-decoration: none;
    }
}
</style>