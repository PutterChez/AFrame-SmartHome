function turnOffFan () {
	var fan = document.getElementById("fan");
	var status = JSON.parse(fan.getAttribute("animation"));
	console.log(status.loop);

	if(status.loop == "true"){
		fan.setAttribute("animation","property: rotation; to: 0 360 0; loop: false; dur: 800;");
		console.log('turn off');
	}
	else{
		fan.setAttribute("animation","property: rotation; to: 0 360 0; loop: true; dur: 800;");
		console.log('turn on');
	}
}	