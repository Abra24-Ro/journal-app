import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,

    // active: {
    //    id:"abcvd" ,
    //    title:"",
    //    body:"",
    //    date:1234,
    //    imageUrls:[],

    // },
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push({
        ...payload,
        imageUrls: Array.isArray(payload.imageUrls) ? payload.imageUrls : [],
      });
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      state.isSaving = false;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
      state.messageSaved = `"${action.payload.title} - " guardada correctamente.`;
    },
    setFotosToActiveNote: (state, action) => {
      if (!Array.isArray(state.active.imageUrls)) {
        state.active.imageUrls = [];
      }

      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },

    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.active = null;
      state.isSaving = false;
      state.messageSaved = "Nota eliminada correctamente.";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  savingNewNote,
  setFotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
