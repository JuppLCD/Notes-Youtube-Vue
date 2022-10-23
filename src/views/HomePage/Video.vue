<script setup lang="ts">
import { ref } from 'vue';

const urlYoutube = ref('');
const urlYoutubeEmbed = ref('https://www.youtube.com/embed/njoOd9iV2Qo');

const generateURLYoutubeEmbed = () => {
	if (!urlYoutube.value.includes('youtube.com/watch?v=')) {
		return alert('URL DE YOUTUBE INVALIDA');
	}

	let idVideo = urlYoutube.value.split('watch?v=')[1];

	if (idVideo.includes('&')) {
		idVideo = idVideo.split('&')[0];
	} else if (idVideo.includes('?')) {
		idVideo = idVideo.split('?')[0];
	}

	urlYoutubeEmbed.value = `https://www.youtube.com/embed/${idVideo}`;
};
</script>

<template>
	<label>
		Put a youtube video url here:
		<input type="text" v-model="urlYoutube" @keyup.enter="generateURLYoutubeEmbed" placeholder="URL" />
	</label>

	<iframe
		width="560"
		height="315"
		:src="urlYoutubeEmbed"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
	<!-- <div class="video"></div> -->
</template>

<style scoped>
.video {
	width: 560px;
	height: 315px;
	background-color: gray;

	margin: 20px 0;
}
</style>
