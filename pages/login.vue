<template>
    <div v-if="loginChecked" class="d-flex align-center flex-column h-100 justify-content-center">

        <div class="logo justify-content-center mb-1">
            <NuxtLink to="/">
                <NuxtImg class="navbar-brand" width="200" src="/logo.svg" />
            </NuxtLink>
        </div>
        <v-card class="login-section" rounded="lg" width="350">
            <div class="logo justify-content-center">
                <h4>{{ $t('login.btn') }}</h4>
            </div>
            <v-col cols="12">
                <NuxtLink class="text-decoration-none text-dark" to="/"><font-awesome-icon icon="fas fa-arrow-left"
                        size="1x"></font-awesome-icon> <a>{{ $t('app.back') }}</a></NuxtLink>
            </v-col>
            <v-col v-if="getIsAuthorized" cols="12">
                <v-alert border="start" close-label="Close Alert" color="red" closable density="compact"
                    text="Username or Password is incorrect" variant="tonal"></v-alert>
            </v-col>
            <v-form v-model="isFormValid" @submit.prevent="isFormValid ? onSubmit() : null"
                @keydown.enter.prevent="isFormValid ? onSubmit() : null">
                <v-col cols="12" class="pb-0">
                    <v-text-field density="compact" v-model="formData.email" v-bind:label="$t('login.email')"
                        type="email" :rules="[rules.required, rules.email]" :hint="$t('login.email_hint')" outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <v-text-field density="compact" v-model="formData.password" :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'" name="input-10-1" v-bind:label="$t('login.password')"
                        :hint="$t('login.pass_requirement')" counter
                        :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="show1 = !show1"></v-text-field>
                </v-col>
                <!-- <v-col cols="12">
                    <input type="text" v-model="newvar">
                    <select name="" id="">
                        <option v-for="(item, idx) in arr" v-bind:key="idx" value="item">{{ item }}</option>
                    </select>
                </v-col>
                <input type="text" v-model="getLabel"> -->
                <!-- <v-col cols="12" sm="6">
                    <v-text-field label="Your product or service" model-value="Grocery delivery"
                        hint="For example, flowers or used cars" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                    <v-text-field label="Your landing page" hint="www.example.com/page" persistent-hint
                    variant="outlined"></v-text-field>
                </v-col> -->
                <v-col cols="12">
                    <v-btn :style="{
                        backgroundColor: btnBGColor, color: btnColor,
                        fontWeight: 600
                    }
                        " block rounded="xs" :loading="loading" :disabled="!isFormValid" @click="onSubmit">
                        {{ $t('login.btn') }}
                    </v-btn>
                </v-col>
            </v-form>
            <v-col cols="12">
                {{ $t('login.noaccount') }}<nuxt-link to="/create"> {{ $t('login.create') }} </nuxt-link>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-divider>
                    <v-col cols="12" class="text-center"> {{ $t('app.or') }} </v-col>
                </v-divider>
            </v-col>
            <v-col cols="12">
                <v-btn block rounded="xs" :disabled="!isReady" @click="() => login()">
                    <svg class="mr-2" height="21" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" width="21">
                        <path
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            fill="#4285F4"></path>
                        <path
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            fill="#34A853"></path>
                        <path
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            fill="#FBBC05"></path>
                        <path
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            fill="#EB4335"></path>
                    </svg>
                    <span class="fw-bolder">{{ $t('login.sign_with') }}</span>
                </v-btn>
            </v-col>
        </v-card>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { ref } from 'vue'
import { useAuth } from '../../store/auth';
import {
    useTokenClient
    // type CredentialResponse,
} from "vue3-google-signin";
// import { faTwitterSquare, faTwitch, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

// library.add(faTwitterSquare, faTwitch, faGithubSquare)



export default defineComponent({
    layout: 'admin',
    props: {
        name: "Login",

    },
    setup() {
        definePageMeta({
            layout: 'admin'
        })
    },
    mounted() {
        this.name // type: string | undefined
        this.getColor();
        this.checkLogin();
        // this.$store.dispatch(
        //     'about/getLayout',
        //     this.layout
        // )
        this.$app.checkLang();
    },

    data() {
        let self = this;
        const { isReady, login } = useTokenClient({
            onSuccess: this.handleOnSuccess,
            onError: this.handleOnError,
            // other options
        });
        const { t } = useI18n();

        return {
            isReady,
            login,
            formData: {
                email: null,
                password: null,
            },
            vars: this.$auth.newvar,
            changeArr: this.$auth.changeArr,
            arr: ["test1", "test2", "test3"],
            btnBGColor: "#fff",
            btnColor: "#000",
            show1: false,
            password: 'Password',
            rules: {
                required: value => !!value || t('login.required'),
                counter: value => value.length <= 20 || 'Max 20 characters',
                min: v => v.length >= 8 || t('login.pass_requirement'),
                emailMatch: () => (`The email and password you entered don't match`),
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || t('login.email_invalid')
                },
            },

            isFormValid: false,
            isLoading: false,
        }
    },
    computed: {
        getIsAuthorized() {
            // console.log("getIsAuthorized", this.$auth.isUnauthorized)
            return this.$auth.isUnauthorized
        },
        getLabel() {
            // console.log("getIsAuthorized")
            return this.$auth.counter;
        },
        loading() {
            return this.$auth.loginLoading
        },
        loginChecked() {
            return this.$auth.isChecked
        },
        changeArr: {
            get() {
                return this.arr;
            },
            set(newValue) {
                this.arr = newValue;
            }
        }
    },
    methods: {
        onSubmit() {
            try {
                this.loading = true
                setTimeout(() => (this.loading = false), 2000)
                if (!this.formData) return

                // this.isLoading = true;
                this.$auth.$patch({ loginLoading: Date.now() })
                this.$auth.login({ username: this.formData.email, password: this.formData.password })
                // console.log("click login", this.isFormValid, this.formData)
                // this.isFormValid = true

            } catch (error) {
                console.log(error)
            }

        },
        async getColor() {
            this.btnBGColor = await this.$vuetify.theme.themes.myCustomLightTheme.colors.blue
            this.btnColor = "white"
            console.log("get color", await this.$vuetify.theme.themes.myCustomLightTheme.colors.error)
            // await this.$vuetify.theme.themes.myCustomLightTheme.colors.error
            return this.btnColor
        },

        checkLogin() {
            // const user = useCookie(
            //     'accessToken',
            //     {
            //         default: () => ({ score: -1 }),
            //         watch: false
            //     }
            // )

            console.log("cookie", this.$auth.getCookie("accessToken"))
            this.$auth.checkin(this.$auth.getCookie("accessToken"))
        },
        handleOnSuccess(response) {
            this.$auth.loginWith(response);
            console.log("Access Token: ", response.access_token);
        },
        handleOnError(errorResponse) {
            console.log("Error: ", errorResponse);
        }
    },

})
</script>
<style lang="scss" scoped>
.login-section {
    // background-color: $white_normal;
    background-color: rgba(var(--v-theme-secondary));
    // font-family: $font-primary;
    padding: 1.5em;
    width: 350px;
    border-radius: 2.5px;
    box-shadow: 0 0.5px 7.5px 0 rgba(0, 0, 0, 0.1);
}
</style>