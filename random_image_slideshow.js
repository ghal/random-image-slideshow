var myVar=setInterval(function(){myTimer()},4000); //timer is set to 4 seconds
function myTimer(){
	var img_number = 3; //enter the number of the images
	var img=["img1_path", //add the path of the images
	"img2_path",
	"img3_path"];
	var link=["link_1", //enter the links for when you click an image
	"link_2",
	"link_3"];

	var txt="<a id=\"id1\"href=\""+link[i]+"\"><img src=\""+img[i]+"\"</a>";
	document.getElementById("document_id").innerHTML=txt; //Replace document_id with an id
}

