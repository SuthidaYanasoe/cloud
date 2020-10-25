import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAdIIKix_S_P_YR2YDKZeGDZVak98tEHEM',
    authDomain: 'cloud2-4f60a.firebaseapp.com',
    databaseURL: 'https://cloud2-4f60a.firebaseio.com',
    projectId: 'cloud2-4f60a',
    storageBucket: 'cloud2-4f60a.appspot.com',
    messagingSenderId: '168507853224',
    appId: '1:168507853224:web:d75c67616b65d26e08359d',
    measurementId: 'G-89JNEBVF7B',
  }

  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
