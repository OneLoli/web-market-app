import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

const logInWithEmailAndPassword = async (email, password, callback) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      if (auth.currentUser !== null) callback();
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export { logInWithEmailAndPassword };
