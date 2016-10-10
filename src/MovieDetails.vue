<template>
  <span>{{movie.title}}</span>
</template>

<script>
  import { movie } from './store/getters';

  export default {

    vuex: {
        getters: {
          movie,
        },
      },
  }
</script>