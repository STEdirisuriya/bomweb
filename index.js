var config = {
  apiKey: "AIzaSyB9C-ocmR0dhZbDZxU7vWyr6GqcHgk5cOc",
  authDomain: "bomdb-57efe.firebaseapp.com",
  databaseURL: "https://bomdb-57efe.firebaseio.com",
  projectId: "bomdb-57efe",
  storageBucket: "bomdb-57efe.appspot.com",
  messagingSenderId: "509449260834",
  appId: "1:509449260834:web:8be8a90fdaad1ac31e5f7b",
  measurementId: "G-QKY8J7YJX9"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true }); 

var livescore = document.getElementById('livescore');
var overs = document.getElementById('overs');
var runrate = document.getElementById('runrate');
var wides = document.getElementById('wides');
var noballs = document.getElementById('noballs');
var byes = document.getElementById('byes');
var legbyes = document.getElementById('legbyes');
var inning = document.getElementById('inning');

var fullpoints = db.collection("other").doc("fullpoints");

fullpoints.onSnapshot(function(doc) {
  testmatch = doc.data().testmatch;
  innnum = doc.data().inn;
  if(testmatch){
    if(innnum == "1"){
      inning.innerHTML  = '1<sup> st </sup> Inning';
    }else if(innnum == "2"){
      inning.innerHTML  = '2<sup> nd </sup> Inning';
    }
  }else{
    inning.innerHTML  = 'Oneday Match';
  }
  livescore.innerHTML = doc.data().points + ' / ' + doc.data().wickets;
  scorenum = doc.data().points;
  overs.innerHTML = doc.data().overs + '.' + doc.data().balls;
  oversnum = doc.data().overs + '.' + doc.data().balls;
  runratenum = (scorenum/parseFloat(oversnum)).toFixed(2);
  runrate.innerHTML = runratenum;
  wides.innerHTML = doc.data().wides;
  noballs.innerHTML = doc.data().noballs;
  byes.innerHTML = doc.data().byes;
  legbyes.innerHTML = doc.data().legbyes;
} 
);

var school = document.getElementById('school');
var logo = document.getElementById('logo');

var nowinn = db.collection("other").doc("nowinn");

nowinn.onSnapshot(function(doc) {
  schoolname = doc.data().play;
  if(schoolname == 'ananda'){
    school.innerHTML = "Ananda College";
    logo.src='./assets/Ananda.png';
  }else if(schoolname == 'nalanda'){
    school.innerHTML = "Nalanda College";
    logo.src='./assets/Nalanda.png';
  }
  playinn = doc.data().inn;
  playschool = doc.data().play;
} 
);