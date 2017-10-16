var botao = document.getElementById("botao");

// var modal = document.getElementById("modal");

var fundo = document.getElementById("fundo");

var close = document.getElementById("close")

botao.onclick= function(){
    // modal.classList.add("visivel");
    fundo.classList.add("visivel");
 
}

close.onclick= function(){
//    modal.classList.remove("visivel");
   fundo.classList.remove("visivel");
}


fundo.onclick = function(e){
    if(e.target == fundo){
// modal.classList.remove("visivel");
   close.classList.remove("visivel");
    }    
}

