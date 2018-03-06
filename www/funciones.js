	var slider = document.getElementById("a");
	var output = document.getElementById("al");
	output.innerHTML = "Area Restriegue: " + slider.value; // Display the default slider value
	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	    output.innerHTML = "Area Restriegue: " + this.value;
	}
	var slider2 = document.getElementById("b");
	var output2 = document.getElementById("bl");
	output2.innerHTML = "DistMax: " + slider2.value; // Display the default slider value
	// Update the current slider value (each time you drag the slider handle)
	slider2.oninput = function() {
	    output2.innerHTML = "DistMax: " + this.value;
	}