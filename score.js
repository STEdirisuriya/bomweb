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
var bg = document.getElementById('bg');
var nowinn = db.collection("other").doc("nowinn");

nowinn.onSnapshot(function(doc) {
  schoolname = doc.data().play;
  if(schoolname == 'ananda'){
    school.innerHTML = "Ananda College";
    bg.src = './assets/bgac.png'
  }else if(schoolname == 'nalanda'){
    school.innerHTML = "Nalanda College";
    bg.src = './assets/bgnc.png'
  }
});

//take inn played schools

var inn1div = document.getElementById('inn1div');
var inn2div = document.getElementById('inn2div');
var inn3div = document.getElementById('inn3div');
var inn4div = document.getElementById('inn4div');
var inn5div = document.getElementById('inn5div');
var inn6div = document.getElementById('inn6div');


var innschool = db.collection("other").doc("teamsinn");

innschool.onSnapshot(function(doc) {
  inn1div.innerHTML = doc.data().inn1;
  inn2div.innerHTML = doc.data().inn2;
  inn3div.innerHTML = doc.data().inn3;
  inn4div.innerHTML = doc.data().inn4;
  inn5div.innerHTML = doc.data().inn5;
  inn6div.innerHTML = doc.data().inn6;
});

// innning
// inn1
var inn1 = document.getElementById("inn1");

function renderinn1(doc){
  let trinn1 = document.createElement('tr');
  let nameinn1 = document.createElement('td');
  let pointsinn1 = document.createElement('td');
  let ballsinn1 = document.createElement('td');
  let srinn1 = document.createElement('td');

  trinn1.setAttribute('data-id', doc.id);
  nameinn1.textContent = doc.name;
  pointsinn1.textContent = 50;
  ballsinn1.textContent = 10;
  srinn1.textContent = 10;

  trinn1.appendChild(nameinn1);
  trinn1.appendChild(pointsinn1);
  trinn1.appendChild(ballsinn1);
  trinn1.appendChild(srinn1);

  inn1.appendChild(trinn1);
};


boardbatinn1 = db.collection("batting/inn1/players").orderBy("name");
  
    boardbatinn1.onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
          console.log((change.doc.data()));
          if(change.type == 'added'){
            renderinn1(change.doc.data());            
          } else if (change.type == 'removed'){
            let trinn1 = inn1.querySelector('[data-id=' + change.doc.data().id + ']');
            inn1.removeChild(trinn1);
          } else if (change.type == 'modified'){
            let trinn1 = inn1.querySelector('[data-id=' + change.doc.data().id + ']');
            inn1.removeChild(trinn1);
            renderinn1(change.doc.data());        
          }
      });
  });

// boardbatinn1
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });