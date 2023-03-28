<!-- @format -->

<template>
	<div class="modal is-active">
		<div class="modal-background"></div>
		<div ref="modalRef" class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Delete Note?</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				Are you sure you want to delete this note?
			</section>
			<footer class="modal-card-foot is-justify-content-flex-end">
				<button @click="closeModal" class="button">Cancel</button>
				<button @click="store.deleteNote(noteId)" class="button is-danger">
					Delete
				</button>
			</footer>
		</div>
	</div>
</template>

<script setup>
// imports
import { ref, onMounted, onUnmounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes.js';

// storeNotes
const store = useStoreNotes();

// props
const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	noteId: {
		type: String,
		required: true,
	},
});

// emit
const emit = defineEmits(['update:modelValue']);

// close modal
const modalRef = ref(null);

const closeModal = () => {
	emit('update:modelValue', false);
};

// click outside modal
onClickOutside(modalRef, closeModal);

const handlekeyboard = (e) => {
	if (e.key === 'Escape') {
		closeModal();
	}
};

// closing using keyboard
onMounted(() => {
	document.addEventListener('keyup', handlekeyboard);
});
onUnmounted(() => {
	document.removeEventListener('keyup', handlekeyboard);
});
</script>
