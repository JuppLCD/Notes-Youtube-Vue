<script setup lang="ts">
import { ref } from 'vue';
import Container from './components/Container.vue';
import Button from './components/Button.vue';

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

const notes = ref([
	{
		id: 1,
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
	{
		id: 2,
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
	{
		id: 3,
		title: 'Title',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
]);

const deleteNote = (id: number) => {
	notes.value = notes.value.filter((note) => note.id !== id);
};

const formInputs = ref({
	title: '',
	text: '',
});

const resetForm = () => {
	formInputs.value = {
		title: '',
		text: '',
	};
};

const createNote = () => {
	const newNote = { ...formInputs.value, id: Date.now() };
	notes.value.push(newNote);
	resetForm();
};
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl">YOUTUBE NOTES</h1>
			<label>
				Put a youtube video url here:
				<input type="text" v-model="urlYoutube" @keyup.enter="generateURLYoutubeEmbed" placeholder="URL" />
			</label>

			<!-- <iframe
			width="560"
			height="315"
			:src="urlYoutubeEmbed"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe> -->
			<div class="video"></div>

			<br />
			<hr />
			<br />

			<article>
				<form @submit.prevent="createNote">
					<h3>Create new note</h3>
					<label class="block my-2">
						Title
						<input type="text" v-model="formInputs.title" />
					</label>
					<label class="block my-2">
						Text
						<textarea cols="30" rows="5" v-model="formInputs.text" style="resize: none"></textarea>
					</label>
					<Button type="submit" class="mr-2">Create</Button>
					<Button type="reset" @click="resetForm">Reset</Button>
				</form>
			</article>

			<br />
			<hr />
			<br />

			<section>
				<h2>Notas</h2>
				<ul>
					<li v-for="note in notes" :key="note.id">
						<h3>{{ note.title }} - {{ note.id }}</h3>
						<p>{{ note.text }}</p>
						<Button class="mr-2"> Edit </Button>
						<Button @click="deleteNote(note.id)"> Delete </Button>
					</li>
				</ul>
			</section>
		</Container>
	</main>
</template>

<style scoped>
.video {
	width: 560px;
	height: 315px;
	background-color: gray;

	margin: 20px 0;
}
</style>
