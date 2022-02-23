import React from 'react'

const App = () => {

var randNum;
var limit = Math.floor(Math.random()*(33-25)+25);;
console.log("limit: ", limit)
var bodytemp = 35;
var fishes = 0;
var fishbet = "y";

while (bodytemp > limit && fishbet === 'y') {
randNum = Math.floor(Math.random()*2+1);
console.log("rand-luku: ", randNum)
limit = Math.floor(Math.random()*(33-25)+25);
console.log("new limit: ", limit)
fishbet = prompt("Do you want to ice fish for a while? Press y (yes) or no (n).");
if (randNum === 1)
{
bodytemp--;
fishes++;
alert("Got a fish! Your body temperature: " + bodytemp);
}
else if (randNum === 2)
{
bodytemp--;
alert("No bites atm. Your body temperature: " + bodytemp);
}
}

if (fishbet === 'n' && fishes === 0)
{
alert("Leaving so soon?");
}
else if (fishbet === 'n' && fishes > 0)
{
alert("A fine decision to return to the shore when you still can. You got " + fishes + "  fishes with you!");
}
else if (fishbet === 'y' && bodytemp === limit) 
{
alert("Brrr! You reached hypothermy and also lost all your " + fishes + " fishes!");
}


return (
<div>
<img src="/pilkkichat_tausta.jpg" alt="pilkkichat"></img>
</div>
);
}

export default App;
