<template>
	<div class="border-b border-gray-200 dark:border-gray-700">
		<ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
			<li class="mr-2">
				<RouterLink class="tab" :to="{ name: 'home' }"> Notes </RouterLink>
			</li>
			<li class="mr-2">
				<RouterLink class="tab" :to="{ name: 'createNote' }"> Create Note </RouterLink>
			</li>

			<!-- <li class="mr-2">
				<a href="#" class="tab"> Create List </a>
			</li> -->
		</ul>
	</div>
</template>

<style scoped>
.tab {
	@apply inline-flex p-4 border-b-2 rounded-t-lg border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300;
}
.tab.router-link-exact-active {
	@apply text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500 hover:border-blue-500 dark:hover:text-blue-600;
}
</style>
