import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyARsLCsbDwk9eBr-cKWdeEIwUwgS6MwZwI",
    authDomain: "fir-auth-vue-2fac1.firebaseapp.com",
    databaseURL: "https://fir-auth-vue-2fac1.firebaseio.com",
    projectId: "fir-auth-vue-2fac1",
    storageBucket: "fir-auth-vue-2fac1.appspot.com",
    messagingSenderId: "232105108873",
    appId: "1:232105108873:web:23d70500c0434023c1ed58"
};
let app = Firebase.initializeApp(config)
export const db = app.database()