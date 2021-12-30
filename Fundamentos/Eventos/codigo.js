
document.getElementById("miDiv").addEventListener("click",anotherClic,false);

document.getElementById("idBtn").addEventListener("click",clic,true);


function anotherClic(){
    alert("Esto fue disparado por el div")
}


function clic(){
    alert("Hola mundo");
}