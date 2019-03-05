function readyFunction(){

	var items = document.getElementsByClassName("list-group-item");
	for(var i = 0; i<items.length;i++) {
		items[i].addEventListener("click",function(event){
			for (var x=0; x<event.target.childNodes.length; x++) {
				if(event.target.childNodes[x].tagName==='SPAN') {
					var num = parseInt(event.target.childNodes[x].innerHTML);
					num--;
				if (num <= 0) {
					num = '';
				}
				if(event.target.childNodes[x].innerHTML!=='') event.target.childNodes[x].innerHTML = num;	
				}
			}
		});
	}
}	