<template>
  <div class="container">
    <bars/>
    <div class="innerView">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import bars from "../components/bars";

  export default {
    name: 'WorkspaceView',
    components: {
      bars
    }
  }
</script>

<style scoped>
  @import url('../assets/css/firstView.css');

</style>
