<template>
    <RouterLink to="/">HOME</RouterLink>
    <form  @submit.prevent="submitForm">
        <div>
            <label for="name" >Email</label>
            <input type="email" id="name" v-model.trim="email">
        </div>
        <div>
            <label for="ps1">password</label>
            <input type="password" id="ps1" v-model.trim="password">
        </div>
         <input type="submit" value="로그인">
    </form>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async submitForm() {
            const actionPayload = {
                email: this.email,
                password: this.password,
            };
                console.log('store',actionPayload)
                await this.$store.dispatch('login', actionPayload);
                this.$router.push('/');
            },
    }
}
</script>

<style scoped>

</style>