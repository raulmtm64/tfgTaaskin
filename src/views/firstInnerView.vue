<template>
  <div class="container">
    <bars/>
    <div class="innerView">
      <router-view/>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import bars from "../components/bars";

  export default {
    name: 'WorkspaceView',
    components: {
      bars
    },
    mounted () {
      router.push('/'+this.$store.getters.idUser+'/home').catch(()=>{});
    }
  }
</script>

<style scoped>
  @import url('../assets/css/firstView.css');

</style>
