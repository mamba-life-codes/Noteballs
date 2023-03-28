<!-- @format -->

<template>
	<nav class="navbar is-success" aria-label="main navigation" role="navigation">
		<div class="container is-max-desktop px-2">
			<div class="navbar-brand">
				<div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

				<a
					@click.prevent="isMobile = !isMobile"
					role="button"
					:class="{ 'is-active': isMobile }"
					class="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					ref="navbarMenuRef"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div
				id="navbarBasicExample"
				:class="{ 'is-active': isMobile }"
				class="navbar-menu"
			>
				<div class="navbar-end">
					<div class="navbar-item">
						<RouterLink
							@click="isMobile = false"
							class="navbar-item"
							to="/"
							active-class="is-active"
						>
							Notes
						</RouterLink>
						<RouterLink
							@click="isMobile = false"
							class="navbar-item"
							to="/stats"
							active-class="is-active"
						>
							Stats
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script setup>
	// imports
	import { ref } from 'vue';
	import { onClickOutside } from '@vueuse/core';

	// mobile navigation
	const isMobile = ref(false);
	const navbarMenuRef = ref(null);

	// close when outside of the nave is clicked
	onClickOutside(navbarMenuRef, () => {
		isMobile.value = false;
	});
</script>
