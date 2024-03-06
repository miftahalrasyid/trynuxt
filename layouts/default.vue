<template>
    <nav class="navbar navbar-expand-lg navbar-light justify-content-between position-fixed p-0" :style="{
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

                                <div class="sign-in"
                                    v-bind:style="{ background: '#595786', fontSize: '.75rem', padding: '0.3rem 0.9rem', color: 'white', borderRadius: '5px' }">
                                    <nuxt-link to="/auth/login">
                                        <span>Masuk</span>
                                    </nuxt-link>
                                </div>
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
                <v-btn variant="text" class="h-100">
                    Home
                </v-btn>
            </NuxtLink>
            <NuxtLink class="nav-link d-inline-block h-100 p-0" to="/about">
                <v-btn variant="text" class="h-100">
                    About
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
export default {

    data() {
        return {
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
    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
<style lang="scss">
.custom_container {
    margin-top: 3rem;
}

.sign-in {
    a {
        color: white;
        text-decoration: none;
    }
}
</style>