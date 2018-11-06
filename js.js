 function escriure(n){
	var caixa2 = document.forma.caixa2.value;
	if(caixa2 == "."){
		alert("No em putejis")
		document.forma.caixa2.value = "0";
		caixa2 = "0";
	}
	if(caixa2.length < 5){

		if (borrar) {
			document.forma.caixa2.value="";
			borrar = false;
			document.forma.caixa2.value = n;
		}else if (caixa2 == "0" && n != "."){
			cajao = caixa2.replace("0", "")
			document.forma.caixa2.value = cajao + n;
		}
		else{
			document.forma.caixa2.value = caixa2 + n;
		}
	}else{
		alert("Maxim de nombres assolit. '5'")
	}
}

var borrar = false;

function operacio(o){
	var caixa1 = document.forma.caixa1.value;
	var caixa2 = document.forma.caixa2.value;
	var unNum = caixa1.substring(caixa1.length-1);
	calcular()
	if (unNum == "+" || unNum == "-" || unNum=="*" || unNum=="/") {
		unNum = unNum.replace(unNum,o);
		var res = caixa1.substring(0,caixa1.length-1);
		document.forma.caixa1.value = res+unNum;
		document.forma.caixa2.value = "";
		document.forma.caixa2.value = "0";
	}
	if (caixa1 == "" && caixa2 != ""){
		document.forma.caixa1.value = caixa2 + o;
		document.forma.caixa2.value = "";
		document.forma.caixa2.value = "0";
	}
	else{
		document.forma.caixa1.value = caixa1 + caixa2 + o;
	}
	borrar = true;
}

function calcular(){
	var caixa1 = document.forma.caixa1.value;
	var caixa2 = document.forma.caixa2.value;
	document.forma.caixa2.value = eval(caixa1 + caixa2);
	document.forma.caixa1.value = "";
	borrar = true;
	blocdel = true;
}