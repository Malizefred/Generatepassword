//password generator
let form=document.getElementById('form-element');
let password4=document.getElementById('password');
let alphabets=['a','j','k','l','r','y','h','s','n','v'];
let numbers=['6','8','0','4','7','2','5','3','1'];
let special=['#','@','!','.',',','%','$','^','&'];
// let password=[...alphabets,...numbers,...special]
let password=[];
let randomIndex=3;
password.push(...alphabets,...numbers,...special)
loadEventListener()
function loadEventListener(){
    form.addEventListener('submit', generatePassword)
}

function generatePassword(e){
    for(let i=0; i < 12; i++){
        randomIndex+=password[generateRandom()]
        password4.value=randomIndex;
        }
        
 e.preventDefault()
}
//generate random numbers

function generateRandom(){
    let random=Math.floor(Math.random()*password.length)
    return random
}
let copyBtn=document.querySelector('#copy');
copyBtn.addEventListener('click',copy);
function copy(){
    const generatedpassword=document.querySelector('#password').value;
    navigator.clipboard.writeText(`${generatedpassword}`);
}


