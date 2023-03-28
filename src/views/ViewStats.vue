<!-- @format -->

<template>
	<div class="stats">
		<table class="table is-fullwidth">
			<thead>
				<tr>
					<th>Stats</th>
					<th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Number of Notes</td>
					<td>{{ store.getTotalNoteCount }}</td>
				</tr>
				<tr>
					<td>Number of toral Characters</td>
					<td>{{ store.getTotalCharacterCount }}</td>
				</tr>
			</tbody>
		</table>
		<input
			v-model="stateValue"
			class="input"
			v-autofocus
			type="text"
			name="text"
			id="text"
		/>
	</div>
</template>

<script setup>
	// imports
	import { ref } from 'vue';
	import { useStoreNotes } from '@/stores/storeNotes.js';
	import { vAutofocus } from '@/directives/vAutofocus';
	import { useWatchCharacters } from '@/composables/useWatchCharacters.js';

	const stateValue = ref('');
	const store = useStoreNotes();
	useWatchCharacters(stateValue, 25);
</script>
