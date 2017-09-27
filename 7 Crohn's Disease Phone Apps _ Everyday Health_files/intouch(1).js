//ALL
function animationComplete() {
    //called at end of all animation
    console.log("Animation complete");
    completeAutoscroll();
}
function createBorder() {
    //creates a 1 pixel border that allows interaction
    //  REQUIRES <div id="cover"> ... <div id="border"></div></div>
    var w = getElem("cover").clientWidth;
    var h = getElem("cover").clientHeight;
    var str = "";
    str += '<div style="border-left:1px solid #000000; opacity: 1 !important; width: 0px; height: ' + h + 'px; top: 0px; left: 0px; z-index:1000;"></div>';
    str += '<div style="border-right:1px solid #000000; opacity: 1 !important;  width: 0px; height: ' + h + 'px; top: 0px; left: ' + (w - 1) + 'px; z-index:1001;"></div>';
    str += '<div style="border-top:1px solid #000000; opacity: 1 !important; width: ' + w + 'px; height: 0px; top: 0px; left: 0px; z-index:1002;"></div>';
    str += '<div style="border-bottom:1px solid #000000; opacity: 1 !important;  width: ' + w + 'px; height: 0px; top: ' + (h - 1) + 'px; left: 0px; z-index:1003;"></div>';
    getElem("border").innerHTML = str;
}
function getElem(id) { return document.getElementById(id); }
function centerText(id,dir){
	dir = dir || "both";
	if(dir=="both" || dir == "horizontal") getElem(id).style.left = getElem(id).parentNode.clientWidth/2 - getElem(id).clientWidth/2 + "px";
	if(dir=="both" || dir == "vertical") getElem(id).style.top = getElem(id).parentNode.clientHeight/2 - getElem(id).clientHeight/2 + "px";
}
function foo(){}