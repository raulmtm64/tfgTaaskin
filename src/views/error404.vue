<template>
    <div class="containerError">
        ERROR 404:
        La página que ests buscando no existe.
        <button type="button1" class="button mt-5" @click="goHome()"> Volver </button>
    </div>
</template>

<script>
import router from '@/router'

export default {
    name: 'error404View',
    methods: {
        goHome (){
            router.push('/');
        }
    }
}
</script>

<style scoped>
@import url('../assets/css/general.css');
@import url('../assets/css/error.css');

</style>
