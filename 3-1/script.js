function readyFunction(){
	var perc = parseFloat(document.getElementById('myProgressBar').getAttribute('aria-valuenow'));
	var checkInt = setInterval(function() {
		perc += (100-perc)/2;
		if (perc > 99.99) {
			clearInterval(checkInt);
			document.getElementById('theAlert').style.display = "block";
			return;
		}
		document.getElementById('myProgressBar').style.width = perc+'%';
	}, 750);
}