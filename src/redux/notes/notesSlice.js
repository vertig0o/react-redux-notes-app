import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: JSON.parse(localStorage.getItem('notes')) || [],
    error: null,
    filtered: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items = [...state.items, action.payload];
      localStorage.setItem('notes', JSON.stringify(state.items));
    },
    searchNote: (state, action) => {
      const value = action.payload;
      const filteredNotes = state.items.filter((note) => note.note.toLowerCase().includes(value));
      state.filtered = filteredNotes;
    },
    removeNote: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((note) => note.id !== id);
      localStorage.setItem('notes', JSON.stringify(state.items));
    }
  },
});

export const { addNote, searchNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
