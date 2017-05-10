var imagenClick = document.getElementById("modal");
var imagenes = document.getElementsByClassName("modal-click");
var x = document.getElementById("close");
var boton = document.getElementsByClassName("modal-button")[0];
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

var nombre = document.getElementById("name");
var email = document.getElementById("email");
var telefono = document.getElementById("phone");
var mensaje = document.getElementById("message");
var nulo = document.getElementsByClassName("nule");
var botonForm = document.getElementById("f-b");

for(var i=0; i<=nulo.length; i++){
	botonForm.addEventListener("click", function(e){
		e.preventDefault();
		if(nombre.value == ""){
			nulo[0].style.display = "block";
			nulo[0].innerText = "Please enter your name";
		}if(email.value == ""){
			nulo[1].style.display = "block";
			nulo[1].innerText = "Please enter your email address";
		}if(telefono.value == ""){
			nulo[2].style.display = "block";
			nulo[2].innerText = "Please enter your phone number";
		}if(mensaje.value == ""){
			nulo[3].style.display = "block";
			nulo[3].innerText = "Please enter a message";
		}
	})
}



