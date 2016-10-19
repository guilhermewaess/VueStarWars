<template>
	<div class="ui inverted blurring segment">
		<div class="ui five cards">
			<div :class="{ 'ui active dimmer': loadingPlanets}">
				<div class="ui text loader">Loading Planets</div>
			</div>
			<div class="card" v-for="planet in planets" @click="goToPlanetDetail(PLANET)">
				<img class="planet-image" :src="getPlanetImage(planet)">
				<div class="ui bottom attached button">
					<i class="add icon"></i> {{planet.name}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import { planets, loadingPlanets } from './../store/getters';
  import { updatePlanets, setCurrentPlanet } from './../store/Actions';

  export default {
    vuex: {
      getters: {
        planets,
        loadingPlanets,
      },
      actions: {
        updatePlanets,
        setCurrentPlanet,
      },
    },
    created() {
      this.updatePlanets();
    },
    methods: {
      getPlanetImage(movie) {
          switch (movie.planet_id) {
            case 1:
              return '../../static/images/PhantomMenace.jpg';
            case 2:
              return '../../static/images/AttackOfTheClones.jpg';
            case 3:
              return '../../static/images/RevengeOfTheSith.jpg';
            case 4:
              return '../../static/images/NewHope.jpg';
            case 5:
              return '../../static/images/EmpireStrikesBack.jpeg';
            case 6:
              return '../../static/images/ReturnOfTheJedi.jpg';
            case 7:
              return '../../static/images/TheForceAwakens.jpg';
            default:
              return '../../static/images/NoImageAvailable.png';
          }
        },
    }
  }
</script>

<style>
	.planet-image {
		height: 15em!important;
	}
</style>