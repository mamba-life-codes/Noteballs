// stores/counter.js
import { defineStore, acceptHMRUpdate  } from 'pinia'

export const useStoreNotes = defineStore('storenotes', {
  state: () => {
    return { 
      notes: [
        {
          id: 'id1',
          content:
          'ipsum minus magnam veniam velit animi accusantium ea,  sequi?',
        },
        {
          id: 'id2',
          content: 'This is a shorter note! Woo!',
        }] 
    }
  },
  actions: {
    addNote(newNote){
      let currentDate = new Date().getTime(),
			id = currentDate.toString();

		let note = {
			id: id,
			content: newNote,
		};

		this.notes.unshift(note);
    },
    updateNote(id,content){
      let index = this.notes.findIndex(note => note.id === id)
      this.notes[index].content = content;
    },
    deleteNote(id){
      this.notes = this.notes.filter((note) => note.id !== id);
    }
  },
  getters:{
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter(note => note.id === id )[0].content
      }
    },
    getTotalNoteCount(state) {
      return state.notes.length
    },
    getTotalCharacterCount(state) {
      let sum = 0;
      state.notes.forEach(element => {
       sum += element.content.length
      });
      return sum
    }
  }
})



if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot))
}

