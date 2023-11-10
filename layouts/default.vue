<template>
    <nav class="navbar navbar-expand-lg navbar-light justify-content-between position-fixed" :style="{
        height: '6rem',
        backgroundColor: '#F0F2F1',
        zIndex: '1', width: '100%',
        top: '0'
    }">
        <div class="container-fluid" :style="{ marginTop: '2.7rem' }">
            <div id="up-nav"
                v-bind:style="{ position: 'absolute', top: 0, left: 0, background: '#222257', width: '100%', height: '2.7rem' }"
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
            <div class="logo">
                <NuxtLink to="/">
                    <NuxtImg class="navbar-brand" width="200" src="/logo.svg" />
                </NuxtLink>
            </div>
            <div class="collapse navbar-collapse container-fluid">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item active">
                        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid custom_container">
        <slot />
    </div>
</template>
<style lang="scss">
.custom_container {
    margin-top: 6rem;
}

.sign-in {
    a {
        color: white;
        text-decoration: none;
    }
}
</style>