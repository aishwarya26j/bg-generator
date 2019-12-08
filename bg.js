var css=document.querySelector('h3');
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var body=document.getElementById('gradient');

 /*color1.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	console.log(color1.value); })

color2.addEventListener("input",function(){
	body.style.background="linear-gradient(to left,"+color1.value+","+color2.value+")";
	console.log(color2.value); })
   */    //or 

 /* color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
 */
function setGradient() {
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	console.log(color1.value); 
    console.log(color2.value);
css.textContent=body.style.background+";";
}



