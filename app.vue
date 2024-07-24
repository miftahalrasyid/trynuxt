<script>
import { useAuth } from './store/auth';
import { storeToRefs } from 'pinia';



export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useAuth()
    console.log("route", route.name, store.getLayout)
    return {
      layout: store.getLayout
    }
  }
})
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css";
</style>
<style lang="scss">
// @use "assets/scss/main.scss";</style>
<template>
  <NuxtLayout>
    <!-- <v-app> -->

    <NuxtPage />
    <!-- </v-app> -->
  </NuxtLayout>

</template>
