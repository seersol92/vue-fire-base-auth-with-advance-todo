<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          {{getUser}}
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="password"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                {{isLoading}}
                  <button 
                  type="submit" 
                  :disabled="isLoading"
                  class="btn btn-primary btn-block"
                  > 
                  <span v-if="isLoading">Loading....</span>
                  <span v-else>Login</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";
import {mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
        email: "",
        password: "",
        error: "",
        isLoading: false
    };
  },
  computed:{ 
    ...mapGetters(["getUser"])
  },

  methods: {
    submit() {
      this.isLoading = true;
       firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data.user)
            this.$store.dispatch("setUser", data.user); 
            this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
            this.error = err.message;
        }).finally( 
          () => this.isLoading = false);
    }
  }
};
</script>