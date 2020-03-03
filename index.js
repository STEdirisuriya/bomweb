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

//now inn(schoolname, inningtype)

var school = document.getElementById('school');
var logo = document.getElementById('logo');
var bg = document.getElementById('bg');
var nowinn = db.collection("other").doc("nowinn");

nowinn.onSnapshot(function(doc) {
  schoolname = doc.data().play;
  if(schoolname == 'ananda'){
    school.innerHTML = "Ananda College";
    bg.src = './assets/bgac.png'
    logo.src ='./assets/Ananda.png';
  }else if(schoolname == 'nalanda'){
    school.innerHTML = "Nalanda College";
    bg.src = './assets/bgnc.png'
    logo.src='./assets/Nalanda.png';
  }
});


//Live score(score, overs & balls, extras, inning)

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
      inning.innerHTML  = '1<sup>st</sup> Innings';
    }else if(innnum == "2"){
      inning.innerHTML  = '2<sup>nd</sup> Innings';
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
});

//batting
var batting = document.getElementById("batting");

function renderPlayer(doc){
  let li = document.createElement('li');
  let divname = document.createElement('div');
  let divscore = document.createElement('div');

  li.setAttribute('class', 'row rounded-pill bat');
  li.setAttribute('data-id', doc.id);
  divname.setAttribute('class', 'col-9 align-self-center namebat');
  divname.textContent = doc.name;
  divscore.setAttribute('class', 'col align-self-center pointsbat rounded-pill');
  divscore.textContent = doc.points;

  li.appendChild(divname);
  li.appendChild(divscore);

  batting.appendChild(li);
};

nowinn.onSnapshot(function(doc) {
  currentinn = doc.data().inn;
  battingnow = db.collection("batting/inn" + currentinn + "/players").where("in", "==", true).limit(2);

  battingnow.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
          renderPlayer(change.doc.data());
        } else if (change.type == 'removed'){
          let li = batting.querySelector('[data-id=' + change.doc.data().id + ']');
          batting.removeChild(li);
        } else if (change.type == 'modified'){
          let li = batting.querySelector('[data-id=' + change.doc.data().id + ']');
          batting.removeChild(li);
          renderPlayer(change.doc.data());
        }
    });
});
});


//bowling
var bowling = document.getElementById("bowling");

function renderPlayerBowl(doc){
  let liB = document.createElement('li');
  let divnameball = document.createElement('div');
  let divscoreball = document.createElement('div');

  liB.setAttribute('class', 'row rounded-pill ball');
  liB.setAttribute('data-id', doc.id);
  divnameball.setAttribute('class', 'col-9 align-self-center nameball');
  divnameball.textContent = doc.name;
  divscoreball.setAttribute('class', 'col align-self-center pointsbat rounded-pill');
  divscoreball.textContent = doc.balls;

  liB.appendChild(divnameball);
  liB.appendChild(divscoreball);

  bowling.appendChild(liB);
};

nowinn.onSnapshot(function(doc) {
  currentinn = doc.data().inn;
  ballingNow = db.collection("bowling/inn" + currentinn + "/details").where("in", "==", true).limit(1);

  ballingNow.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
          renderPlayerBowl(change.doc.data());
        } else if (change.type == 'removed'){
          let liB = batting.querySelector('[data-id=' + change.doc.data().id + ']');
          bowling.removeChild(li);
        } else if (change.type == 'modified'){
          let liB = batting.querySelector('[data-id=' + change.doc.data().id + ']');
          bowling.removeChild(li);
          renderPlayerBowl(change.doc.data());
        }
    });
});
});