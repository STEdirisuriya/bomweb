var config = {
    apiKey: "AIzaSyCE-a58l70XTfJE1aejzBwA0mlv-TGtTcI",
    authDomain: "bomnew-89e70.firebaseapp.com",
    databaseURL: "https://bomnew-89e70.firebaseio.com",
    projectId: "bomnew-89e70",
    storageBucket: "bomnew-89e70.appspot.com",
    messagingSenderId: "992176288679",
    appId: "1:992176288679:web:fe9f7fea4519a3b25c3c82",
    measurementId: "G-F6GH0EB1W3"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true }); 

var divinn = document.getElementById('inn');
var divsch = document.getElementById('sch');



var docRef = db.collection("now").doc("inn");

docRef.onSnapshot(function(doc) {
    divinn.innerHTML = doc.data().innlive;
    divsch.innerHTML = doc.data().school;
} 
);
///
const form = document.querySelector('#update-inn-form');

form.addEventListener("submit", (e) => {
e.preventDefault();
db.collection("now").doc("inn").update({
  innlive: form.innlive.value,
  school: form.school.value,
});
});