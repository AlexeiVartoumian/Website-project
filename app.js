let tally=0
const answers = ['true','false','true']

const btn = document.querySelector('.btn')

let q1 = document.getElementsByName('question-1')
let q1Answer;


let q2 = document.getElementsByName('question-2')
let q2Answer;

let q3 = document.getElementsByName('question-3')
let q3Answer;

console.log(q1)
console.log(q2)
console.log(q3)

btn.addEventListener('click', function(){
    
    //q1.forEach(function(val){
    //console.log(val)
    for (const answer of q1){
        if (answer.checked){
            q1Answer= answer.value
            
        }  
    }

    for (const answer of q2){
        if (answer.checked){
            q2Answer= answer.value
            
        }  
    }

    for (const answer of q3){
        if (answer.checked){
            q3Answer= answer.value
        }  
    }
    if(q1Answer === answers[0]){
        tally++
        console.log(tally)
    }
    if(q2Answer === answers[1]){
        tally++
        console.log(tally)
    }
    if(q3Answer === answers[2]){
        tally++
        console.log(tally)
    }
    alert(`You scored ${tally} out of 3!`)
    console.log(q1Answer)
    console.log(q2Answer)
    console.log(q3Answer)
//})
 clearTally()
})

function clearTally(){
    tally = 0
}

/*
for(var i = 0; i <q1.length; i++){
    if(q1[i].checked){
        q1Answer= q1[i].value
        console.log(q1Answer)
    }
}

*/
/*
let q1 = document.getElementById('question-1')
console.log(q1)

let q1Value;

if(document.getElementById('option-1').checked){
    q1Value = document.getElementById('r2').value
    console.log(q1Value)
}

*/
function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width 
		
	);
}

const avatar =document.querySelector('#player');
const coin = document.querySelector('#coin');
const coin2 = document.querySelector('.coin');

let score = 0;

window.addEventListener('keydown', function(e){
	if(e.key ==='ArrowDown' || e.key ==='Down'){
	moveVertical(avatar, 50)
	
} else if( e.key === 'ArrowUp' || e.key ==='up'){
	moveVertical(avatar, -50)
	
} else if( e.key === 'ArrowRight' || e.key ==='Right'){
	moveHorizontal(avatar, 50)
	avatar.style.transform = 'scale(1,1)'
	
}else if( e.key === 'ArrowLeft' || e.key ==='Left'){
	moveHorizontal(avatar,-50)
	avatar.style.transform= 'scale(-1,1)'
}
if(isTouching(avatar, coin)){ moveCoin()
score++
h3.innerHTML= `YOUR CURRENT SCORE IS ${score}`;
}
if(isTouching(avatar, coin2)){ moveCoin2()
	score++
	h3.innerHTML= `YOUR CURRENT SCORE IS ${score}`;
	}
})

const moveVertical = (element,amount) => {
	const currentTop= extractPosition(element.style.top);
	element.style.top = `${currentTop + amount}px`
}
const moveHorizontal = (element,amount) => {
	const currentLeft= extractPosition(element.style.left);
	element.style.left = `${currentLeft + amount}px`
}


const extractPosition = (pos) => {
	if(!pos) return 100;
	//turn string into number
	return parseInt(pos.slice(0,-2))
}

const moveCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`
	
}
const moveCoin2 = () => {
	const y = Math.floor(Math.random() * window.innerHeight)
	const x = Math.floor(Math.random() * window.innerWidth)
	coin2.style.top = `${y}px`
	coin2.style.left = `${x}px`
	
}


moveCoin()



const h3 = document.querySelector('.score-tracker')
h3.innerHTML += `YOUR CURRENT SCORE IS ${score}`


function playAudio(){
	music.play()
	var theCount = 60 * 1.36666666666,
	display = document.querySelector('#time');
	startTimer(theCount, display);
	resetTimeout()
	
}


function startTimer(duration,display){
	var timer = duration,minutes,seconds;
	setInterval(function(){
		minutes = parseInt(timer/60,10);
		seconds = parseInt(timer % 60,10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = minutes + ":" + seconds;

		if(--timer <0){
			timer = duration
			gameOver()
		}
		
	}, 1000)
	
}
let timeOut = setTimeout("location.reload(true);",82000)

function resetTimeout(){
	clearTimeout(timeOut);
	timeOut=setTimeout("location.reload(true);",82000)
	avatar.style.position = "absolute"
	avatar.style.top="100px"
	avatar.style.left = "100px"
	
}

function gameOver(){
	alert(h3.innerHTML=`Game over! your final score is ${score}`)
}

const music = document.querySelector('#music')


music.addEventListener('focus',function(){this.blur();},false);
