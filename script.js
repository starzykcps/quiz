
let input1 = document.querySelector(".q1");
let input2 = document.querySelector(".q2");
let button = document.querySelector("button");
let results = document.querySelector(".results");


button.onclick = function(){
    console.log("button check");
let answer1 = input1.value;
let answer2 = input2.value;

if(answer1 === "tall" && answer2 ==="snack"){
    console.log("shagy");
} else if (answer1 === "tall" && answer2 ==="sub"){
    console.log("fred");
}else if (answer1 === "short" && answer2 ==="snack"){
    console.log("scooby doo");
} else if (answer1 === "short" && answer2 ==="sub"){
    console.log("thelma");
} else {
    console.log("dafney");
}



};