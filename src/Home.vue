<template>
    <div>
        <ul>
            <li v-for="movie in movies">
                {{movie.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import { movies } from './store/getters';

    export default {
      vuex: {
        getters: {
          movies,
        },
      },
    };
</script>