<template>
	<div class="ui three cards">
		<div class="card" v-for="movie in movies" @click="goToMovieDetail(movie)">
			<img class="movie-image" :src="getMovieImage(movie)">
			<div class="ui bottom attached button">
				<i class="add icon"></i> {{movie.title}}
			</div>
		</div>
	</div>
</template>

<script>
    import { movies } from './store/getters';
    import { updateFilms, setCurrentMovie } from './store/actions';

    export default {
      vuex: {
        getters: {
          movies,
        },
        actions: {
          updateFilms,
          setCurrentMovie
        },
      },
      created() {
        this.updateFilms();
      },
      methods: {
        goToMovieDetail(movie){
          this.setCurrentMovie(movie);
          this.$router.go({name: 'movie'});
        },
        getMovieImage(movie) {
          switch (movie.episode_id) {
            case 1:
              return '/static/images/PhantomMenace.jpg';
            case 2:
              return '/static/images/AttackOfTheClones.jpg';
            case 3:
              return '/static/images/RevengeOfTheSith.jpg';
            case 4:
              return '/static/images/NewHope.jpg';
            case 5:
              return '/static/images/EmpireStrikesBack.jpeg';
            case 6:
              return '/static/images/ReturnOfTheJedi.jpg';
            case 7:
              return '/static/images/TheForceAwakens.jpg';
            default:
              return '/static/images/NoImageAvailable.png';
          }
        },
      },
    };
</script>

<style>
	.movie-image {
		height: 15em!important;
	}
</style>