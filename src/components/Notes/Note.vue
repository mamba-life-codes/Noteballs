<!-- @format -->

<template>
	<div class="card mb-4 px-4 pt-4">
		<div class="card-note">
			<div class="note">
				{{ note.content }}
			</div>
			<div class="has-text-right has-text-grey-light mt-2">
				<small>{{ characterLength }}</small>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink :to="`/editNotes/${note.id}`" class="card-footer-item"
				>Edit
			</RouterLink>
			<a @click.prevent="modalData.delete = true" class="card-footer-item">Delete</a>
		</footer>
		<modal-note :noteId="note.id" v-model="modalData.delete" v-if="modalData.delete">
		</modal-note>
	</div>
</template>

<script setup>
	// imports
	import { computed, reactive } from 'vue';
	import { useStoreNotes } from '@/stores/storeNotes.js';
	import ModalNote from '@/components/Notes/ModalNote.vue';

	// storeNotes
	const store = useStoreNotes();
	// props
	const props = defineProps({
		note: Object,
		required: true,
	});

	// character length
	const characterLength = computed(() => {
		let length = props.note.content.length;
		return length > 1 ? `${length} characters` : `${length} character`;
	});

	// modal related
	const modalData = reactive({
		delete: false,
	});

	// delete note
	const deleteNote = () => {
		modalData.delete = true;
		store.deleteNote(note.id);
	};
</script>
