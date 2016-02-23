var clickBasic = document.getElementById('basic-calc');
clickBasic.addEventListener("click", basic);

var clickTrip = document.getElementById('trip-calc');
clickTrip.addEventListener("click", trip);

var clickBMI = document.getElementById('bmi-calc');
clickBMI.addEventListener("click", bmi);

var clickMortgage = document.getElementById('mortgage-calc');
clickMortgage.addEventListener("click", mortgage);

//var checkBMI = document.getElementById('bmi-units');
//checkBMI.addEventListener("click", bmiSwap)

document.getElementById('basic-answer').style.display = "none";
document.getElementById('trip-answer').style.display = "none";
document.getElementById('bmi-answer').style.display = "none";
document.getElementById('mortgage-answer').style.display = "none";

function basic() {
	var num1 = document.getElementById('basic-num-1').value;
	var operation = document.getElementById('basic-operation').value;
	var num2 = document.getElementById('basic-num-2').value;
	var calculate = eval(num1+operation+num2);
	activeAns(1);
	document.getElementById("basic-answer-alert").innerHTML = calculate;
}

function trip() {
	var distance = document.getElementById('trip-distance').value;
	var mpg = document.getElementById('trip-mpg').value;
	var cost = document.getElementById('trip-cost').value;
	var speed = document.getElementById('trip-speed').value;
	if(speed<=60) {
		var calculate = distance/mpg*cost;
	}
	else if(speed>60) {
		var calculate = distance/(mpg-(speed-60)*2)*cost;
	}
	activeAns(2);
	document.getElementById("trip-answer-alert").innerHTML = calculate;
}

function bmi() {
	var mass = document.getElementById('bmi-mass').value*2.2;
	var height = document.getElementById('bmi-height').value*0.39370;
	var calculate = (mass/(height*height))*703;
	activeAns(3);
	document.getElementById("bmi-answer-alert").innerHTML = calculate;
}

function mortgage() {
	var loan = document.getElementById('mortgage-loan').value;
	var apr = document.getElementById('mortgage-apr').value;
	var term = document.getElementById('mortgage-term').value;
	var calculate = loan*(apr/100)*(Math.pow((1+(apr/100)),(term/12)))/((Math.pow((1+(apr/100)),(term/12)))-1);
	activeAns(4);
	document.getElementById("mortgage-answer-alert").innerHTML = calculate/12;
}

/*function bmiSwap() {
	var unit = document.getElementById('bmiSwap').value;
	if(unit==="metric"){
		document.getElementById("bmi-mass-unit").innerHTML = "kg";
		document.getElementById("bmi-height-unit").innerHTML = "m";
	}
	else if(unit==="imperial"){
		document.getElementById("bmi-mass-unit").innerHTML = "Lb";
		document.getElementById("bmi-height-unit").innerHTML = "inches";
	}
}*/

function activeAns(select) {
	document.getElementById('basic-answer').style.display = state(1,select);
	document.getElementById('trip-answer').style.display = state(2,select);;
	document.getElementById('bmi-answer').style.display = state(3,select);;
	document.getElementById('mortgage-answer').style.display = state(4,select);;
	function state(current, select) {
		if(current!==select) {
			return "none";
		}
		else {
			return "block";
		}

	}
}


