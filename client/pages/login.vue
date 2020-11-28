<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <nuxt-link to="/"><img src="/img/logo-black.png" alt="" /></nuxt-link>
          </div>

          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Sign In</h1>
                
                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name2" class="a-form-label"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="ap_customer_name2"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                     v-model="email"
                  />
                </div>

                <!-- Password -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name3" class="a-form-label"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="ap_customer_name3"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-contact-verification-request-info"
                     v-model="password"
                  />

                  <div class="a-alert-container">
                    <div class="a-alert-content">
                      Senha deve ter o mínimo de 6 caracteres
                    </div>
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onLogin"
                        >Login</span>
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                      <b>
                          By Creating an account, you agree to Amazon's
                          <a href="#">Conditions of Use</a> and
                          <a href="#">Privacy Notice</a>
                      </b>

                  </div>
                </div>
                <hr>
                <div class="a-row">
                    <b>
                        Don't have an account?
                        <nuxt-link to="/signup" class="a-link-emphasis">Sign up</nuxt-link>
                    </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    layout: "none",
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async onLogin(){
            try {  
                    let response =  this.$auth.loginWith("local",{
                         data: {
                             email: this.email,
                             password: this.password
                         }
                     });
                     if(response.success){
                        this.$router.push("/");
                     }
                    
                
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>

<style></style>
