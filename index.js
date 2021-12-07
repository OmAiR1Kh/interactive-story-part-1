//////////////////// senario 2 //////////////////

let btnSenario_1 = document.querySelector("#btn_senario_1");
let btnSenario_2 = document.querySelector("#btn_senario_2");
let btnSenario_3 = document.querySelector("#btn_senario_3");

let senario_1 = document.querySelector(".senario_1");
let senario_2 = document.querySelector(".senario_2");
let senario_3 = document.querySelector(".senario_3");

btnSenario_1.addEventListener("click", ()=>{
    senario_1.style.display = "block";
    senario_2.style.display = "none";
    senario_3.style.display = "none";
    btnSenario_1.classList.add("btn1-click");
    btnSenario_2.classList.remove("btn1-click");
    btnSenario_3.classList.remove("btn1-click");
    
});

btnSenario_2.addEventListener("click", ()=>{
    senario_1.style.display = "none";
    senario_2.style.display = "block";
    senario_3.style.display = "none";
    btnSenario_1.classList.remove("btn1-click");
    btnSenario_2.classList.add("btn1-click");
    btnSenario_3.classList.remove("btn1-click");
});

btnSenario_3.addEventListener("click", ()=>{
    senario_1.style.display = "none";
    senario_2.style.display = "none";
    senario_3.style.display = "block";
    btnSenario_1.classList.remove("btn1-click");
    btnSenario_2.classList.remove("btn1-click");
    btnSenario_3.classList.add("btn1-click");
});


//////////////////// senario 2 //////////////////


let btnSenario_2_1 = document.querySelector("#btn_senario_2_1");
let btnSenario_2_2 = document.querySelector("#btn_senario_2_2");

let senario_2_1 = document.querySelector(".senario_2_1");

btnSenario_2_1.addEventListener("click", ()=>{
    senario_2_1.style.display = "block";
    btnSenario_2_1.classList.add("btn1-click");
});

btnSenario_2_2.addEventListener("click", ()=>{
    senario_2.style.display = "none";
    senario_3.style.display = "block";
    btnSenario_2.classList.remove("btn1-click");
    btnSenario_3.classList.add("btn1-click");
});

let btnSenario_2_1_1 = document.querySelector("#btn_senario_2_1_1");
let btnSenario_2_1_2 = document.querySelector("#btn_senario_2_1_2");

let senario_2_1_1 = document.querySelector(".senario_2_1_1");
let senario_2_1_2 = document.querySelector(".senario_2_1_2");

btnSenario_2_1_1.addEventListener("click", ()=>{
    senario_2_1_1.style.display = "block";
    senario_2_1_2.style.display = "none";
    btnSenario_2_1_1.classList.add("btn1-click");
    btnSenario_2_1_2.classList.remove("btn1-click");
});

btnSenario_2_1_2.addEventListener("click", ()=>{
    senario_2_1_1.style.display = "none";
    senario_2_1_2.style.display = "block";
    btnSenario_2_1_1.classList.remove("btn1-click");
    btnSenario_2_1_2.classList.add("btn1-click");
});


//////////////////// senario 3 //////////////////

////////////// senario 3_1 ///////////

let btnSenario_3_1 = document.querySelector("#senario_3_1");
let btnSenario_3_2 = document.querySelector("#senario_3_2");

let senario_3_1 = document.querySelector(".senario_3_1");
let senario_3_2 = document.querySelector(".senario_3_2");

btnSenario_3_1.addEventListener("click", ()=>{
    senario_3_1.style.display = "block";
    senario_3_2.style.display = "none";
    btnSenario_3_1.classList.add("btn1-click");
    btnSenario_3_2.classList.remove("btn1-click");
});

btnSenario_3_2.addEventListener("click", ()=>{
    senario_3_1.style.display = "none";
    senario_3_2.style.display = "block";
    btnSenario_3_1.classList.remove("btn1-click");
    btnSenario_3_2.classList.add("btn1-click");
});


let btnSenario_3_1_1 = document.querySelector("#senario_3_1_1");
let btnSenario_3_1_2 = document.querySelector("#senario_3_1_2");

let senario_3_1_1 = document.querySelector(".senario_3_1_1");
let senario_3_1_2 = document.querySelector(".senario_3_1_2");

btnSenario_3_1_1.addEventListener("click", ()=>{
    senario_3_1_1.style.display = "block";
    senario_3_1_2.style.display = "none";
    btnSenario_3_1_1.classList.add("btn1-click");
    btnSenario_3_1_2.classList.remove("btn1-click");
});

btnSenario_3_1_2.addEventListener("click", ()=>{
    senario_3_1_1.style.display = "none";
    senario_3_1_2.style.display = "block";
    btnSenario_3_1_1.classList.remove("btn1-click");
    btnSenario_3_1_2.classList.add("btn1-click");
});


let btnSenario_3_1_1_1 = document.querySelector("#senario_3_1_1_1");
let btnSenario_3_1_1_2 = document.querySelector("#senario_3_1_1_2");

let senario_3_1_1_1 = document.querySelector(".senario_3_1_1_1");
let senario_3_1_1_2 = document.querySelector(".senario_3_1_1_2");

btnSenario_3_1_1_1.addEventListener("click", ()=>{
    senario_3_1_1_1.style.display = "block";
    senario_3_1_1_2.style.display = "none";
    btnSenario_3_1_1_1.classList.add("btn1-click");
    btnSenario_3_1_1_2.classList.remove("btn1-click");
});

btnSenario_3_1_1_2.addEventListener("click", ()=>{
    senario_3_1_1_1.style.display = "none";
    senario_3_1_1_2.style.display = "block";
    btnSenario_3_1_1_1.classList.remove("btn1-click");
    btnSenario_3_1_1_2.classList.add("btn1-click");
});

////////////// senario 3_2 ///////////
///// senario 3_2_1 /////

let btnSenario_3_2_1 = document.querySelector("#senario_3_2_1");
let btnSenario_3_2_2 = document.querySelector("#senario_3_2_2");

let senario_3_2_1 = document.querySelector(".senario_3_2_1");
let senario_3_2_2 = document.querySelector(".senario_3_2_2");

btnSenario_3_2_1.addEventListener("click", ()=>{
    senario_3_2_1.style.display = "block";
    senario_3_2_2.style.display = "none";
    btnSenario_3_2_1.classList.add("btn1-click");
    btnSenario_3_2_2.classList.remove("btn1-click");
});

btnSenario_3_2_2.addEventListener("click", ()=>{
    senario_3_2_1.style.display = "none";
    senario_3_2_2.style.display = "block";
    btnSenario_3_2_1.classList.remove("btn1-click");
    btnSenario_3_2_2.classList.add("btn1-click");
});

let btnSenario_3_2_1_1 = document.querySelector("#senario_3_2_1_1");
let btnSenario_3_2_1_2 = document.querySelector("#senario_3_2_1_2");

let senario_3_2_1_1 = document.querySelector(".senario_3_2_1_1");
let senario_3_2_1_2 = document.querySelector(".senario_3_2_1_2");

btnSenario_3_2_1_1.addEventListener("click", ()=>{
    senario_3_2_1_1.style.display = "block";
    senario_3_2_1_2.style.display = "none";
    btnSenario_3_2_1_1.classList.add("btn1-click");
    btnSenario_3_2_1_2.classList.remove("btn1-click");
});

btnSenario_3_2_1_2.addEventListener("click", ()=>{
    senario_3_2_1_1.style.display = "none";
    senario_3_2_1_2.style.display = "block";
    btnSenario_3_2_1_1.classList.remove("btn1-click");
    btnSenario_3_2_1_2.classList.add("btn1-click");
});

///// senario 3_2_2 /////

let btnSenario_3_2_2_1 = document.querySelector("#senario_3_2_2_1");
let btnSenario_3_2_2_2 = document.querySelector("#senario_3_2_2_2");

let senario_3_2_2_1 = document.querySelector(".senario_3_2_2_1");
let senario_3_2_2_2 = document.querySelector(".senario_3_2_2_2");

btnSenario_3_2_2_1.addEventListener("click", ()=>{
    senario_3_2_2_1.style.display = "block";
    senario_3_2_2_2.style.display = "none";
    btnSenario_3_2_2_1.classList.add("btn1-click");
    btnSenario_3_2_2_2.classList.remove("btn1-click");
});

btnSenario_3_2_2_2.addEventListener("click", ()=>{
    senario_3_2_2_1.style.display = "none";
    senario_3_2_2_2.style.display = "block";
    btnSenario_3_2_2_1.classList.remove("btn1-click");
    btnSenario_3_2_2_2.classList.add("btn1-click");
});


let btnSenario_3_2_2_2_1 = document.querySelector("#senario_3_2_2_2_1");
let btnSenario_3_2_2_2_2 = document.querySelector("#senario_3_2_2_2_2");

let senario_3_2_2_2_1 = document.querySelector(".senario_3_2_2_2_1");
let senario_3_2_2_2_2 = document.querySelector(".senario_3_2_2_2_2");

btnSenario_3_2_2_2_1.addEventListener("click", ()=>{
    senario_3_2_2_2_1.style.display = "block";
    senario_3_2_2_2_2.style.display = "none";
    btnSenario_3_2_2_2_1.classList.add("btn1-click");
    btnSenario_3_2_2_2_2.classList.remove("btn1-click");
});

btnSenario_3_2_2_2_2.addEventListener("click", ()=>{
    senario_3_2_2_2_1.style.display = "none";
    senario_3_2_2_2_2.style.display = "block";
    btnSenario_3_2_2_2_1.classList.remove("btn1-click");
    btnSenario_3_2_2_2_2.classList.add("btn1-click");
});

