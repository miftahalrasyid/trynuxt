<template>
    <div v-if="loginChecked" class="d-flex align-center flex-column h-100 justify-content-center">
        <div class="logo justify-content-center mb-1">
            <NuxtLink to="/">
                <NuxtImg class="navbar-brand" width="200" src="/logo.svg" />
            </NuxtLink>
        </div>
        <v-card class="login-section" rounded="lg" width="350">
            <div class="logo justify-content-center">
                <h4>{{ $t('create.btn') }}</h4>
            </div>
            <v-col cols="12">
                <div class="text-decoration-none text-dark" :style="({ cursor: 'pointer' })" @click="goBack">
                    <font-awesome-icon icon="fas fa-arrow-left" size="1x"></font-awesome-icon> <a>{{ $t('app.back')
                        }}</a>
                </div>
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
                    <span class="fw-bolder">{{ $t('create.sign_with') }}</span>
                </v-btn>
            </v-col>
            <v-col cols="12" class="text-center">
                <v-divider>
                    <v-col cols="12" class="text-center"> {{ $t('app.or') }} </v-col>
                </v-divider>
            </v-col>
            <v-col v-if="getIsAuthorized" cols="12">
                <v-alert border="start" close-label="Close Alert" color="red" closable density="compact"
                    text="Username or Password is incorrect" variant="tonal"></v-alert>
            </v-col>
            <v-form v-model="isFormValid" @submit.prevent="isFormValid ? onSubmit() : null"
                @keydown.enter.prevent="isFormValid ? onSubmit() : null" aria-errormessage="this is error">
                <v-col cols="12" class="pt-0 mx-auto avatar">
                    <v-img @click="testingclick" :width="100" :height="100" content-class='avatar' aspect-ratio="16/9"
                        cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                    <input hidden type="file" @change="img_uploaded" ref="file"></input>
                </v-col>
                <v-col cols="12" class="pb-0 ">
                    <v-text-field ref="email" density="compact" tabindex="1" v-model="formData.email"
                        v-bind:label="$t('login.email')" type="email" :rules="[rules.required, rules.email]"
                        :hint="$t('login.email_hint')" outlined>
                    </v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <v-text-field ref="password" density="compact" tabindex="2" v-model="matchingPassword"
                        :rules="[rules.required, rules.min, rules.passwordMatch]" :type="show1 ? 'text' : 'password'"
                        name="input-10-1" v-bind:label="$t('login.password')" :hint="$t('login.pass_hint')" counter
                        :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="show1 = !show1"></v-text-field>
                </v-col>
                <v-col cols="12" class="pb-0">
                    <v-text-field ref="repassword" density="compact" tabindex="3" v-model="matchingPassword1"
                        :rules="[rules.required, rules.passwordMatch]" :type="show2 ? 'text' : 'password'"
                        name="input-10-2" v-bind:label="$t('create.repassword')"
                        :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="show2 = !show2"></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-btn :style="{
                        backgroundColor: btnBGColor, color: btnColor,
                        fontWeight: 600
                    }
                        " block rounded="xs" :loading="loading" :disabled="!isFormValid" @click="onSubmit">
                        {{ $t('create.btn') }}
                    </v-btn>
                </v-col>
            </v-form>
        </v-card>
    </div>
</template>
<style>
.avatar {
    display: flex
}

.avatar img {
    clip-path: circle(24%)
}
</style>
<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
    layout: 'admin',
    setup() {
        definePageMeta({
            layout: 'admin'
        })
    },
    mounted() {
        this.$auth.checkin(this.$auth.getCookie("accessToken"))
        this.$app.checkLang();

    },
    data() {
        console.log("router", this.$router)
        // const { isReady, login } = useCodeClient({
        //     onSuccess: this.handleOnSuccess,
        //     onError: this.handleOnError,
        //     // other options
        // });
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
                repassword: null,
                picture: null,
            },
            matchingPassword: null,
            matchingPassword1: null,
            isFormValid: false,
            show1: false,
            show2: false,
            rules: {
                required: value => {

                    return !!value || t('login.required')
                },
                passwordMatch: async () => {
                    // console.dir(await this.$refs.password)
                    // this.$refs.password.validate(true)


                    if (!!this.formData.password && !!this.formData.repassword)
                        return this.formData.password == this.formData.repassword || `password doesn't match`
                },
                counter: value => value.length <= 20 || 'Max 20 characters',
                min: v => {
                    // if (!this.formData.email)
                    //     this.$refs.email.focus()
                    // if (this.formData.password == this.formData.repassword) {
                    //     this.$refs.repassword.validate()
                    // }
                    return v.length >= 8 || t('login.pass_requirement')
                },
                emailMatch: () => (`The email and password you entered don't match`),
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || t('login.email_hint')
                    // return pattern.test(value) || t('login.email_invalid')
                },
            },

        }
    },
    watch: {
        matchingPassword(newPass, oldPass) {
            this.formData.password = newPass;
            // console.log("check password", this.$refs)
            this.$refs.email.validate()
            if (newPass !== oldPass) {
                this.$refs.repassword.validate(true)
            }
        },
        matchingPassword1(newPass, oldPass) {
            this.formData.repassword = newPass;
            this.$refs.email.validate()
            if (newPass !== oldPass) {
                this.$refs.password.validate(true)
            }
        }
    },
    computed: {
        loginChecked() {
            return this.$auth.isChecked
        },
    },
    methods: {
        onSubmit() {
            console.log("form", this.isFormValid)
            if (!this.formData) return
            this.$auth.createAccount(this.formData)
            // this.loading = true

            // setTimeout(() => (this.loading = false), 2000)
        },
        img_uploaded() {
            this.formData.picture = this.$refs.file.value
            console.log("testing click", this.$refs.file.value)
        },
        testingclick() {
            // this.file.click();
            this.$refs.file.click();
        },
        goBack() {
            this.$router.back();
        },
        // login() {
        // this.$auth.$patch({ loginLoading: Date.now() })
        // this.$auth.login({ username: this.formData.email, password: this.formData.password })
        // },
        async handleOnSuccess(response) {
            this.$auth.loginWith(response);
            console.log("Access Token: ", response);

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