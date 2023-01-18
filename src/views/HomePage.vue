<script setup lang="ts">
import Container from '@/components/Container.vue';
import { APP_NAME } from '@/config';
</script>

<template>
	<main>
		<Container>
			<section class="text-white body-font">
				<div class="flex p-2 md:flex-row flex-col items-center">
					<div
						class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center"
					>
						<h1 class="title-font xl:text-5xl sm:text-4xl text-3xl mb-4 font-medium">
							Enjoy a good video <br class="hidden lg:inline-block" />and save your best ideas
						</h1>
						<p class="mb-8 leading-relaxed">
							{{
								`${APP_NAME} is an app that allows you to watch a YouTube video without distractions, with the aim that you can take all the ideas and place them in notes, organizing them in lists of notes.`
							}}
							<br />
							<span class="font-bold"
								>Avoid the clutter of paper notes and organize your thoughts about what you see or hear.</span
							>
						</p>
					</div>
					<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							class="object-cover object-center rounded"
							alt="hero"
							src="imgs/alexander-grey-tn57JI3CewI-unsplash.jpg"
						/>
					</div>
				</div>
			</section>
		</Container>
	</main>
</template>

<style scoped></style>
