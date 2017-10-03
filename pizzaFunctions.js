function getInvoice() {
	var size = document.querySelector('input[name="size"]:checked').value;
	var cheese = document.querySelector('input[name="cheese"]:checked').value;
	var crust = document.querySelector('input[name="crust"]:checked').value;
	var sauce = document.querySelector('input[name="sauce"]:checked').value;
		document.getElementById("sizeOrdered").innerHTML = size;
		document.getElementById("cheeseOrdered").innerHTML = cheese;
		document.getElementById("crustOrdered").innerHTML = crust;
		document.getElementById("sauceOrdered").innerHTML = sauce;
		if (size == "Personal") {
			 st = 6;
		} else if (size == "Medium") {
			 st = 10;
		} else if (size == "Large") {
			 st =  14;
		} else if (size == "Extra Large") {
			 st = 16;
		};
		document.getElementById("sizeTotal").innerHTML = st;
		
		
		if (crust == "Stuffed"){
			 crt = 3;
		} else {
			 crt = 0;
		};
		document.getElementById("crustTotal").innerHTML = crt;
		
		if (cheese == "Extra Cheese"){
			 cht = 3;
		} else {
			 cht = 0;
		};
		document.getElementById("cheeseTotal").innerHTML = cht;
		
		getMeat()
	};
		
function getMeat() {
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meat");

	for (var i = 0; i < meatArray.length; i++) {
	  if (meatArray[i].checked) {
		selectedMeat.push(meatArray[i].value);
	  }
	}
	document.getElementById("meatCount").innerHTML = selectedMeat
	if (selectedMeat.length > 1) {
		 m = (selectedMeat.length -1);
	} else {
		 m = 0;
	};
	document.getElementById("meatTotal").innerHTML = m
	getVeg()	
};

function getVeg () {
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veg");
	
	for (var j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeg.push(vegArray[j].value);
		}
	}
	document.getElementById("vegCount").innerHTML = selectedVeg
	
	if (selectedVeg.length > 1) {
		 v = (selectedVeg.length -1);
	} else {
		 v = 0;
	}
	document.getElementById("vegTotal").innerHTML = v
	
	getTotal()
}

function getTotal () {
	var gt = (st + crt + cht + m + v);
	document.getElementById("total").innerHTML = "$"+gt+".00";
}

/* Code storage, in case my new code breaks everything and I have to revert

if (size == "Personal") {
			document.getElementById("sizeTotal").innerHTML = 6;
		} else if (size == "Medium") {
			document.getElementById("sizeTotal").innerHTML = 10;
		} else if (size == "Large") {
			document.getElementById("sizeTotal").innerHTML =  14;
		} else if (size == "Extra Large") {
			document.getElementById("sizeTotal").innerHTML = 16;
		};
if (crust == "Stuffed"){
			document.getElementById("crustTotal").innerHTML = 3;
		} else {
			document.getElementById("crustTotal").innerHTML = 0;
		};
if (cheese == "Extra Cheese"){
			document.getElementById("cheeseTotal").innerHTML = 3;
		} else {
			document.getElementById("cheeseTotal").innerHTML = 0;
		};
	var m = (selectedMeat.length -1)
	if (m > 0) {
		document.getElementById("meatTotal").innerHTML = m;
	} else {
		document.getElementById("meatTotal").innerHTML = 0;
*/