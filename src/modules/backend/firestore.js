import { auth, db } from "../../config/firebaseConfig";

const getArticles = async (callback) => {
  let email = auth.currentUser === null ? null : auth.currentUser.email;
  let articles = [];
  let identifier = 0;
  if (email !== null)
    db.collection("users")
      .doc(auth.currentUser.email)
      .collection("items")
      .get()
      .then((lista) => {
        lista.forEach((item) => {
          articles.push({
            id: identifier,
            name: item.get("name"),
            units: item.get("units"),
          });
          identifier++;
        });
        callback(articles);
      });
};

export { getArticles };
