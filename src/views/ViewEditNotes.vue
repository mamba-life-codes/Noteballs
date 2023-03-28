<!-- @format -->

<template>
	<AddEditNote
		v-model="editContent"
		@edit-note="updateNote"
		bgColor="link"
		label="Edit Note"
		ref="newNoteEl"
		placeholder="edit note"
	>
		<template #buttons>
			<button @click="$router.back()" class="button is-link is-light mr-2">
				Cancel
			</button>
			<button
				@click="updateNote"
				:disabled="!editContent"
				class="button is-link has-background-link"
			>
				Update Note
			</button>
		</template>
	</AddEditNote>
</template>

<script setup>
	// imports
	import { ref, onMounted } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import AddEditNote from '@/components/Notes/AddEditNote.vue';
	import { useStoreNotes } from '@/stores/storeNotes.js';

	//editcontent
	const editContent = ref('');

	// get note to be edited
	const route = useRoute();
	const router = useRouter();
	const store = useStoreNotes();

	editContent.value = store.getNoteContent(route.params.id);

	// update Note
	const updateNote = () => {
		store.updateNote(route.params.id, editContent.value);
		router.push('/');
	};
</script>
