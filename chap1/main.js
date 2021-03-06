/*Music and Sound*/
var audiobgm = document.getElementById("bgm") 
var moviegif = document.getElementById("bggif") 
var stars = document.getElementById("bggif") 
var soundnextpage2 = new Audio("Music/Ch1_02_SE03_NextPage.mp3")
var soundnextpage3 = new Audio("Music/Ch1_03_SE03_NextPage.mp3")
var soundnextpage4 = new Audio("Music/Ch1_04_SE02_NextPage.mp3")
var soundnextpage4_2 = new Audio("Music/Ch1_04-1_SE02_NextPage.mp3")
var soundnextpage5 = new Audio("Music/Ch1_05_SE03_NextPage.mp3")
var soundnextpage7 = new Audio("Music/Ch1_07_SE02_NextPage.mp3")
var soundnextpage8 = new Audio("Music/Ch1_08_SE02_NextPage.mp3")
var soundnextpage10 = new Audio("Music/Ch1_10_SE01_Nextpage.mp3")
var soundnextpage14 = new Audio("Music/Ch1_14_SE02_Nextpage.mp3")
/*1-2*/
var switchon = new Audio("Music/Ch1_02_SE01_SwitchOn.mp3")
var switchoff = new Audio("Music/Ch1_02_SE02_SwitchOff.mp3")
/*1-3*/
var soundfade1 = new Audio("Music/Ch1_03_SE01_Fade.mp3")
var soundfade2 = new Audio("Music/Ch1_03_SE02_Fade.mp3")
/*1-4*/
var soundflipbook = new Audio("Music/Ch1_04_SE01_FlipBook.mp3")
/*1-4-1*/
var soundnotification = new Audio("Music/Ch1_04-1_SE01_Notification.mp3")
/*1-5*/
var soundfailed = new Audio("Music/Ch1_05_SE01_FailedSound.mp3")
var soundfinish = new Audio("Music/Ch1_05_SE01_FinishSound.mp3")
/*1-7*/
var soundmsg1 = new Audio("Music/Ch1_07_SE01_MsgSound.mp3")
/*1-8*/
var soundchips1 = new Audio("Music/Ch1_08_SE01_Chips.mp3")
/*1-14*/
var soundchips2 = new Audio("Music/Ch1_14_SE01_Chips.mp3")

/*cover*/

function playmusic(){
  audiobgm.play();
}



var sec = 0, num = 5;
Timer();
function Timer(){
  if(sec<num || document.readyState != "complete") setTimeout("subSomething();Timer();",1000); 
  sec++;
}
document.onreadystatechange = subSomething;
function subSomething(){
  if(document.readyState == "complete" && sec >= 5){ 
    document.getElementById("cover").style.display = "none";
    document.getElementById("1-2").style.display = "block";
    document.getElementById("nextpage2").style.display = "none";
    document.getElementById("nextpage3").style.display = "none";
    document.getElementById("nextpage4").style.display = "none";
    document.getElementById("nextpage4-1").style.display = "none";
    document.getElementById("nextpage5").style.display = "none";
    document.getElementById("nextpage7").style.display = "none";
    document.getElementById("nextpage8").style.display = "none";
    document.getElementById("nextpage10").style.display = "none";
    document.getElementById("nextpage14").style.display = "none";
    nexttwo();
  }
}




/*1-2*/
var nexttime = 0, stoptime = 5;
function nexttwo(){
  // console.log(nexttime);
  nexttime++;
  if(nexttime == stoptime-1) document.getElementById("nextpage2").style.display = "block";
  if(nexttime < stoptime) setTimeout("nexttwo();",1000);
}

function flicker() {
  switchon.play();
  document.getElementById("flicker").style.display = "block";
}

function nonflicker() {
  switchoff.play();
  document.getElementById("normal").style.display = "block";
  document.getElementById("flicker").style.display = "none";
}

function changepages() {
  document.getElementById("1-3").style.display = "block";
  document.getElementById("1-2").style.display = "none";
  // soundnextpage2.play();
  // nexttwo();
}

// function bgmtwo(){
//   var bgm1 = new Audio("Music/BGM_Ch1_01.wav")
//   if($("1-2").is(":visible")){
//     bgm1.load();
//     bgm1.play();
//   }
// }



$(document).ready(function() {

  var audio  = new Audio("Music/Ch1_02_SE01_SwitchOn.wav");
  var audio2 = new Audio("Music/Ch1_02_SE02_SwitchOff.wav")

  $(".z2").mousedown(function() {
    audio2.load();
    audio2.play();
  });

  $(".z1").mouseup(function() {
    audio.load();
    audio.play();
  });
});



/*1-3*/
var i=-0.2; var alpoutside=1.0;
function transparentoutside(){
    alpoutside=alpoutside+i;
    document.getElementById('outside').style.opacity= alpoutside;

    if(alpoutside < 0.0){
      document.getElementById("outside1").style.display = "none";
    }
}

var l=-0.2; var alplight=1.0;
function transparentlight(){
    alplight=alplight+l;
    document.getElementById('light').style.opacity= alplight;

    if(alplight < 0.0){
      document.getElementById("light1").style.display = "none";
    }
}

function turn() {
  document.getElementById("scratch").style.display = "block";
  document.getElementById("turn").style.display = "none";
  document.getElementById("breathe").style.display = "none";
  document.getElementById("wake").style.display = "none";
}

function scratch() {
  document.getElementById("breathe").style.display = "block";
  document.getElementById("turn").style.display = "none";
  document.getElementById("scratch").style.display = "none";
  document.getElementById("wake").style.display = "none";
}
function breathe() {
  document.getElementById("wake").style.display = "block";
  document.getElementById("turn").style.display = "none";
  document.getElementById("scratch").style.display = "none";
  document.getElementById("breathe").style.display = "none";
}

function wake() {
  document.getElementById("turn").style.display = "block";
  document.getElementById("wake").style.display = "none";
  document.getElementById("scratch").style.display = "none";
  document.getElementById("breathe").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function(event) {
   var button = document.getElementById('light');
   var one = document.getElementById('flowerone');
   var two = document.getElementById('flowertwo');
   var three = document.getElementById('flowerthree');
   var four = document.getElementById('flowerfour');
   var five = document.getElementById('flowerfive');
   var count = 0;

   button.addEventListener('click', function(e) {
       e.preventDefault();
       count++;

       if(count == 1){
           flowerone.style.display = 'block';
       }
       if(count == 2){
           flowertwo.style.display = 'block';
       }
       if(count == 3){
           flowerthree.style.display = 'block';
       }
       if(count == 4){
           flowerfour.style.display = 'block';
       }
       if(count == 5){
           flowerfive.style.display = 'block';
           document.getElementById("nextpage3").style.display = "block";
       }
    }, false);
});

function changepagesfour() {
  document.getElementById("1-4").style.display = "block";
  document.getElementById("1-3").style.display = "none";
  // soundnextpage3.play();
  nextfour();
}
function changepagesbacktwo() {
  document.getElementById("1-2").style.display = "block";
  document.getElementById("1-3").style.display = "none";
}




/*1-4*/
var nexttime4 = 0;
function nextfour(){
  // console.log(nexttime);
  nexttime4++;
  if(nexttime4 == stoptime-1) document.getElementById("nextpage4").style.display = "block";
  if(nexttime4 < stoptime) setTimeout("nextfour();",1000);
}

function transparentupone() {
  // console.log('u1');
  document.getElementById("upone").style.display = "none";
  document.getElementById("uptwo").style.display = "block";
  document.getElementById("upthree").style.display = "none";
}
function transparentuptwo() {
  // console.log('u2');
  document.getElementById("upone").style.display = "none";
  document.getElementById("uptwo").style.display = "none";
  document.getElementById("upthree").style.display = "block";
}
function transparentupthree() {
  // console.log('u3');
  document.getElementById("upone").style.display = "block";
  document.getElementById("uptwo").style.display = "none";
  document.getElementById("upthree").style.display = "none";
}

function transparentmidone() {
  // console.log('m1');
  document.getElementById("midone").style.display = "none";
  document.getElementById("midtwo").style.display = "block";
  document.getElementById("midthree").style.display = "none";
}
function transparentmidtwo() {
  // console.log('m2');
  document.getElementById("midone").style.display = "none";
  document.getElementById("midtwo").style.display = "none";
  document.getElementById("midthree").style.display = "block";
}
function transparentmidthree() {
  // console.log('m3');
  document.getElementById("midone").style.display = "block";
  document.getElementById("midtwo").style.display = "none";
  document.getElementById("midthree").style.display = "none";
}

function transparentdownone() {
  // console.log('d1');
  document.getElementById("downone").style.display = "none";
  document.getElementById("downtwo").style.display = "block";
  document.getElementById("downthree").style.display = "none";
}
function transparentdowntwo() {
  // console.log('d2');
  document.getElementById("downone").style.display = "none";
  document.getElementById("downtwo").style.display = "none";
  document.getElementById("downthree").style.display = "block";
}
function transparentdownthree() {
  // console.log('d3');
  document.getElementById("downone").style.display = "block";
  document.getElementById("downtwo").style.display = "none";
  document.getElementById("downthree").style.display = "none";
}

function changepagesfourtwo() {
  document.getElementById("1-4-1").style.display = "block";
  document.getElementById("1-4").style.display = "none";
  // soundnextpage4.play();
  audiobgm.src = 'Music/BGM_CH1_04-1.mp3';
  nextfourone();
}
function changepagesbackthree() {
  document.getElementById("1-3").style.display = "block";
  document.getElementById("1-4").style.display = "none";
}


/*1-4-1*/
var nexttime4_1 = 0;
function nextfourone(){
  // console.log(nexttime);
  nexttime4_1++;
  if(nexttime4_1 == stoptime-1) document.getElementById("nextpage4-1").style.display = "block";
  if(nexttime4_1 < stoptime) setTimeout("nextfourone();",1000);
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function delayedGreeting() {
  document.getElementById("kidturn").style.display = "block";
  document.getElementById("mobile").style.display = "none";
  await sleep(1500);
  document.getElementById("mobile").style.display = "block";
  document.getElementById("kidturn").style.display = "none";
}
function mobileclick() {
  soundnotification.play();
  delayedGreeting();
}
function changepagesfive() {
  document.getElementById("1-5").style.display = "block";
  document.getElementById("1-4-1").style.display = "none";
  // soundnextpage4_2.play();
}
function changepagesbackfour() {
  document.getElementById("1-4").style.display = "block";
  document.getElementById("1-4-1").style.display = "none";
  audiobgm.src = 'Music/BGM_Ch1_02.mp3';
}







/*1-5*/
// window.onload = function() {
//   // find the element that you want to drag.
//   var box = document.getElementById('box');

//   /* listen to the touchMove event,
//   every time it fires, grab the location
//   of touch and assign it to box */

//   box.addEventListener('touchmove', function(e) {
//     // grab the location of touch
//     var touchLocation = e.targetTouches[0];

//     // assign box new coordinates based on the touch.
//     box.style.left = touchLocation.pageX + 'px';
//     box.style.top = touchLocation.pageY + 'px';
//   })

//   /* record the position of the touch
//   when released using touchend event.
//   This will be the drop position. */

//   box.addEventListener('touchend', function(e) {
//     // current box position.
//     var x = parseInt(box.style.left);
//     var y = parseInt(box.style.top);
//   })

// }




function changepagesseven() {
  document.getElementById("1-7").style.display = "block";
  document.getElementById("1-5").style.display = "none";
  shineone();
  shinetwo();
  shinethree();
  audiobgm.src = 'Music/BGM_CH1_07.mp3';
  // soundnextpage5.play();
  nextseven();
}
function changepagesbackfourone() {
  document.getElementById("1-4-1").style.display = "block";
  document.getElementById("1-5").style.display = "none";
}




/*1-7*/
var nexttime7 = 0;
function nextseven(){
  // console.log(nexttime);
  nexttime7++;
  if(nexttime7 == stoptime-1) document.getElementById("nextpage7").style.display = "block";
  if(nexttime7 < stoptime) setTimeout("nextseven();",1000);
}

function maskstarclick() {
  document.getElementById("maskstar").style.display = "block";
  document.getElementById("maskstarclose").style.display = "block";
  document.getElementById("maskstarunlike").style.display = "block";
  document.getElementById("maskstarunshare").style.display = "block";
  document.getElementById("maskstarlike").style.display = "none";
  document.getElementById("maskstarshare").style.display = "none";
}
function maskstarclose() {
  document.getElementById("maskstar").style.display = "none";
}
function maskstarlike() {
  soundmsg1.play();
  // document.getElementById("maskstarlike").style.display = "block";
  document.getElementById("maskstar").style.display = "none";
  document.getElementById("maskstarunlike").style.display = "none";
}
function maskstarunlike() {
  document.getElementById("maskstarlike").style.display = "none";
  document.getElementById("maskstarunlike").style.display = "block";
}
function maskstarshare() {
  soundmsg1.play();
  // document.getElementById("maskstarshare").style.display = "block";
  document.getElementById("maskstar").style.display = "none";
  document.getElementById("maskstarunshare").style.display = "none";
}
function maskstarunshare() {
  document.getElementById("maskstarshare").style.display = "none";
  document.getElementById("maskstarunshare").style.display = "block";
}

function catstarclick() {
  document.getElementById("catstar").style.display = "block";
  document.getElementById("catstarclose").style.display = "block";
  document.getElementById("catstarunlike").style.display = "block";
  document.getElementById("catstarunshare").style.display = "block";
  document.getElementById("catstarlike").style.display = "none";
  document.getElementById("catstarshare").style.display = "none";
}
function catstarclose() {
  document.getElementById("catstar").style.display = "none";
}
function catstarlike() {
  soundmsg1.play();
  // document.getElementById("catstarlike").style.display = "block";
  document.getElementById("catstar").style.display = "none";
  document.getElementById("catstarunlike").style.display = "none";
}
function catstarunlike() {
  document.getElementById("catstarlike").style.display = "none";
  document.getElementById("catstarunlike").style.display = "block";
}
function catstarshare() {
  soundmsg1.play();
  // document.getElementById("catstarshare").style.display = "block";
  document.getElementById("catstar").style.display = "none";
  document.getElementById("catstarunshare").style.display = "none";
}
function catstarunshare() {
  document.getElementById("catstarshare").style.display = "none";
  document.getElementById("catstarunshare").style.display = "block";
}

function bottlestarclick() {
  document.getElementById("bottlestar").style.display = "block";
  document.getElementById("bottlestarclose").style.display = "block";
  document.getElementById("bottlestarunlike").style.display = "block";
  document.getElementById("bottlestarunshare").style.display = "block";
  document.getElementById("bottlestarlike").style.display = "none";
  document.getElementById("bottlestarshare").style.display = "none";
}
function bottlestarclose() {
  document.getElementById("bottlestar").style.display = "none";
}
function bottlestarlike() {
  soundmsg1.play();
  // document.getElementById("bottlestarlike").style.display = "block";
  document.getElementById("bottlestar").style.display = "none";
  document.getElementById("bottlestarunlike").style.display = "none";
}
function bottlestarunlike() {
  document.getElementById("bottlestarlike").style.display = "none";
  document.getElementById("bottlestarunlike").style.display = "block";
}
function bottlestarshare() {
  soundmsg1.play();
  // document.getElementById("bottlestarshare").style.display = "block";
  document.getElementById("bottlestar").style.display = "none";
  document.getElementById("bottlestarunshare").style.display = "none";
}
function bottlestarunshare() {
  document.getElementById("bottlestarshare").style.display = "none";
  document.getElementById("bottlestarunshare").style.display = "block";
}

function changepageseight() {
  // soundnextpage7.play();
  document.getElementById("1-8").style.display = "block";
  document.getElementById("1-7").style.display = "none";
  nexteight();
}
function changepagesbackfive() {
  document.getElementById("1-5").style.display = "block";
  document.getElementById("1-7").style.display = "none";
  audiobgm.src = 'Music/BGM_CH1_04-1.mp3';
}

var starone = 1,startwo = 0.6,starthree = 0.3, 
  turningone = 0,turningtwo = 0,turningthree = 0;
function shineone(){
  if(turningone == 0) starone-=0.1;
  else if(turningone == 1) starone+=0.1;
  if(starone >= 1) turningone = 0;
  else if(starone <= 0.2) turningone = 1;
  document.getElementById("starone").style.opacity = starone;
  setTimeout("shineone()",150);
}
function shinetwo(){
  if(turningtwo == 0) startwo-=0.1;
  else if(turningtwo == 1) startwo+=0.1;
  if(startwo >= 1) turningtwo = 0;
  else if(startwo <= 0.2) turningtwo = 1;
  document.getElementById("startwo").style.opacity = startwo;
  setTimeout("shinetwo()",150);
}
function shinethree(){
  if(turningthree == 0) starthree-=0.1;
  else if(turningthree == 1) starthree+=0.1;
  if(starthree >= 1) turningthree = 0;
  else if(starthree <= 0.2) turningthree = 1;
  document.getElementById("starthree").style.opacity = starthree;
  setTimeout("shinethree()",150);
}



/*1-8*/
var nexttime8 = 0;
function nexteight(){
  // console.log(nexttime);
  nexttime8++;
  if(nexttime8 == stoptime-1) document.getElementById("nextpage8").style.display = "block";
  if(nexttime8 < stoptime) setTimeout("nexteight();",1000);
}

function changepagesten() {
  // soundnextpage8.play();
  document.getElementById("1-10").style.display = "block";
  document.getElementById("1-8").style.display = "none";
  moviegif.play();
  //audiobgm.src = 'Music/BGM_CH1_10.mp3';
  //bggif.src = 'img/Chap1/1-10/1-10_1-13_gif.gif'
  moviegif.src = 'img/Chap1/1-10/1-10~1-13.mp4'
  audiobgm.src = 'Music/BGM_Ch1_00.mp3';
  nextten();
}
function changepagesbackseven() {
  document.getElementById("1-7").style.display = "block";
  document.getElementById("1-8").style.display = "none";
}


/*1-10*/
var nexttime10 = 0,stoptime10 = 18;
function nextten(){
  // console.log(nexttime);
  nexttime10++;
  if(nexttime10 == stoptime10-1) document.getElementById("nextpage10").style.display = "block";
  if(nexttime10 < stoptime10) setTimeout("nextten();",1000);
}

function changepageseleven() {
  // soundnextpage10.play();
  document.getElementById("1-14").style.display = "block";
  document.getElementById("1-10").style.display = "none";
  audiobgm.src = 'Music/BGM_CH1_14.mp3';
  bggif.src = "img/Chap1/1-10/1_10_bg.png"
}
function changepagesbackeight() {
  document.getElementById("1-8").style.display = "block";
  document.getElementById("1-10").style.display = "none";
  audiobgm.src = 'Music/BGM_CH1_07.mp3';
  bggif.src = "img/Chap1/1-10/1_10_bg.png"

  
}

/*1-11*/
function changepagestwelve() {
  document.getElementById("1-12").style.display = "block";
  document.getElementById("1-11").style.display = "none";
}
function changepagesbackten() {
  document.getElementById("1-10").style.display = "block";
  document.getElementById("1-11").style.display = "none";
}



/*1-12*/
function changepagesthirteen() {
  document.getElementById("1-13").style.display = "block";
  document.getElementById("1-12").style.display = "none";
}
function changepagesbackeleven() {
  document.getElementById("1-11").style.display = "block";
  document.getElementById("1-12").style.display = "none";
}

/*1-13*/
function changepagesfourteen() {
  document.getElementById("1-14").style.display = "block";
  document.getElementById("1-13").style.display = "none";
}
function changepagesbacktwelve() {
  document.getElementById("1-12").style.display = "block";
  document.getElementById("1-13").style.display = "none";
}

/*1-14*/
// function changepagesfifteen() {
//   soundnextpage14.play();
//   document.getElementById("1-15").style.display = "block";
//   document.getElementById("1-14").style.display = "none";
// }
function changepagesbackthirteen() {
  document.getElementById("1-10").style.display = "block";
  document.getElementById("1-14").style.display = "none";
  moviegif.play();
  moviegif.src = 'img/Chap1/1-10/1-10~1-13.mp4'
  audiobgm.src = 'Music/BGM_Ch1_00.mp3';
  //audiobgm.src = 'Music/BGM_CH1_10.mp3';
  //bggif.src = 'img/Chap1/1-10/1-10_1-13_gif.gif';
}

document.addEventListener("DOMContentLoaded", function(event) {
  var button = document.getElementById('cookiesbag');
  var one = document.getElementById('cookieone');
  var two = document.getElementById('cookietwo');
  var three = document.getElementById('cookiethree');
  var count = 0;

  button.addEventListener('click', function(e) {
      e.preventDefault();
      soundchips2.play();
      count++;
      if(count == 1){
        one.style.display = 'block';
      }
      if(count == 2){
        two.style.display = 'block';
      }
      if(count == 3){
        three.style.display = 'block';
        button.style.display = 'none';
      }
   }, false);
});
