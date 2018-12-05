const config = {
  apiKey: "AIzaSyDk1oDM5vj_i7eI4mpISbArBifadN8dzB0",
  authDomain: "shoppingstore-224021.firebaseapp.com",
  databaseURL: "https://shoppingstore-224021.firebaseio.com",
  projectId: "shoppingstore-224021",
  storageBucket: "shoppingstore-224021.appspot.com",
  messagingSenderId: "901286715371"
};

//Functions
export const registerNewUsuario = (email, password) => {
  window.firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const singInWithEmailAndPass = (email, password) => {
  window.firebase.auth().signInWithEmailAndPassword(email, password);
};

export const watchSession = () => {
  window.firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log({
        email: user.email,
        uid: user.uid
      });
    }
  });
};

export default config;
