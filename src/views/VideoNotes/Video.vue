<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

import { useNotification } from '@kyvg/vue3-notification';

import MyInput from '@/components/MyInput.vue';

const { notify } = useNotification();

const urlYoutube = ref('https://www.youtube.com/watch?v=N9VE1NEavjc');

const store = useStoreVuex();

const urlYoutubeEmbed = computed(() => {
	const { idYoutubeVideo } = store.state.videoToAnalyze;
	return idYoutubeVideo ? 'https://www.youtube.com/embed/' + idYoutubeVideo : '';
});

const generateURLYoutubeEmbed = () => {
	if (!urlYoutube.value.includes('youtube.com/watch?v=')) {
		notify({
			title: 'Error',
			text: `Invalid youtube url ${urlYoutube.value}`,
			type: 'error',
		});
		return;
	}
	let idVideo = urlYoutube.value.split('watch?v=')[1];
	if (idVideo.includes('&')) {
		idVideo = idVideo.split('&')[0];
	} else if (idVideo.includes('?')) {
		idVideo = idVideo.split('?')[0];
	}

	store.dispatch('videoToAnalyze/setIdYoutubeVideo', { idVideo });
};
</script>

<template>
	<MyInput
		type="text"
		v-model="urlYoutube"
		@keyup.enter="generateURLYoutubeEmbed"
		placeholder="URL of YouTube Video..."
	>
		Put a youtube video url here:
	</MyInput>

	<iframe
		v-if="urlYoutubeEmbed"
		class="video"
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
	height: 320px;

	width: 100%;
	max-width: 560px;

	background-color: gray;

	margin: 20px auto;
}
</style>
