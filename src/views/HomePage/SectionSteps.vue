<script setup lang="ts">
import StepItem from './StepItem.vue';

const stepsData = [
	'Start by registering on our page to start enjoying it.',
	'Navigate to the "YT video notes" page, where you can enjoy the videos and take notes.',
	'Copy the link of the Youtube video you want to watch, paste it in the input and press enter. In this way you will already have the video ready to see.',
	'You will notice that below the video is a navigation tab which will allow you to view your "Notes" and "Create Note".',
	'Press the "Create Note" tab and start to put down the ideas that you can get from said video. You will notice that you can select which note list to save it to and that there is an option to create your own note lists.',
	'Save your best ideas',
];
</script>

<template>
	<section class="text-white body-font px-2 p-24">
		<h2 class="title-font sm:text-4xl text-3xl mb-12 font-medium text-center">
			Start using this website with a few simple steps
		</h2>
		<div class="flex flex-wrap">
			<div class="flex flex-wrap w-full">
				<div class="xl:w-2/5 lg:w-1/2 md:pr-10 md:py-6">
					<template v-for="(item, index) in stepsData">
						<StepItem :text="item" :step="index + 1" :end="stepsData.length - 1 === index" />
					</template>
				</div>
				<img
					class="xl:w-3/5 lg:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
					:src="'/imgs/YT-Notes.jpg'"
					alt="step"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
