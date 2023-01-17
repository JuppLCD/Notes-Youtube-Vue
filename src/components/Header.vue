<script setup lang="ts">
import { computed, ref } from 'vue';

import { useStoreVuex } from '@/store';

import Button from './Button.vue';

import { APP_NAME } from '@/config';

const isMenuOpen = ref(false);

const store = useStoreVuex();
const isAuth = computed(() => store.state.user.isAuth);

const logout = () => {
	store.dispatch('user/logout');
};

const classLinksBase = {
	normal: 'font-medium tracking-wide transition-colors duration-200',
	button:
		'inline-flex items-center justify-center px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-gray-700 h-12',
};

const classLinks = {
	mobile: {
		nomrmal: `${classLinksBase.normal} text-gray-700  hover:text-deep-purple-accent-400`,
		button: `${classLinksBase.button} w-full`,
	},
	desktop: {
		nomrmal: `${classLinksBase.normal} text-gray-100  hover:text-teal-accent-400`,
		button: classLinksBase.button,
	},
};
</script>

<template>
	<header class="bg-gray-900">
		<div class="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
			<div class="relative flex items-center justify-between">
				<RouterLink :to="{ name: 'home' }" :aria-label="APP_NAME" :title="APP_NAME" class="inline-flex items-center">
					<span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">{{ APP_NAME }}</span>
				</RouterLink>
				<ul class="items-center hidden space-x-8 lg:flex">
					<li>
						<RouterLink :to="{ name: 'home' }" aria-label="Home" title="Home" :class="classLinks.desktop.nomrmal">
							Home
						</RouterLink>
					</li>

					<template v-if="!isAuth">
						<li>
							<RouterLink :to="{ name: 'login' }" aria-label="Log in" title="Log in" :class="classLinks.desktop.button">
								Log in
							</RouterLink>
						</li>
						<li>
							<RouterLink
								:to="{ name: 'signup' }"
								aria-label="Sign up"
								title="Sign up"
								:class="classLinks.desktop.button"
							>
								Sign up
							</RouterLink>
						</li>
					</template>
					<template v-else>
						<li>
							<RouterLink
								:to="{ name: 'YTVideoNotes' }"
								aria-label="New Notes of YT video"
								title="New Notes of YT video"
								:class="classLinks.desktop.nomrmal"
							>
								YT video notes
							</RouterLink>
						</li>

						<li>
							<RouterLink
								:to="{ name: 'myListsOfNotes' }"
								aria-label="My Lists"
								title="My Lists"
								:class="classLinks.desktop.nomrmal"
							>
								My Lists
							</RouterLink>
						</li>
						<li>
							<Button
								aria-label="Logout"
								title="Logout"
								:class="classLinks.desktop.button"
								color="red"
								@click="logout()"
							>
								Logout
							</Button>
						</li>
					</template>
				</ul>
				<div class="lg:hidden">
					<button
						aria-label="Open Menu"
						title="Open Menu"
						class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
						@click="isMenuOpen = true"
					>
						<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
							<path
								fill="currentColor"
								d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
							></path>
							<path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
							<path
								fill="currentColor"
								d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
							></path>
						</svg>
					</button>
					<div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
						<div class="p-5 bg-white border rounded shadow-sm">
							<div class="flex items-center justify-between mb-4">
								<div>
									<RouterLink
										:to="{ name: 'home' }"
										:aria-label="APP_NAME"
										:title="APP_NAME"
										class="inline-flex items-center"
									>
										<svg
											class="w-8 text-deep-purple-accent-400"
											viewBox="0 0 24 24"
											stroke-linejoin="round"
											stroke-width="2"
											stroke-linecap="round"
											stroke-miterlimit="10"
											stroke="currentColor"
											fill="none"
										>
											<rect x="3" y="1" width="7" height="12"></rect>
											<rect x="3" y="17" width="7" height="6"></rect>
											<rect x="14" y="1" width="7" height="6"></rect>
											<rect x="14" y="11" width="7" height="12"></rect>
										</svg>
										<span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">{{ APP_NAME }}</span>
									</RouterLink>
								</div>
								<div>
									<button
										aria-label="Close Menu"
										title="Close Menu"
										class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
										@click="isMenuOpen = false"
									>
										<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
											<path
												fill="currentColor"
												d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
											></path>
										</svg>
									</button>
								</div>
							</div>
							<nav>
								<ul class="space-y-4">
									<li>
										<RouterLink
											:to="{ name: 'home' }"
											aria-label="Home"
											title="Home"
											:class="classLinks.mobile.nomrmal"
										>
											Home
										</RouterLink>
									</li>

									<template v-if="!isAuth">
										<li>
											<RouterLink
												:to="{ name: 'login' }"
												aria-label="Log in"
												title="Log in"
												:class="classLinks.mobile.button"
											>
												Log in
											</RouterLink>
										</li>
										<li>
											<RouterLink
												:to="{ name: 'signup' }"
												aria-label="Sign up"
												title="Sign up"
												:class="classLinks.mobile.button"
											>
												Sign up
											</RouterLink>
										</li>
									</template>
									<template v-else>
										<li>
											<RouterLink
												:to="{ name: 'YTVideoNotes' }"
												aria-label="New Notes of YT video"
												title="New Notes of YT video"
												:class="classLinks.mobile.nomrmal"
											>
												YT video notes
											</RouterLink>
										</li>
										<li>
											<RouterLink
												:to="{ name: 'myListsOfNotes' }"
												aria-label="My Lists"
												title="My Lists"
												:class="classLinks.mobile.nomrmal"
											>
												My Lists
											</RouterLink>
										</li>
										<li>
											<Button
												aria-label="Logout"
												title="Logout"
												:class="classLinks.mobile.button"
												color="red"
												@click="logout()"
											>
												Logout
											</Button>
										</li>
									</template>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped></style>
