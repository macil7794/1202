$(document). ready(function(){

	
console.log($(".sto"))
var pathArray=$(".sto")

$.each(pathArray, function (i,d){
	var pathLength=d.getTotalLength()
console.log(pathLength)
$(d).css("stroke-dasharry", pathLength+" "+pathLength)
$(d).css("stroke-dashoffset",pathLength)
})