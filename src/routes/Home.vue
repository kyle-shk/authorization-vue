<template>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/signup">Signup</RouterLink>
    <RouterLink to="/Ex">Ex</RouterLink>
    <button @click="logout">Logout</button>
    <h1>Home</h1>
    <h1>{{users.email}}</h1>
    <h1>{{users.displayName}}</h1>

</template>

<script>
export default {
    data(){
        return{
            token:null
        }
    },
    computed:{
        users(){
            return this.$store.getters.userId
        }

    },
    methods:{
        async logout() {
            await this.$store.dispatch('logout',this.token)
            await this.$store.commit('setUser',{
                user:{},
                token:window.localStorage.getItem('token') // ??
            })
            this.$router.push('/login')
        }
    },
    created(){
        this.token = this.$store.getters.token
    }
}
</script>