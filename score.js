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
db.settings({
  timestampsInSnapshots: true
});

//now inn(schoolname, inningtype)

var school = document.getElementById('school');
var bg = document.getElementById('bg');
var nowinn = db.collection("other").doc("nowinn");

nowinn.onSnapshot(function (doc) {
  schoolname = doc.data().play;
  if (schoolname == 'ananda') {
    school.innerHTML = "Ananda College";
    bg.src = './assets/bgac.png'
  } else if (schoolname == 'nalanda') {
    school.innerHTML = "Nalanda College";
    bg.src = './assets/bgnc.png'
  }
});

//Live score(score, overs & balls, extras, inning)

var inning = document.getElementById('inning');
var liveanim = document.getElementById("liveanim");
var testmatchwondiv = document.getElementById("testmatchwondiv");
var onedaymatchwondiv = document.getElementById("onedaymatchwondiv");

var fullpoints = db.collection("other").doc("fullpoints");

fullpoints.onSnapshot(function(doc) {
  testmatch = doc.data().testmatch;
  testmatchwon = doc.data().testmatchwon;
  onedaymatchwon = doc.data().onedaymatchwon;

  innnum = doc.data().inn;
  live = doc.data().live;
  if(testmatch){
    if(innnum == "1"){
        inning.innerHTML  = '1<sup>st</sup> Innings';
    }else if(innnum == "2"){
      inning.innerHTML  = '2<sup>nd</sup> Innings';
    }
  }else{
    inning.innerHTML  = 'Oneday Match';
  }
  if(live == true){
    liveanim.style.display = 'inline-block';
  }else{
    liveanim.style.display = 'none';
  }

  if(testmatchwon != ""){   
    testmatchwondiv.style.display = 'block';
    testmatchwondiv.innerHTML = testmatchwon;
  }else{    
    testmatchwondiv.style.display = 'none';  
  }
  if(onedaymatchwon != ""){
    onedaymatchwondiv.style.display = 'block';
    onedaymatchwondiv.innerHTML = onedaymatchwon;   
  }else{    
    onedaymatchwondiv.style.display = 'none'; 
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

innschool.onSnapshot(function (doc) {
  if (doc.data().inn1 == 'ananda') {
    inn1div.innerHTML = 'Ananda College';
  } else if (doc.data().inn1 == 'nalanda') {
    inn1div.innerHTML = 'Nalanda College';
  } else {
    inn1div.innerHTML = 'Still not played';
  }

  if (doc.data().inn2 == 'ananda') {
    inn2div.innerHTML = 'Ananda College';
  } else if (doc.data().inn2 == 'nalanda') {
    inn2div.innerHTML = 'Nalanda College';
  } else {
    inn2div.innerHTML = 'Still not played';
  }

  if (doc.data().inn3 == 'ananda') {
    inn3div.innerHTML = 'Ananda College';
  } else if (doc.data().inn3 == 'nalanda') {
    inn3div.innerHTML = 'Nalanda College';
  } else {
    inn3div.innerHTML = 'Still not played';
  }

  if (doc.data().inn4 == 'ananda') {
    inn4div.innerHTML = 'Ananda College';
  } else if (doc.data().inn4 == 'nalanda') {
    inn4div.innerHTML = 'Nalanda College';
  } else {
    inn4div.innerHTML = 'Still not played';
  }

  if (doc.data().inn5 == 'ananda') {
    inn5div.innerHTML = 'Ananda College';
  } else if (doc.data().inn5 == 'nalanda') {
    inn5div.innerHTML = 'Nalanda College';
  } else {
    inn5div.innerHTML = 'Still not played';
  }

  if (doc.data().inn6 == 'ananda') {
    inn6div.innerHTML = 'Ananda College';
  } else if (doc.data().inn6 == 'nalanda') {
    inn6div.innerHTML = 'Nalanda College';
  } else {
    inn6div.innerHTML = 'Still not played';
  }
});

//bowling

innschool.onSnapshot(function (doc) {
  if(doc.data().inn1 == 'nalanda'){
    inn1divB.innerHTML = 'Ananda College';
  }else if(doc.data().inn1 == 'ananda'){
    inn1divB.innerHTML = 'Nalanda College';
  }else{
    inn1divB.innerHTML = 'Still not played';
  }

  if(doc.data().inn2 == 'nalanda'){
    inn2divB.innerHTML = 'Ananda College';
  }else if(doc.data().inn2 == 'ananda'){
    inn2divB.innerHTML = 'Nalanda College';
  }else{
    inn2divB.innerHTML = 'Still not played';
  }

  if(doc.data().inn3 == 'nalanda'){
    inn3divB.innerHTML = 'Ananda College';
  }else if(doc.data().inn3 == 'ananda'){
    inn3divB.innerHTML = 'Nalanda College';
  }else{
    inn3divB.innerHTML = 'Still not played';
  }

  if(doc.data().inn4 == 'nalanda'){
    inn4divB.innerHTML = 'Ananda College';
  }else if(doc.data().inn4 == 'ananda'){
    inn4divB.innerHTML = 'Nalanda College';
  }else{
    inn4divB.innerHTML = 'Still not played';
  }

  if(doc.data().inn5 == 'nalanda'){
    inn5divB.innerHTML = 'Ananda College';
  }else if(doc.data().inn5 == 'ananda'){
    inn5divB.innerHTML = 'Nalanda College';
  }else{
    inn5divB.innerHTML = 'Still not played';
  }

  if (doc.data().inn6 == 'nalanda') {
    inn6divB.innerHTML = 'Ananda College';
  } else if (doc.data().inn6 == 'ananda') {
    inn6divB.innerHTML = 'Nalanda College';
  } else {
    inn6divB.innerHTML = 'Still not played';
  }
});

// innning
// inn1
var inn1 = document.getElementById("inn1");

function renderinn1(doc) {
  let trinn1 = document.createElement('tr');
  let nameinn1 = document.createElement('td');
  let pointsinn1 = document.createElement('td');
  let ballsinn1 = document.createElement('td');
  let srinn1 = document.createElement('td');

  trinn1.setAttribute('data-id', doc.id);
  nameinn1.textContent = doc.name;
  pointsinn1.textContent = doc.points;
  ballsinn1.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn1.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn1.textContent = '--';
  }

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
    if (change.type == 'added') {
      renderinn1(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn1 = inn1.querySelector('[data-id=' + change.doc.data().id + ']');
      inn1.removeChild(trinn1);
    } else if (change.type == 'modified') {
      let trinn1 = inn1.querySelector('[data-id=' + change.doc.data().id + ']');
      inn1.removeChild(trinn1);
      renderinn1(change.doc.data());
    }
  });
});

// innning
// inn2
var inn2 = document.getElementById("inn2");

function renderinn2(doc) {
  let trinn2 = document.createElement('tr');
  let nameinn2 = document.createElement('td');
  let pointsinn2 = document.createElement('td');
  let ballsinn2 = document.createElement('td');
  let srinn2 = document.createElement('td');

  trinn2.setAttribute('data-id', doc.id);
  nameinn2.textContent = doc.name;
  pointsinn2.textContent = doc.points;
  ballsinn2.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn2.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn2.textContent = '--';
  }

  trinn2.appendChild(nameinn2);
  trinn2.appendChild(pointsinn2);
  trinn2.appendChild(ballsinn2);
  trinn2.appendChild(srinn2);

  inn2.appendChild(trinn2);
};


boardbatinn2 = db.collection("batting/inn2/players").orderBy("name");

boardbatinn2.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn2(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn2 = inn2.querySelector('[data-id=' + change.doc.data().id + ']');
      inn2.removeChild(trinn2);
    } else if (change.type == 'modified') {
      let trinn2 = inn2.querySelector('[data-id=' + change.doc.data().id + ']');
      inn2.removeChild(trinn2);
      renderinn2(change.doc.data());
    }
  });
});

// innning
// inn3
var inn3 = document.getElementById("inn3");

function renderinn3(doc) {
  let trinn3 = document.createElement('tr');
  let nameinn3 = document.createElement('td');
  let pointsinn3 = document.createElement('td');
  let ballsinn3 = document.createElement('td');
  let srinn3 = document.createElement('td');

  trinn3.setAttribute('data-id', doc.id);
  nameinn3.textContent = doc.name;
  pointsinn3.textContent = doc.points;
  ballsinn3.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn3.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn3.textContent = '--';
  }

  trinn3.appendChild(nameinn1);
  trinn3.appendChild(pointsinn1);
  trinn3.appendChild(ballsinn1);
  trinn3.appendChild(srinn1);

  inn3.appendChild(trinn1);
};


boardbatinn3 = db.collection("batting/inn3/players").orderBy("name");

boardbatinn3.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn3(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn3 = inn3.querySelector('[data-id=' + change.doc.data().id + ']');
      inn3.removeChild(trinn3);
    } else if (change.type == 'modified') {
      let trinn3 = inn3.querySelector('[data-id=' + change.doc.data().id + ']');
      inn3.removeChild(trinn3);
      renderinn3(change.doc.data());
    }
  });
});

// innning
// inn4
var inn4 = document.getElementById("inn4");

function renderinn4(doc) {
  let trinn4 = document.createElement('tr');
  let nameinn4 = document.createElement('td');
  let pointsinn4 = document.createElement('td');
  let ballsinn4 = document.createElement('td');
  let srinn4 = document.createElement('td');

  trinn4.setAttribute('data-id', doc.id);
  nameinn4.textContent = doc.name;
  pointsinn4.textContent = doc.points;
  ballsinn4.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn4.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn4.textContent = '--';
  }

  trinn4.appendChild(nameinn1);
  trinn4.appendChild(pointsinn1);
  trinn4.appendChild(ballsinn1);
  trinn4.appendChild(srinn1);

  inn4.appendChild(trinn1);
};


boardbatinn4 = db.collection("batting/inn4/players").orderBy("name");

boardbatinn4.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn4(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn4 = inn4.querySelector('[data-id=' + change.doc.data().id + ']');
      inn4.removeChild(trinn4);
    } else if (change.type == 'modified') {
      let trinn4 = inn4.querySelector('[data-id=' + change.doc.data().id + ']');
      inn4.removeChild(trinn4);
      renderinn4(change.doc.data());
    }
  });
});

// innning
// inn5
var inn5 = document.getElementById("inn5");

function renderinn5(doc) {
  let trinn5 = document.createElement('tr');
  let nameinn5 = document.createElement('td');
  let pointsinn5 = document.createElement('td');
  let ballsinn5 = document.createElement('td');
  let srinn5 = document.createElement('td');

  trinn5.setAttribute('data-id', doc.id);
  nameinn5.textContent = doc.name;
  pointsinn5.textContent = doc.points;
  ballsinn5.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn5.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn5.textContent = '--';
  }

  trinn5.appendChild(nameinn1);
  trinn5.appendChild(pointsinn1);
  trinn5.appendChild(ballsinn1);
  trinn5.appendChild(srinn1);

  inn5.appendChild(trinn1);
};

boardbatinn5 = db.collection("batting/inn5/players").orderBy("name");

boardbatinn5.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn5(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn5 = inn5.querySelector('[data-id=' + change.doc.data().id + ']');
      inn5.removeChild(trinn5);
    } else if (change.type == 'modified') {
      let trinn5 = inn5.querySelector('[data-id=' + change.doc.data().id + ']');
      inn5.removeChild(trinn5);
      renderinn5(change.doc.data());
    }
  });
});

// innning
// inn6
var inn6 = document.getElementById("inn6");

function renderinn6(doc) {
  let trinn6 = document.createElement('tr');
  let nameinn6 = document.createElement('td');
  let pointsinn6 = document.createElement('td');
  let ballsinn6 = document.createElement('td');
  let srinn6 = document.createElement('td');

  trinn6.setAttribute('data-id', doc.id);
  nameinn6.textContent = doc.name;
  pointsinn6.textContent = doc.points;
  ballsinn6.textContent = doc.balls;
  if (doc.balls != 0) {
    srinn6.textContent = ((doc.points / doc.balls) * 100).toFixed(2);
  } else {
    srinn6.textContent = '--';
  }

  trinn6.appendChild(nameinn1);
  trinn6.appendChild(pointsinn1);
  trinn6.appendChild(ballsinn1);
  trinn6.appendChild(srinn1);

  inn6.appendChild(trinn1);
};


boardbatinn6 = db.collection("batting/inn6/players").orderBy("name");

boardbatinn6.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn6(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn6 = inn6.querySelector('[data-id=' + change.doc.data().id + ']');
      inn6.removeChild(trinn6);
    } else if (change.type == 'modified') {
      let trinn6 = inn6.querySelector('[data-id=' + change.doc.data().id + ']');
      inn6.removeChild(trinn6);
      renderinn6(change.doc.data());
    }
  });
});

////////////////////////////////////////////
// innningbowling
// inn1
var inn1B = document.getElementById("inn1B");

function renderinn1B(doc) {
  let trinn1B = document.createElement('tr');
  let nameinn1B = document.createElement('td');
  let oversinn1B = document.createElement('td');
  let maideninn1B = document.createElement('td');
  let runsinn1B = document.createElement('td');
  let wicketsinn1B = document.createElement('td');
  let econinn1B = document.createElement('td');

  trinn1B.setAttribute('data-id', doc.id);
  nameinn1B.textContent = doc.name;
  oversinn1B.textContent = doc.overs;
  maideninn1B.textContent = doc.maiden;
  runsinn1B.textContent = doc.score;
  wicketsinn1B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn1B.textContent = (doc.score / doc.overs).toFixed(1);
  } else {
    econinn1B.textContent = '--';
  }

  trinn1B.appendChild(nameinn1B);
  trinn1B.appendChild(oversinn1B);
  trinn1B.appendChild(maideninn1B);
  trinn1B.appendChild(runsinn1B);
  trinn1B.appendChild(wicketsinn1B);
  trinn1B.appendChild(econinn1B);

  inn1B.appendChild(trinn1B);
};


boardbatinn1B = db.collection("bowling/inn1/details").orderBy("name");

boardbatinn1B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn1B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn1B = inn1B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn1B.removeChild(trinn1B);
    } else if (change.type == 'modified') {
      let trinn1B = inn1B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn1B.removeChild(trinn1B);
      renderinn1B(change.doc.data());
    }
  });
});




// innningbowling
// inn2
var inn2B = document.getElementById("inn2B");

function renderinn2B(doc) {
  let trinn2B = document.createElement('tr');
  let nameinn2B = document.createElement('td');
  let oversinn2B = document.createElement('td');
  let maideninn2B = document.createElement('td');
  let runsinn2B = document.createElement('td');
  let wicketsinn2B = document.createElement('td');
  let econinn2B = document.createElement('td');

  trinn2B.setAttribute('data-id', doc.id);
  nameinn2B.textContent = doc.name;
  oversinn2B.textContent = doc.overs;
  maideninn2B.textContent = doc.maiden;
  runsinn2B.textContent = doc.score;
  wicketsinn2B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn2B.textContent = (doc.score / doc.overs).toFixed(2);
  } else {
    econinn2B.textContent = '--';
  }

  trinn2B.appendChild(nameinn2B);
  trinn2B.appendChild(oversinn2B);
  trinn2B.appendChild(maideninn2B);
  trinn2B.appendChild(runsinn2B);
  trinn2B.appendChild(wicketsinn2B);
  trinn2B.appendChild(econinn2B);

  inn2B.appendChild(trinn2B);
};


boardbatinn2B = db.collection("bowling/inn2/details").orderBy("name");

boardbatinn2B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn2B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn2B = inn2B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn2B.removeChild(trinn2B);
    } else if (change.type == 'modified') {
      let trinn2B = inn2B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn2B.removeChild(trinn2B);
      renderinn2B(change.doc.data());
    }
  });
});



// innningbowling
// inn3
var inn3B = document.getElementById("inn3B");

function renderinn3B(doc) {
  let trinn3B = document.createElement('tr');
  let nameinn3B = document.createElement('td');
  let oversinn3B = document.createElement('td');
  let maideninn3B = document.createElement('td');
  let runsinn3B = document.createElement('td');
  let wicketsinn3B = document.createElement('td');
  let econinn3B = document.createElement('td');

  trinn3B.setAttribute('data-id', doc.id);
  nameinn3B.textContent = doc.name;
  oversinn3B.textContent = doc.overs;
  maideninn3B.textContent = doc.maiden;
  runsinn3B.textContent = doc.score;
  wicketsinn3B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn3B.textContent = (doc.score / doc.overs).toFixed(2);
  } else {
    econinn3B.textContent = '--';
  }

  trinn3B.appendChild(nameinn3B);
  trinn3B.appendChild(oversinn3B);
  trinn3B.appendChild(maideninn3B);
  trinn3B.appendChild(runsinn3B);
  trinn3B.appendChild(wicketsinn3B);
  trinn3B.appendChild(econinn3B);

  inn3B.appendChild(trinn3B);
};


boardbatinn3B = db.collection("bowling/inn3/details").orderBy("name");

boardbatinn3B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn3B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn3B = inn3B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn3B.removeChild(trinn3B);
    } else if (change.type == 'modified') {
      let trinn3B = inn3B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn3B.removeChild(trinn3B);
      renderinn3B(change.doc.data());
    }
  });
});


// innningbowling
// inn4
var inn4B = document.getElementById("inn4B");

function renderinn4B(doc) {
  let trinn4B = document.createElement('tr');
  let nameinn4B = document.createElement('td');
  let oversinn4B = document.createElement('td');
  let maideninn4B = document.createElement('td');
  let runsinn4B = document.createElement('td');
  let wicketsinn4B = document.createElement('td');
  let econinn4B = document.createElement('td');

  trinn4B.setAttribute('data-id', doc.id);
  nameinn4B.textContent = doc.name;
  oversinn4B.textContent = doc.overs;
  maideninn4B.textContent = doc.maiden;
  runsinn4B.textContent = doc.score;
  wicketsinn4B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn4B.textContent = (doc.score / doc.overs).toFixed(2);
  } else {
    econinn4B.textContent = '--';
  }

  trinn4B.appendChild(nameinn4B);
  trinn4B.appendChild(oversinn4B);
  trinn4B.appendChild(maideninn4B);
  trinn4B.appendChild(runsinn4B);
  trinn4B.appendChild(wicketsinn4B);
  trinn4B.appendChild(econinn4B);

  inn4B.appendChild(trinn4B);
};


boardbatinn4B = db.collection("bowling/inn4/details").orderBy("name");

boardbatinn4B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn4B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn4B = inn4B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn4B.removeChild(trinn4B);
    } else if (change.type == 'modified') {
      let trinn4B = inn4B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn4B.removeChild(trinn4B);
      renderinn4B(change.doc.data());
    }
  });
});


// innningbowling
// inn5
var inn5B = document.getElementById("inn5B");

function renderinn5B(doc) {
  let trinn5B = document.createElement('tr');
  let nameinn5B = document.createElement('td');
  let oversinn5B = document.createElement('td');
  let maideninn5B = document.createElement('td');
  let runsinn5B = document.createElement('td');
  let wicketsinn5B = document.createElement('td');
  let econinn5B = document.createElement('td');

  trinn5B.setAttribute('data-id', doc.id);
  nameinn5B.textContent = doc.name;
  oversinn5B.textContent = doc.overs;
  maideninn5B.textContent = doc.maiden;
  runsinn5B.textContent = doc.score;
  wicketsinn5B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn5B.textContent = (doc.score / doc.overs).toFixed(2);
  } else {
    econinn5B.textContent = '--';
  }

  trinn5B.appendChild(nameinn5B);
  trinn5B.appendChild(oversinn5B);
  trinn5B.appendChild(maideninn5B);
  trinn5B.appendChild(runsinn5B);
  trinn5B.appendChild(wicketsinn5B);
  trinn5B.appendChild(econinn5B);

  inn5B.appendChild(trinn5B);
};


boardbatinn5B = db.collection("bowling/inn5/details").orderBy("name");

boardbatinn5B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn5B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn5B = inn5B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn5B.removeChild(trinn5B);
    } else if (change.type == 'modified') {
      let trinn5B = inn5B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn5B.removeChild(trinn5B);
      renderinn5B(change.doc.data());
    }
  });
});

// innningbowling
// inn6
var inn6B = document.getElementById("inn6B");

function renderinn6B(doc) {
  let trinn6B = document.createElement('tr');
  let nameinn6B = document.createElement('td');
  let oversinn6B = document.createElement('td');
  let maideninn6B = document.createElement('td');
  let runsinn6B = document.createElement('td');
  let wicketsinn6B = document.createElement('td');
  let econinn6B = document.createElement('td');

  trinn6B.setAttribute('data-id', doc.id);
  nameinn6B.textContent = doc.name;
  oversinn6B.textContent = doc.overs;
  maideninn6B.textContent = doc.maiden;
  runsinn6B.textContent = doc.score;
  wicketsinn6B.textContent = doc.wickets;
  if (doc.overs != 0) {
    econinn6B.textContent = (doc.score / doc.overs).toFixed(2);
  } else {
    econinn6B.textContent = '--';
  }

  trinn6B.appendChild(nameinn6B);
  trinn6B.appendChild(oversinn6B);
  trinn6B.appendChild(maideninn6B);
  trinn6B.appendChild(runsinn6B);
  trinn6B.appendChild(wicketsinn6B);
  trinn6B.appendChild(econinn6B);

  inn6B.appendChild(trinn6B);
};


boardbatinn6B = db.collection("bowling/inn6/details").orderBy("name");

boardbatinn6B.onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
  changes.forEach(change => {
    if (change.type == 'added') {
      renderinn6B(change.doc.data());
    } else if (change.type == 'removed') {
      let trinn6B = inn6B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn6B.removeChild(trinn6B);
    } else if (change.type == 'modified') {
      let trinn6B = inn6B.querySelector('[data-id=' + change.doc.data().id + ']');
      inn6B.removeChild(trinn6B);
      renderinn6B(change.doc.data());
    }
  });
});


//extras

var inn1WD = document.getElementById('inn1WD');
var inn1NB = document.getElementById('inn1NB');
var inn1BY = document.getElementById('inn1BY');
var inn1LB = document.getElementById('inn1LB');
var inn1PE = document.getElementById('inn1PE');

var inn2WD = document.getElementById('inn2WD');
var inn2NB = document.getElementById('inn2NB');
var inn2BY = document.getElementById('inn2BY');
var inn2LB = document.getElementById('inn2LB');
var inn2PE = document.getElementById('inn2PE');

var inn3WD = document.getElementById('inn3WD');
var inn3NB = document.getElementById('inn3NB');
var inn3BY = document.getElementById('inn3BY');
var inn3LB = document.getElementById('inn3LB');
var inn3PE = document.getElementById('inn3PE');

var inn4WD = document.getElementById('inn4WD');
var inn4NB = document.getElementById('inn4NB');
var inn4BY = document.getElementById('inn4BY');
var inn4LB = document.getElementById('inn4LB');
var inn4PE = document.getElementById('inn4PE');

var inn5WD = document.getElementById('inn5WD');
var inn5NB = document.getElementById('inn5NB');
var inn5BY = document.getElementById('inn5BY');
var inn5LB = document.getElementById('inn5LB');
var inn5PE = document.getElementById('inn5PE');


var inn6WD = document.getElementById('inn6WD');
var inn6NB = document.getElementById('inn6NB');
var inn6BY = document.getElementById('inn6BY');
var inn6LB = document.getElementById('inn6LB');
var inn6PE = document.getElementById('inn6PE');

var extrasinn1 = db.collection("extras/inn1/details").doc("extra");
var extrasinn2 = db.collection("extras/inn2/details").doc("extra");
var extrasinn3 = db.collection("extras/inn3/details").doc("extra");
var extrasinn4 = db.collection("extras/inn4/details").doc("extra");
var extrasinn5 = db.collection("extras/inn5/details").doc("extra");
var extrasinn6 = db.collection("extras/inn6/details").doc("extra");

extrasinn1.onSnapshot(function (doc) {
  inn1WD.innerHTML = doc.data().wides;
  inn1NB.innerHTML = doc.data().noballs;
  inn1BY.innerHTML = doc.data().byes;
  inn1LB.innerHTML = doc.data().legbyes;
  inn1PE.innerHTML = doc.data().penalty;
});

// extrasinn2.onSnapshot(function (doc) {
//   inn2WD = doc.data().wides;
//   inn2NB = doc.data().noballs;
//   inn2BY = doc.data().byes;
//   inn2LB = doc.data().legbyes;
//   inn2PE = doc.data().penalty;
// });

// extrasinn3.onSnapshot(function (doc) {
//   inn3WD = doc.data().wides;
//   inn3NB = doc.data().noballs;
//   inn3BY = doc.data().byes;
//   inn3LB = doc.data().legbyes;
//   inn3PE = doc.data().penalty;
// });

// extrasinn4.onSnapshot(function (doc) {
//   inn4WD = doc.data().wides;
//   inn4NB = doc.data().noballs;
//   inn4BY = doc.data().byes;
//   inn4LB = doc.data().legbyes;
//   inn4PE = doc.data().penalty;
// });

// extrasinn5.onSnapshot(function (doc) {
//   inn5WD = doc.data().wides;
//   inn5NB = doc.data().noballs;
//   inn5BY = doc.data().byes;
//   inn5LB = doc.data().legbyes;
//   inn5PE = doc.data().penalty;
// });

// extrasinn6.onSnapshot(function (doc) {
//   inn6WD = doc.data().wides;
//   inn6NB = doc.data().noballs;
//   inn6BY = doc.data().byes;
//   inn6LB = doc.data().legbyes;
//   inn6PE = doc.data().penalty;
// });
