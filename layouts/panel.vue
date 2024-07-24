<template>
    <v-card>
        <v-layout v-if="loginChecked">
            <v-app-bar v-if="initial && orientation" color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>My files</v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>

                    <v-btn icon="mdi-filter" variant="text"></v-btn>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>
            <v-navigation-drawer v-if="initial" expand-on-hover v-model="drawer" :location="drawerLocation"
                :rail="!orientation" permanent>
                <!-- <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        subtitle="sandra_a88@gmailcom" title="Sandra Adams"></v-list-item>
                </v-list> -->
                <v-list>
                    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                        subtitle="admin@airlangga.com" title="Super Admin">
                        <!-- <template v-slot:append>
                        <v-btn icon="mdi-chevron-left" variant="text" @click.stop="rail = !rail"></v-btn>
                    </template> -->
                    </v-list-item>
                </v-list>

                <v-divider :style="({ margin: '0px' })"></v-divider>

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
                    <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <!-- <v-main :style="({ height: '500px' })"> -->
            <v-main ref="drawerelm" :style="({ height: '100vh' })">
                <template v-if="initial">
                    <slot />
                </template>
            </v-main>
        </v-layout>
    </v-card>
</template>
<style>
.v-main {
    margin-left: 0;
}

@media (min-width:760px) {
    .v-main {
        /* margin-left: 200px; */
    }

}
</style>
<script>
import { ref } from 'vue';
export default {

    data() {
        const drawe = new ref(null);
        console.log("draw", drawe)
        this.initial = false;
        return {
            initial: this.initial,
            drawer: true,
            drawe,
            rail: false,
            drawerLocation: "bottom",
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
            this.drawer = true
        },

    },
    mounted() {
        if (this.$refs.drawerelm) {

            window.refff = this.$refs.drawerelm.$el
            setTimeout(() => {

                this.$refs.drawerelm.$el.style.marginLeft = '0px'
            }, 10)
            console.log("drawer elemen", this.$refs.drawerelm.$el)
        }
        this.checkLogin();
        this.checkDrawerLocation();
    },
    computed: {
        getIsAuthorized() {
            console.log("getIsAuthorized", this.$auth.isUnauthorized)
            return this.$auth.isUnauthorized
        },
        navlocation() {
            console.log("navlocation", this.$vuetify.display.platform.touch, this.$vuetify.display.platform.touch ? 'bottom' : 'left')

            // return 'left';
            return this.drawerLocation;
            // return this.$vuetify.display.platform.touch ? 'bottom' : 'left';
        },
        orientation() {
            var self = this;
            // if (this.$vuetify.display.xs)
            setTimeout(() => {
                self.initial = true;
                console.log("draw", this)

            }, 500)
            // window.display = this.$vuetify.display
            if (this.$vuetify.display.xl || this.$vuetify.display.lg || this.$vuetify.display.md) {
                console.log("display:", this.$vuetify.display)
                return false;

            }
            else {

                return true
            }
            // return this.$vuetify.display.mobile
        },
        loginChecked() {
            console.log('login checked', this.$auth.isChecked)
            return this.$auth.isChecked
        },
    },
    methods: {
        drwaer(el) {
            return el;
        },
        checkDrawerLocation() {
            this.initial = true;
            this.drawerLocation = this.$vuetify.display.platform.touch ? 'bottom' : 'left';
            if (this.drawerLocation == 'bottom') {
                this.drawer = false;
            }
        },
        checkLogin() {
            // const user = useCookie(
            //     'accessToken',
            //     {
            //         default: () => ({ score: -1 }),
            //         watch: false
            //     }
            // )

            console.log("cookie", this.getCookie("accessToken"))
            this.$auth.checkin(this.getCookie("accessToken"))
        },
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
    }
}

</script>