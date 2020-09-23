function turnOffFan () {
	console.log('turn off');
	var fan = document.getElementById("fan");
	var status = fan.getAttribute("animation");

	if(status == "property: rotation; to: 0 360 0; loop: true; dur: 800;")
		fan.setAttribute("animation","property: rotation; to: 0 360 0; loop: false; dur: 800;");
	else
		fan.setAttribute("animation","property: rotation; to: 0 360 0; loop: true; dur: 800;");
}	