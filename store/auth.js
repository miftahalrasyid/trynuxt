import { defineStore } from 'pinia'
export const useAuth = defineStore({
  id: 'filter-store',
  state: () => ({
    layout: 'admin',
    isLoggedIn: false,
    newvar: "",
    counter: 0,
    loginLoading: false
  }),
  getters: {
    getLayout: (state) => state.layout,
  },
  actions: {
    setLayout(value) {
      this.layout = value;
    },
    changeVar(value) {
      this.newvar = value
    },
    async login(formdata) {
      var self = this;
      try {

        // `this` is the store instance
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(formdata);
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        var res = await $fetch("/api/auth/login", requestOptions)
        // console.log("result", this.loginLoading - Date.now())
        if (Date.now() - this.loginLoading > 1000) {
          this.loginLoading = false;

        }
        else {
          setTimeout(() => {
            self.loginLoading = false;
          }, 500)
        }
      } catch (error) {
        // console.log("error", /\W*(\d+)/.exec(error)[1])
        if (/\W*(\d+)/.exec(error)[1] == 500) {
          if (Date.now() - this.loginLoading > 1000) {
            this.loginLoading = false;

          }
          else {
            setTimeout(() => {
              self.loginLoading = false;
            }, 500)
          }
        }
      }

      if (res) {

      }
      // console.log('increment', this.loginLoading, res)

      this.counter++
    },
  },
})