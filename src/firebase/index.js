import firebase from 'firebase/app'
import 'firebase/firestore'

const APIKEY=process.env.REACT_APP_FIREBASE_API_KEY
const AUTHDOMAIN=process.env.REACT_APP_FIREBASE_AUTHDOMAIN
const DATABASEURL=process.env.REACT_APP_FIREBASE_DATABASEURL
const PROJECTID=process.env.REACT_APP_FIREBASE_PROJECT_ID
const STORAGEBUCKET=process.env.REACT_APP_FIREBASE_STORAGEBUCKET
const MESSAGINGSENDERID=process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID
const APPID=process.env.REACT_APP_FIREBASE_APPID


console.log("APIKEY:"+APIKEY);

const app=firebase.initializeApp({
    apiKey:APIKEY,
    authDomain:AUTHDOMAIN,
    databaseURL:DATABASEURL,
    projectId:PROJECTID,
    storageBucket:STORAGEBUCKET,
    messagingSenderId:MESSAGINGSENDERID,
    appId:APPID
});
export function getFirebase(){
return app;

}

export function getFirestore(){
return firebase.firestore(app)
}
