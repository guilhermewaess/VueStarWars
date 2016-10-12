<template>
	<h1 class="ui center aligned header">
		<div class="content">{{movie.title}}</div>
		<div class="sub header">Episode {{movie.episode_id}}</div>
	</h1>

	<div class="ui raised segments">
		<div class="ui inline segment">
			<h3 class="ui center aligned header">
				Opening Crawl
			</h3>
			<p>{{movie.opening_crawl}}</p>
		</div>
		<div class="ui center aligned segment">
			<div class="ui center aligned grid">
				<div class="five wide column">
					<div class="ui black label">
						Release Date
						<div class="detail">{{movie.release_date}}</div>
					</div>
				</div>
				<div class="five wide column">
					<div class="ui black label">
						Producer
						<div class="detail">{{movie.producer}}</div>
					</div>
				</div>
				<div class="five wide column">
					<div class="ui black label">
						Director
						<div class="detail">{{movie.director}}</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ui segment">
			<div id="movie-accordion" class="ui fluid accordion">
				<div class="title">
					<i class="dropdown icon"></i> Planets
				</div>
				<div class="content">
					<p>Teste</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import { movie } from './store/getters';

  export default {
    vuex: {
      getters: {
        movie,
      },
    },
    ready() {
      $('#movie-accordion').accordion();
    },
  }
</script>

<style>
	.episode-id {
		float: right;
	}
</style>