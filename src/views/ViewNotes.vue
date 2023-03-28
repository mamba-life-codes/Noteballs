<!-- @format -->

<template>
	<div class="notes">
		<AddEditNote
			v-model="newNote"
			@add-note="addNote"
			ref="newNoteEl"
			placeholder="add a new note"
		>
			<template #buttons>
				<button
					@click="addNote"
					:disabled="!newNote"
					class="button is-link has-background-success"
				>
					add new note
				</button>
			</template>
		</AddEditNote>
		<Note v-for="note in store.notes" :key="note.id" :note="note" />
	</div>
</template>

<script setup>
	// imports
	import { ref, watch } from 'vue';
	import Note from '@/components/Notes/Note.vue';
	import AddEditNote from '@/components/Notes/AddEditNote.vue';
	import { useStoreNotes } from '@/stores/storeNotes.js';
	import { useWatchCharacters } from '@/composables/useWatchCharacters.js';

	// storeNotes
	const store = useStoreNotes();

	// notes
	const newNote = ref('');
	const newNoteEl = ref(null);

	const addNote = () => {
		store.addNote(newNote.value);
		newNote.value = '';
		newNoteEl.value.focusTextarea();
	};

	// maximum Characters
	useWatchCharacters(newNote);
</script>
