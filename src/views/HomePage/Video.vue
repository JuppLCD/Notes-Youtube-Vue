<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const urlYoutube = ref('');
// Example URL => 'https://www.youtube.com/embed/njoOd9iV2Qo'

const store = useStoreVuex();

const urlYoutubeEmbed = computed(() => {
	const { idYoutubeVideo } = store.state.videoToAnalyze;
	return idYoutubeVideo ? 'https://www.youtube.com/embed/' + idYoutubeVideo : '';
});

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

	store.commit('videoToAnalyze/setIdYoutubeVideo', idVideo);
};
</script>

<template>
	<label>
		Put a youtube video url here:
		<input type="text" v-model="urlYoutube" @keyup.enter="generateURLYoutubeEmbed" placeholder="URL" />
	</label>

	<iframe
		v-if="urlYoutubeEmbed"
		width="560"
		height="315"
		:src="urlYoutubeEmbed"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
	<div v-else class="video"></div>
</template>

<style scoped>
.video {
	width: 560px;
	height: 315px;
	background-color: gray;

	margin: 20px 0;
}
</style>
