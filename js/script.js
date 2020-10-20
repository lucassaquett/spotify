var open = false;
 
function giro() {
	if (open == false) {
	  	document.getElementById("toggler-icon").classList.add('giro-abrir');
	  	document.getElementById("toggler-icon").classList.remove('giro-fechar');
		open = true;
	}else{
		document.getElementById("toggler-icon").classList.add('giro-fechar');
		document.getElementById("toggler-icon").classList.remove('giro-abrir');
		open = false;
		}
}