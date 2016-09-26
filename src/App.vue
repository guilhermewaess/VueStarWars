<template>
  <content-menu></content-menu>
  <div class="ui container">
    <router-view class="view pushable" keep-alive transition transition-mode="out-in">
    </router-view>
  </div>
</template>

<script>
  import ContentMenu from './menus/ContentMenu';
  
  export default {
    components: {
      ContentMenu,
    },
  };
</script>

<style>
  html {
    height: 100%;
  }
  
  /*body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }*/
</style>