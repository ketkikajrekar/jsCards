// var h=document.querySelector("h1");
// h.innerHTML="GoodBye";//goodbye is getting printed in h1 font

// var main=document.getElementById("main");
// main.innerHTML="goodbye"; //small goodbye is printed

// var main=document.getElementById("main");
// main.innerHTML="<h1>Goodbye</h1>"; //goodbye is getting printed in h1 font

// =>// var main=document.getElementById("main");
// // var s="<h1>Goodbye</h1><h1>Goodbye</h1><h1>Goodbye</h1>";
// var s="";
// for(let i=1;i<=10;i++){
//     s+="<h1>Goodbye</h1>";
// }
// main.innerHTML=s ;  //10 yimes goodbye is printed

var main=document.getElementById("main");
var s="";
let arr=["https://i.pinimg.com/enabled_hi/474x/f7/30/c8/f730c879cfe65438987c19dd147d4512.jpg",
    "https://i.pinimg.com/enabled_hi/474x/f8/4c/89/f84c89296660e59d4b2f4f432ce67903.jpg" ,
    "https://i.pinimg.com/enabled_hi/474x/db/64/b9/db64b96cc7853963e5a9ab78221353c0.jpg",
    "https://i.pinimg.com/enabled_hi/474x/38/61/6f/38616f4a0f45ba196a176620cd564e87.jpg",
    "https://i.pinimg.com/474x/bd/06/40/bd064076507aba56e64bfb1d891957d0.jpg",
    "https://i.pinimg.com/474x/88/53/1c/88531c7511bccb1f899a8b330a05fb43.jpg"];

for(let i=1;i<=65;i++){
    let r=Math.floor(Math.random()*arr.length);
    s+=`<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML=s ;


// `<div class="card">
//         <img src="https://i.pinimg.com/enabled_hi/474x/f8/4c/89/f84c89296660e59d4b2f4f432ce67903.jpg" >
//        </div>`