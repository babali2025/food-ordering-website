document.addEventListener("DOMContentLoaded",function(){
setTimeout(function (){
const splash=document.getElementById("splash");
splash.style.opacity="0";
setTimeout(function (){
splash.style.display="none";
},800);
},2000);
});