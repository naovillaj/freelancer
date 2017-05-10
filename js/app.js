var imagenClick = document.getElementById("modal");
var imagenes = document.getElementsByClassName("modal-click");
var x = document.getElementById("close");
var boton = document.getElementsByClassName("modal-button")[0];
var imagenes = document.getElementsByClassName("modal-click");
var img = document.getElementById("image-modal");
var body = document.getElementById("body");

for(var i = 1; i<=imagenes.length; i++){
	imagenes[i-1].addEventListener("click", function(e){
		e.preventDefault();
		imagenClick.classList.toggle("active");
		body.setAttribute("style", "overflow:hidden");
    img.setAttribute("src", this.src);
	})
}

x.addEventListener("click", function(){
	imagenClick.classList.toggle("active");
	body.setAttribute("style", "overflow:scroll");
})

boton.addEventListener("click", function(){
	imagenClick.classList.toggle("active");
	body.setAttribute("style", "overflow:scroll");
})
