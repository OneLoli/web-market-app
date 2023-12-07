import React from "react";
import { articleDecrease, articleToggle } from "../../../store/articlesSlice";
import { useDispatch } from "react-redux";

function Listitem(props) {
  const dispatch = useDispatch();
  const { content, units } = props;

  return (
    <div class="card grid-item">
      <img
        src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        class="card-img-top"
        alt="Articulo"
      />
      <div class="card-body">
        <h5 class="card-title">{content}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Listitem;
