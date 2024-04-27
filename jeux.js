let secreteNumber;

var hide = document.getElementById("hide");
var txt = document.getElementById("userGuess");
var test = document.getElementById("test");

hide.addEventListener("click" , function(){hide_number();});
test.addEventListener("click" , function(){test_number();}); 


function hide_number(){
    secreteNumber = Math.floor(Math.random()*100)+1;

}

function test_number(){
    let my_number = txt.value;
    my_number = parseInt(my_number);
    
//1// egal
if(my_number == secreteNumber) {
    alert ("les homme merciii.");
}


//2// sup
if(my_number > secreteNumber) {
    alert ("Inferieur !!");
}

//3// inf
if(my_number < secreteNumber) {
    alert ("Superieur !!");
}
}
//////////////////////
/*
function chekGuess(){
    const userGuess= document
    getElementByID("userGuess").value;
    if(userGuess==secreteNumber){
        alert ("les homme merciii.");
    } else{
const message=userGuess<secreteNumber?"bigger!":"smaller";
alert (message); }
}
*/