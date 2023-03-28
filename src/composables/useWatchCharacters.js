import { watch } from "vue";

export function useWatchCharacters(newNote, maxChars=100){
  watch(newNote, (newValue) => {
		if (newValue.length >= maxChars) {
			alert(`maximum length is ${maxChars} characters!`);
		}
	});
}