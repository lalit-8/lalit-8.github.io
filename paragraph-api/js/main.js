function submitBoth(){
	let pwith=document.getElementById('new-paragraph').value;
	let s1=document.getElementById('new-sentence').value;		
	let http=new XMLHttpRequest()
	http.open('GET',"");
	http.onload=function(){
		document.getElementById('getboth').innerHTML=this.responseText;
	}
	http.send(pwith,s1);
}