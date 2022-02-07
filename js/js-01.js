
// even hander clicbaji 2
// most used 2
function makeRed(){
    document.body.style.backgroundColor='yellow';
}
// even hander clicbaji 3
const bluebutton = document.getElementById('blue');
bluebutton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// even hander clicbaji 4
// handle event using anonymus function

const greenButton = document.getElementById('green');
greenButton.onclick = function (){
    document.body.style.backgroundColor='green';
}
// even hander clicbaji 5
const pinkButton = document.getElementById('pink');
pinkButton.addEventListener('click',makePink )
function makePink(){
    document.body.style.backgroundColor='pink';
}
// even hander clicbaji 6
const cyanButton = document.getElementById('cyan');
cyanButton.addEventListener('click', function (){document.body.style.backgroundColor='cyan';
})
// even hander clicbaji 7
// direact shortcut
// most used 1
document.getElementById('violet').addEventListener('click', function(){
    document.body.style.backgroundColor='violet';
})