
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const {actionssdk} = require('actions-on-google');
const app = actionssdk({debug: true});

app.intent('actions.intent.MAIN', (conv) => {
  conv.ask('<speak>Hi.<break time="1"/> ' +
  ' Say the name of two characters from Marvel or DC and find out who\'s gonna win.</speak>');
});

app.intent('actions.intent.TEXT', (conv, input) => {
  var characters = ["Superman", "Thor", "Iron"]
  var rawInput = input.toLowerCase() ;
  var p = rawInput.toString().split(' and ');
  if (rawInput ==='bye') {
    return conv.close('Goodbye! See you soon. Next time it\'s gonna be a tough match!!');
  }
  if(typeof(p[1])==="undefined")
  {
    p = rawInput.split(' ');
  }
  if(typeof(p[1])==="undefined")
  {
    return conv.ask('<speak>Enter two names, although we know that you are best for yourself!!.</speak>');
  }
  if (input ==='bye') {
    return conv.close('Goodbye!');
  }
  if(typeof(p[3])!=="undefined")
  {
    conv.ask('<speak>Unusual names. I must say.</speak>');
  }
  for(var j=0;j<p[0].length;j++)
  {
    if(p[0][j]==='l')
    L++;
    if(p[0][j]==='o')
    O++;
    if(p[0][j]==='v')
    V++;
    if(p[0][j]==='e')
    E++;
  }
  for( j=0;j<p[1].length;j++)
  {
    if(p[1][j]==='l')
    L++;
    if(p[1][j]==='o')
    O++;
    if(p[1][j]==='v')
    V++;
    if(p[1][j]==='e')
    E++;
  }
  for(var i=0;i<p[0].length;i++){
    for( j=0;j<p[1].length;j++){
      if(p[1][j]===p[0][i])
      com++;
    }
  }
  var ans=((L+O)*(L+V)*(L+E)*(O+V)*(O+E)*(V+E)+com+L+O+V+E)%100
  if(ans<50)
  ans=ans*2;
  if(ans<20)
  ans=ans*2;
  if(ans>42&&ans<47)
  ans=ans+40;
  if(p[1]==='arpit'||p[0]==='arpit')
  ans=100;
  if(ans<20)
  return  conv.ask('<speak>Well your score is ' +
  ans +' percent . Well you sure its her because it looks like something is missing between you two!!. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
  if(ans<40)
  return  conv.ask('<speak>Your score is ' +
  ans +' percent. Okay percentage seems to be low but I know you will prove us wrong! GOOD LUCK. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
  if(ans<60)
  return  conv.ask('<speak>Well the score is ' +
  ans +' percent. I think it is perfect from your side but not looks great from other end!. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
  if(ans<70)
  return  conv.ask('<speak>Your score is ' +
  ans +' percent. Don\'t worry try your nick names your score might increase!. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
  if(ans<88)
  return  conv.ask('<speak>' +
  ans +' percent!!. Its awesome, start naming your kids. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
  if(ans<100)
  return  conv.ask('<speak>Woah its ' +
  ans +' percent. I think it would not be wrong to say that '+ p[0] +' and ' +p[1]+ ' are perfect for each other. Just get a room!. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that. </speak>');
  if(ans===100)
  return  conv.ask('<speak>Its 100 percent. Either you both are made for each other or you have crush on developer!!. You can try another names, we won\'t tell anyone! But if you want to quit its your choice, just say bye for that.</speak>');
});

exports.myfunction = functions.https.onRequest(app);
