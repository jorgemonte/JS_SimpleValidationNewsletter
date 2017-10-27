function validation(){
	let courriel = document.forms["infolettre"]["courriel"].value;
	let arobas = courriel.indexOf("@");
	let point = courriel.lastIndexOf(".");
	let non = document.getElementById("alerte");
	let oui = document.getElementById("ok");
	
	if (arobas < 1 || point < arobas + 2 || point + 2 >= courriel.length) {
     non.style.display = "block";
		return false;
    }else{
			oui.style.display = "block";
			return true;
		}
}