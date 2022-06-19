<template>
    <div class="containerError">
        ERROR 404:
        The page you have been looking for does not exist.
        <button type="button1" class="button mt-5" @click="goHome()"> Go back </button>
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
