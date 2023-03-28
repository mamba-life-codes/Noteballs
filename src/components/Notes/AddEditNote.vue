<!-- @format -->

<template>
	<div class="card p-4 mb-5" :class="`has-background-${bgColor}-dark`">
		<label v-if="label" class="label has-text-white">
			{{ label }}
		</label>
		<div class="field">
			<div class="control">
				<textarea
					:value.trim="modelValue"
					@input="$emit('update:modelValue', $event.target.value)"
					ref="newNoteEl"
					class="textarea"
					:placeholder="placeholder"
					maxlength="100"
					v-autofocus
				></textarea>
			</div>
		</div>

		<div class="field is-grouped is-grouped-right">
			<div class="control">
				<slot name="buttons" />
			</div>
		</div>
	</div>
</template>

<script setup>
	// imports
	import { ref, onMounted } from 'vue';
	import { vAutofocus } from '@/directives/vAutofocus';
	import { useRoute } from 'vue-router';

	// route
	const route = useRoute();

	// props
	const props = defineProps({
		modelValue: {
			type: String,
			required: true,
		},
		bgColor: {
			type: String,
			default: 'success',
		},
		placeholder: {
			type: String,
			default: 'Type something...',
		},
		label: {
			type: String,
		},
	});

	// emits
	const emit = defineEmits(['update:modelValue', 'addNote', 'editNote']);

	// variables
	const newNoteEl = ref(null);

	// focus area
	const focusTextarea = () => {
		newNoteEl.value.focus();
	};

	defineExpose({ focusTextarea });

	const saveNote = (e) => {
		if (e.key === 'Enter') {
			if (route.name === 'notes') {
				emit('addNote');
			} else {
				emit('editNote');
			}
		}
	};

	// save note on enter
	onMounted(() => {
		document.addEventListener('keyup', saveNote);
	});
	
</script>
