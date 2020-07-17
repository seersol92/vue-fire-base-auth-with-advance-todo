<template>
    <div>
        {{getUser}}
        <button @click="signOut"> LogOut</button>
    </div>
</template>

<script>
import firebase from "firebase";
import {mapGetters, mapActions } from "vuex";
export default {

    computed: {
        ...mapGetters(['getUser'])
    },
    methods: {
        signOut () {
            firebase
            .auth()
            .signOut()
            .then(() => { 
                this.$router.replace({name: "login"});
                this.$store.dispatch('removeUser')
        });
        },
    }
}
</script>