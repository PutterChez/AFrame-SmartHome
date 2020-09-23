function turnOffFan () {
	console.log('turn off');
	var fan = document.getElementById("fan");
	fan.setAttribute("animation","property: rotation; to: 0 360 0; loop: false; dur: 800;");
}	