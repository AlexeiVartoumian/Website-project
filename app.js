
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