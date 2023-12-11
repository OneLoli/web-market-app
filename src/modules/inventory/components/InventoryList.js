import React from "react";
import Listitem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectAllArticles, selectAllTodos } from "../selectors";
import { getArticles as getArticlesBackend } from "../../backend/firestore";
import { addArticles } from "../../../store/articlesSlice";

function List() {
  const lista = useSelector(selectAllArticles);
  const dispatch = useDispatch();

  if (!Array.isArray(lista) || lista.length === 0) {
    getArticlesBackend((items) => dispatch(addArticles(items)));
    return <p>No items to display</p>;
  }
  console.log(lista);

  return (
    <div class="container d-grid item-list">
      {lista.map((element) => (
        <Listitem
          itemKey={element.id}
          content={element.name}
          units={element.units}
        />
      ))}
    </div>
  );
}

export { List as InventoryList };
