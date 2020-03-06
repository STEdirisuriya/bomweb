//now inn(schoolname, inningtype)

var school = document.getElementById('school');
var logo = document.getElementById('logo');
var bg = document.getElementById('bg');
var nowinn = db.collection("other").doc("nowinn");

nowinn.onSnapshot(function (doc) {
  schoolname = doc.data().play;
  if (schoolname == 'ananda') {
    school.innerHTML = "Ananda College";
    bg.src = './assets/bgac.png'
    logo.src = './assets/Ananda.png';
  } else if (schoolname == 'nalanda') {
    school.innerHTML = "Nalanda College";
    bg.src = './assets/bgnc.png'
    logo.src = './assets/Nalanda.png';
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
var liveanim = document.getElementById("liveanim");

var fullpoints = db.collection("other").doc("fullpoints");

fullpoints.onSnapshot(function (doc) {
  testmatch = doc.data().testmatch;
  innnum = doc.data().inn;
  live = doc.data().live;
  if (testmatch) {
    if (innnum == "1") {
      inning.innerHTML = '1<sup>st</sup> Innings';
    } else if (innnum == "2") {
      inning.innerHTML = '2<sup>nd</sup> Innings';
    }
  } else {
    inning.innerHTML = 'Oneday Match';
  }
  if (live == true) {
    liveanim.style.display = 'inline-block';
  } else {
    liveanim.style.display = 'none';
  }
  livescore.innerHTML = doc.data().points + ' / ' + doc.data().wickets;
  scorenum = doc.data().points;
  overs.innerHTML = doc.data().overs + '.' + doc.data().balls;
  oversnum = doc.data().overs;
  ballsnum = (oversnum)*6 + doc.data().balls;

  runratenum = ((scorenum * 6) / ballsnum).toFixed(2);
  runrate.innerHTML = runratenum;
  wides.innerHTML = doc.data().wides;
  noballs.innerHTML = doc.data().noballs;
  byes.innerHTML = doc.data().byes;
  legbyes.innerHTML = doc.data().legbyes;
});

//batting
var batting = document.getElementById("batting");

function renderPlayer(doc) {
  let li = document.createElement('li');
  let divname = document.createElement('div');
  let divscore = document.createElement('div');

  li.setAttribute('class', 'row rounded-pill bat');
  li.setAttribute('data-id', doc.id);
  divname.setAttribute('class', 'col-9 align-self-center namebat');
  if (doc.data().nowplay) {
    divname.textContent = doc.data().name + '*';
  } else {
    divname.textContent = doc.data().name;
  }
  divscore.setAttribute('class', 'col align-self-center pointsbat rounded-pill');
  divscore.textContent = doc.data().points;

  li.appendChild(divname);
  li.appendChild(divscore);

  batting.appendChild(li);
};

nowinn.onSnapshot(function (doc) {
  batting.innerHTML = "";
  bowling.innerHTML = "";
});

nowinn.onSnapshot(function (doc) {
  currentinn = doc.data().inn;
  batting.innerHTML = "";
  bowling.innerHTML = "";
  battingnow = db.collection("batting/inn" + currentinn + "/players").where("in", "==", true).limit(2);
  
  battingnow.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        renderPlayer(change.doc);
      } else if (change.type == 'removed') {
        let li = batting.querySelector('[data-id=' + change.doc.id + ']');
        batting.removeChild(li);
      } else if (change.type == 'modified') {
        let li = batting.querySelector('[data-id=' + change.doc.id + ']');
        batting.removeChild(li);
        renderPlayer(change.doc);
      }
    });
  });
});


//bowling
var bowling = document.getElementById("bowling");

function renderPlayerBowl(doc) {  
  let liB = document.createElement('li');
  let divnameball = document.createElement('div');

  liB.setAttribute('class', 'row rounded-pill ball');
  liB.setAttribute('data-id', doc.id);
  divnameball.setAttribute('class', 'col-9 align-self-center nameball');
  divnameball.textContent = doc.data().name;

  liB.appendChild(divnameball);

  bowling.appendChild(liB);
};

nowinn.onSnapshot(function (doc) {
  currentinn = doc.data().inn;
  ballingNow = db.collection("bowling/inn" + currentinn + "/details").where("in", "==", true).limit(1);

  ballingNow.onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        renderPlayerBowl(change.doc);
      } else if (change.type == 'removed') {
        let liB = batting.querySelector('[data-id=' + change.doc.id + ']');
        bowling.removeChild(li);
      } else if (change.type == 'modified') {
        let liB = batting.querySelector('[data-id=' + change.doc.id + ']');
        bowling.removeChild(li);
        renderPlayerBowl(change.doc);
      }
    });
  });
});