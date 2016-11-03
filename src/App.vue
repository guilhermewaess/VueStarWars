<template>
	<content-menu></content-menu>
	<div class="ui container pushable">
		<router-view>
		</router-view>
	</div>
</template>

<script>
  import store from './store/Store';
  import ContentMenu from './menus/ContentMenu';
  import './assets/semantic/semantic.min.css';
  import './assets/semantic/semantic.min.js';
  
  export default {
    store,
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