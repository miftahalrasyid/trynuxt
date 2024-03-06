<template>
    <div class="d-flex align-center flex-column h-100 justify-content-center">

        <v-card class="login-section" rounded="lg" width="350">
            <div class="logo justify-content-center">
                <NuxtLink to="/">
                    <NuxtImg class="navbar-brand" width="200" src="/logo.svg" />
                </NuxtLink>
            </div>
            <v-col cols="12">
                <NuxtLink class="text-decoration-none text-dark" to="/">{{ "<- back" }}</NuxtLink>
            </v-col>
            <v-form v-model="isFormValid" @submit.prevent="onSubmit">
                <v-col cols="12">
                    <v-text-field v-model="formData.email" label="Email" type="email" placeholder="Masukkan Email"
                        :rules="[rules.required, rules.email]" hint="exp: user@user.com" outlined @keyup.enter="login">
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field v-model="formData.password" :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'" name="input-10-1" label="Normal with hint text"
                        hint="At least 8 characters" counter :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
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
                <v-btn :style="{
                    backgroundColor: btnBGColor, color: btnColor,
                    fontWeight: 600
                }
                    " block :loading="loading" :disabled="!isFormValid" @click="login">
                    MASUK
                </v-btn>
            </v-form>
        </v-card>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { useAuth } from '../../store/auth';


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

        // this.$store.dispatch(
        //     'about/getLayout',
        //     this.layout
        // )
    },

    data() {
        return {
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
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                min: v => v.length >= 8 || 'Min 8 characters',
                emailMatch: () => (`The email and password you entered don't match`),
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
            onSubmit() {
                if (!this.form) return

                this.loading = true

                setTimeout(() => (this.loading = false), 2000)
            },
            isFormValid: false,
            isLoading: false,
        }
    },
    computed: {
        getLabel() {
            return this.$auth.counter;
        },
        loading() {
            return this.$auth.loginLoading
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
        async getColor() {
            this.btnBGColor = await this.$vuetify.theme.themes.myCustomLightTheme.colors.blue
            this.btnColor = "white"
            console.log("get color", await this.$vuetify.theme.themes.myCustomLightTheme.colors.error)
            // await this.$vuetify.theme.themes.myCustomLightTheme.colors.error
            return this.btnColor
        },
        login() {
            // this.isLoading = true;
            this.$auth.$patch({ loginLoading: Date.now() })
            this.$auth.login({ username: this.formData.email, password: this.formData.password })
            // console.log("click login", this.isFormValid, this.formData)
            // this.isFormValid = true
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
</style>~/composables/useUserData