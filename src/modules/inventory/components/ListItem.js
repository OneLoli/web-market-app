import React from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebaseConfig";

function Listitem(props) {
  let content = props.content;
  const storage = getStorage();
  let id = props.itemKey;
  let correo = auth.currentUser && auth.currentUser.email;
  // Use state to store the image URL
  const [imageUrl, setImageUrl] = useState(null);

  //const imageRef = storage.ref(`${correo}/items/${id}`);

  // Get the image URL from Firebase Storage
  useEffect(() => {
    const imageRef = ref(storage, `${correo}/items/${id}`);
    getDownloadURL(imageRef)
      .then((url) => setImageUrl(url))
      .catch((error) => console.error("Error getting download URL: ", error));
  }, [id, correo, storage]);

  return (
    <div class="card grid-item">
      <img
        src={
          imageUrl ||
          "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png"
        }
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
