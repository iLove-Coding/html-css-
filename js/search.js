var obtn = document.getElementById("tip-close-btn");
obtn.onclick = closeTip;

function closeTip() {
	var tip = document.getElementById("uplode-tip");
	tip.style.display = "none";
}

var ofold = document.getElementById("nav-collapse");
ofold.onclick = navCollapse;

function navCollapse() {
	var detail = document.getElementById("nav-detail");
	var text = document.getElementById("collapse-font");
	var img = document.getElementById("collapse-img");

	if(text.innerHTML == "收起筛选") {
		detail.style.height = "0px";
		text.innerHTML = "显示筛选";
		img.style.background = "url(../img/search-icon.png) no-repeat -330px -422px";
		detail.style.border = "0px";
		detail.style.marginBottom = "-10px";

	} else {
		detail.style.marginBottom = "10px";
		detail.style.border = "solid 1px rgba(232, 232, 232, 1)";
		text.innerHTML = "收起筛选";
		img.style.background = "url(../img/search-icon.png) no-repeat -313px -422px";
		detail.style.height = "220px";
	}

}

//var ostyle1 = document.getElementById("change-style1");
//ostyle1.onclick = changeStyle1;
//
//function changeStyle1() {
//	var style1 = document.getElementById("r-display1");
//	var style2 = document.getElementById("r-display2");
//	style2.style.display = "none";
//	style1.style.display = "block";
//}
//var ostyle2 = document.getElementById("change-style2");
//ostyle2.onclick = changeStyle2;
//
//function changeStyle2() {
//	var style1 = document.getElementById("r-display1");
//	var style2 = document.getElementById("r-display2");
//	style1.style.display = "none";
//	style2.style.display = "block";
//}

var omarket = document.getElementById("more-market");
var hmarket = document.getElementById("maket-hover");
var cmarket = document.getElementById("market-content");

hmarket.onmouseover = function() {
	omarket.style.borderBottomColor = "white";
	cmarket.style.display = "block";
}
hmarket.onmouseout = function() {
	omarket.style.borderBottomColor = "#cccccc";
	cmarket.style.display = "none";
}