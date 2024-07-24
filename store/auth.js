import { defineStore } from 'pinia'
export const useAuth = defineStore({
  id: 'filter-store',
  state: () => ({
    layout: 'admin',
    isLoggedIn: false,
    isChecked: false,
    newvar: "",
    counter: 0,
    loginLoading: false,
    isUnauthorized: false,
  }),
  getters: {
    getLayout: (state) => state.layout,
  },
  actions: {
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
    setLayout(value) {
      this.layout = value;
    },
    changeVar(value) {
      this.newvar = value
    },
    async createAccount(response) {
      try {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-google-token", response.access_token);

        var raw = JSON.stringify(response);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };

        let result = await fetch("/api/auth/create", requestOptions).then(res => res.json());
        if (result.status == 302) {
          window.location.href = result.url
        }
        self.isUnauthorized = false;


        if (Date.now() - this.loginLoading > 1000) {
          this.loginLoading = false;

        }
        else {
          setTimeout(() => {
            self.loginLoading = false;
          }, 500)
        }

      } catch (error) {
        self.isUnauthorized = true;
        // console.log("error", /\W*(\d+)/.exec(error))
        if (/\W*(\d+)/.exec(error))
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
    },
    async loginWith(response) {
      try {
        // console.log("login with", response.code)

        // `this` is the store instance
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-google-token", response.access_token);

        // var raw = JSON.stringify(res);
        // var raw = JSON.stringify({
        //   code: response.code
        // });
        var raw = JSON.stringify({
          accessToken: response.access_token
        });
        // const formdata = new FormData();
        // formdata.append("access_token", res.access_token);
        // formdata.append("authuser", res.authuser);
        // formdata.append("expires_in", res.expires_in);
        // formdata.append("prompt", res.prompt);
        // formdata.append("scope", res.scope);
        // formdata.append("token_type", res.token_type);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        // const requestOptions = {
        //   method: "POST",
        //   body: formdata,
        //   redirect: "follow"
        // };

        // const requestOptions = {
        //   method: "GET",
        //   // redirect: "follow"
        // };
        try {
          // var res = await $fetch("/api/auth/googleCallback", requestOptions).then(res => {

          //   // console.log("redirected", res)
          //   // if (res.status == 302) {
          //   //   window.location.href = res.url;
          //   // }
          // })


          let result = await fetch("/api/auth/googleCallback", requestOptions).then(res => res.json());
          if (result.status == 302) {
            window.location.href = result.url
          }
          self.isUnauthorized = false;

        } catch (error) {
          // console.dir(error)
          self.isUnauthorized = true;

        }
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
        // console.log("error", /\W*(\d+)/.exec(error))
        if (/\W*(\d+)/.exec(error))
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
        try {
          var res = await $fetch("/api/auth/login", requestOptions).then(res => {

            console.log("redirected", res)
            if (res.status == 302) {
              window.location.href = res.url;
            }
          })
          self.isUnauthorized = false;
          console.log("res", res)

        } catch (error) {
          // console.dir(error)
          self.isUnauthorized = true;

        }
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
        // console.log("error", /\W*(\d+)/.exec(error))
        if (/\W*(\d+)/.exec(error))
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
    async checkin(accessToken) {
      var self = this;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      // console.log("accessToken", accessToken)
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      try {

        var res = await $fetch("/api/auth/sign", requestOptions).then(res => {
          // console.log("redirected", res)
          if (res.status == 302) {
            window.location.href = res.url;
          }
          else {
            self.isChecked = true
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
})