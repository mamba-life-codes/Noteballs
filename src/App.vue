<!-- @format -->

<template>
	<NavBar />
	<div class="container is-max-desktop px-2 py-4">
		<RouterView></RouterView>
	</div>
</template>

<script setup>
	import NavBar from '@/components/layouts/NavBar.vue';
	/* 
	imports
*/
</script>

<style>
	@import 'bulma\css\bulma.min.css';
</style>
