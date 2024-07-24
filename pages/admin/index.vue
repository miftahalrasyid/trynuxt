<template>
    <v-container fluid id="scroll-target" class="overflow-y-auto" style="max-height: 100vh">
        <v-row align="top" class="no-margin" justify="center" style="height: 1000px" v-scroll:#scroll-target="onScroll">
            <v-parallax height="300" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></v-parallax>
        </v-row>
    </v-container>
    <h1>{{ title }}</h1>
</template>
<style>
.no-margin {
    margin-top: -16px !important;
    margin-left: -16px !important;
    margin-right: -16px !important;
}
</style>
<script>
export default {
    // layout: 'admin',
    setup() {
        definePageMeta({
            layout: 'panel'
        })
    },
    data() {
        return {
            title: "Admin Pass"
        }
    },
    methods: {
        onScroll() {

        }
    }
}
</script>

<style></style>