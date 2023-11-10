<script>
import useUserData from './composable/useUserData';
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
<style >
@import "https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css";
</style>
<style lang="scss">
// @use "assets/scss/main.scss";
</style>
<template>
  <NuxtLayout>
    <v-app>

      <NuxtPage />
    </v-app>
  </NuxtLayout>

  <!-- Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button> -->

  <!-- <div>
    <NuxtWelcome />
  </div> -->
</template>
