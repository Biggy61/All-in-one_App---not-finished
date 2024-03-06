const header = document.getElementById("hlava");
const main = document.getElementById("main");
const load = document.getElementById("loadBtn");
const start = document.getElementById("startBtn");


window.onload = async () => {
    header.style.display = "none";
    main.style.display = "none";
    load.style.display = "block";
    start.style.display = "block";
}  

start.onclick = () =>{
    header.style.display = "";
    main.style.display = "";
    load.style.display = "none";
    start.style.display = "none";
}
