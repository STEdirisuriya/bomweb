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
      inning.innerHTML  = '1<sup>st</sup> Inning';
    }else if(innnum == "2"){
      inning.innerHTML  = '2<sup>nd</sup> Inning';
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

//now inn(schoolname, inningtype)

var school = document.getElementById('school');
var bg = document.getElementById('bg');
var logo = document.getElementById('logo');

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

//batting
var batting = document.getElementById("batting");

function renderPlayer(doc){
  let divplayer = document.createElement('div');
  let divname = document.createElement('div');
  let divscore = document.createElement('div');

  divplayer.setAttribute('class', 'row rounded-pill bat');
  divplayer.setAttribute('data-id', doc.id);
  divname.setAttribute('class', 'col-9 align-self-center namebat');
  divname.textContent = doc.name;
  divscore.setAttribute('class', 'col align-self-center pointsbat rounded-pill');
  divscore.textContent = doc.points;

  divplayer.appendChild(divname);
  divplayer.appendChild(divscore);

  batting.appendChild(divplayer);
};

nowinn.onSnapshot(function(doc) {
  currentinn = doc.data().inn;
  battingnow = db.collection("batting/inn" + currentinn + "/players").where("in", "==", true).limit(2);

  battingnow.onSnapshot(function(playerdoc) {
    let changes = playerdoc.docChanges();
    changes.forEach(function(change)  {
        console.log(change.doc.data());
        // if(div == undefined){
            let div = batting.querySelector('[data-id=' + change.doc.data().id + ']');
            batting.removeChild(div);
            renderPlayer(change.doc.data());
        // } else {
        //     let div = batting.querySelector('[data-id=' + change.doc.data().id + ']');
        //     batting.removeChild(div);
        //     renderPlayer(change.doc.data());
        // }
    });
});
});
//   battingnow.onSnapshot(function(querySnapshot) {
//       var players = [];
//       querySnapshot.forEach(function(doc) {
//         //var players = players.push(doc.data().name);
//             //console.log(change.doc.data());
//             // //renderPlayers(doc.data().name);
//             // if(doc.data().in == 'true'){
//               renderCafe(doc.data());
//             // } else if (change.type == 'removed'){
//             //     // let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
//             //     // cafeList.removeChild(li);
//             // }
              

//             function renderCafe(doc){
//               var playerArr;
                  
//               playerArr += '<div class="row rounded-pill bat">';
//               playerArr += '<div class="col-9 align-self-center namebat">';
//               playerArr += doc.name;
//               playerArr += '</div>';
//               playerArr += '<div class="col align-self-center pointsbat rounded-pill">';
//               playerArr += 50;
//               playerArr += '</div>';
//               playerArr += '</div>';
      
//               batting.innerHTML += playerArr;
//             }
//               // let name = document.createElement('span');
//               // // let city = document.createElement('span');
//               // // let cross = document.createElement('div');
            
//               // //li.setAttribute('data-id', doc.name);
//               // name.textContent = doc;
//               // //city.textContent = doc.data().city;
//               // //cross.textContent = 'x';
            
//               // li.appendChild(name);
//               // // li.appendChild(city);
//               // // li.appendChild(cross);
            
              
            
//             // }
          
//       });
      
      
//       //console.log("Current players: ", players.join(", "));
//   });
// });


// battingnow = db.collection("batting").doc("inn1/players/nen3QW3BhhTGqkZ1TCfW");
// var batting = document.getElementById('batting');
// //console.log("playinn "+  nowinn);

// battingnow.onSnapshot(function(doc) {
//   battingtext = doc.data().in;
//   console.log(battingtext);
//   // if(schoolname == 'ananda'){
//   //   school.innerHTML = "Ananda College";
//   //   logo.src='./assets/Ananda.png';
//   // }else if(schoolname == 'nalanda'){
//   //   school.innerHTML = "Nalanda College";
//   //   logo.src='./assets/Nalanda.png';
//   // }
//   // playinn = doc.data().inn;
// } 
// );
// nowinn.where("population", ">", 100000).orderBy("population").limit(2).onSnapshot(function(doc) {
//   schoolname = doc.data().play;
//   if(schoolname == 'ananda'){
//     school.innerHTML = "Ananda College";
//     logo.src='./assets/Ananda.png';
//   }else if(schoolname == 'nalanda'){
//     school.innerHTML = "Nalanda College";
//     logo.src='./assets/Nalanda.png';
//   }
//   playinn = doc.data().inn;
// } 
// );
