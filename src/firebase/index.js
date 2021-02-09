import firebase from 'firebase/app'
import 'firebase/firestore'

const app=firebase.initializeApp({
        apiKey: "AIzaSyAXMrXC-q8Dbp-wZuOene0jXqOk-ZcaNXQ",
    authDomain: "frutossecosdonmauro.firebaseapp.com",
    databaseURL: "https://frutossecosdonmauro-default-rtdb.firebaseio.com",
    projectId: "frutossecosdonmauro",
    storageBucket: "frutossecosdonmauro.appspot.com",
    messagingSenderId: "453287166757",
    appId: "1:453287166757:web:06fa8c6e1311d4244a90cc"
});
export function getFirebase(){
return app;

}

export function getFirestore(){
return firebase.firestore(app)
}
