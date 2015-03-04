function evaluate(expresion){
	operation = expresion.split("");
	total = "";
	for (i in operation) {
		if (operation[i] == "−") {
			total += "-";
		} else if (operation[i] == "×") {
			total += "*";
		} else if (operation[i] == "÷") {
			total += "/";
		} else {
			total += operation[i];
		}
	}
	return eval(total);
}

function keyPressed(key){
	if (key.match("[0-9]")) {
		$("#display").append(key);
	} else if (key === "."){
		numbers = $("#display").text().split(/[\+\−\×\÷]/);
		if (numbers.length == 1 && numbers[0].indexOf(".") < 1) {
			$("#display").append(key);
		} else if (numbers.length == 2 && numbers[1].indexOf(".") < 1) {
			$("#display").append(key);
		}
    } else if (key.match("C")) {
		$("#display").text("");
	} else if (key.match("=")) {
		exp = $("#display").text();
		$("#display").text(evaluate(exp));	
	} else if (key.match("[\+\−\×\÷]")){
		if ($("#display").text().indexOf('*[\+\−\×\÷]')){
			exp = $("#display").text();
			$("#display").text(evaluate(exp) + key);
		} else {
			$("#display").append(key);
		}
	}
	return;
}

$(function(){
	$("#calculadora button").click(function(){
		keyPressed($(this).text());
	});
	$(document).keypress(function(e){
		var tecla=e.which;
		if (tecla === 8){
			keyPressed("C");
		}else if (tecla === 99){
			keyPressed("C");		
	    }else if (tecla === 43){
			keyPressed("+");
	    }else if (tecla === 45){
			keyPressed("−");
        }else if (tecla === 42){
			keyPressed("×");
	    }else if (tecla === 47){
			keyPressed("÷");
        }else if (tecla === 13){
			keyPressed("=");
		}else{
			keyPressed(String.fromCharCode(e.which));
		}
	});
});
