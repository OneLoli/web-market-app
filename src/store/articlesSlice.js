import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    lista: [],
    listaCompletada: [],
  },
  reducers: {
    articleAdded(state, action) {
      return state.push({
        id: action.payload.id,
        text: action.payload.text,
      });
    },
    articleDecrease(state, action) {
      const item = state["lista"].find((item) => item.id === action.payload.id);
      item.units--;
      return state;
    },
    articleToggle(state, action) {
      const todo = state["lista"].find((todo) => todo.id === action.payload.id);
      state["listaCompletada"].push(todo);
      const index = state["lista"].indexOf(todo);
      state["lista"].splice(index, 1);
      return state;
    },
    addArticles(state, action) {
      state["lista"] = action.payload;
      return state;
    },
    addList(state, action) {
      state["lista"] = action.payload;
      return state;
    },
  },
});

export const {
  articleAdded,
  articleDecrease,
  articleToggle,
  addArticles,
  addList,
} = articlesSlice.actions;
export default articlesSlice.reducer;
