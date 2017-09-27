var scrollDelay,scrollTime;
var scrollInterrupted = false;
var autoscrollPauseTime,autoscrollRunTime;
function foo(){}
var sizes = {
	dim160x600:{t:330,l:0,  w:160,h:270,  hh:30,isiPauseTime:6,isiScrollTime:(60*9)},
	dim300x250:{t:125,l:0,  w:300,h:125,  hh:20,isiPauseTime:6,isiScrollTime:(60*5)},
	dim300x600:{t:350,l:0,  w:300,h:250,  hh:20,isiPauseTime:6,isiScrollTime:(60*5)},
	dim728x90: {t:0,  l:337,w:391,h:90,   hh:20,isiPauseTime:6,isiScrollTime:(60*5)}
	}
var bannerType;
function setupISI(isiID, isiEpass, type){
	getElem("replay").innerHTML = "<svg version='1.1' id='replayGraphic' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 12 12' style='enable-background:new 0 0 12 12;' xml:space='preserve'><path d='M11.1,5.2V0L9.5,1.6C8.5,0.6,7.1,0,5.6,0C2.5,0,0,2.5,0,5.6s2.5,5.6,5.6,5.6c1.9,0,3.6-0.9,4.6-2.5L8.5,7.6 c-0.7,1-1.8,1.6-3,1.6C3.6,9.1,2,7.5,2,5.6S3.6,2,5.6,2c0.9,0,1.8,0.4,2.5,1L5.9,5.2H11.1z'/></svg>";
	style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = "#replay {"+
		"height:18px;"+
		"width:18px;"+
		"cursor:pointer"+
	"}";
	document.getElementsByTagName('head')[0].appendChild(style);
	
	bannerType = type;
	console.log("setup ISI w,h",stageWidth,stageHeight,isiID,isiID.substr(-1).toLowerCase());
	console.log("sizes",sizes[id].t,sizes[id].l,sizes[id].w,sizes[id].h)
		
	//set css sizes based on banner size(s)
	var elem,style;
	style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = "#isi {"+
		"background-color: #ffffff;"+
		"left:"+sizes[id].l+"px;"+
		"top:"+ sizes[id].t +"px;"+
    	"width:"+sizes[id].w+"px;"+
    	"height:"+(sizes[id].h+(sizes[id].hh*2))+"px;"+
	"}";
	document.getElementsByTagName('head')[0].appendChild(style);	
	style = document.createElement("style");
	
	style.type = 'text/css';
	style.innerHTML = "#isiHeaderHolder {"+
		"box-sizing:border-box;"+
		"background-color: #ffffff;"+
		"height:"+sizes[id].hh+"px;"+
		"border-bottom: #a9a9a9 1px solid;"+
		"width:"+sizes[id].w+"px;"+
		"top:"+sizes[id].hh+"px;"+
	"}";
	document.getElementsByTagName('head')[0].appendChild(style);
	
	style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = "#isiHeaderLinksHolder {"+
		"box-sizing:border-box;"+
		"border-bottom" + ": #a9a9a9 1px solid;"+
		"background-color: #ffffff;"+
		"height:"+(sizes[id].hh)+"px;"+
		"width:"+sizes[id].w+"px;"+
		"left:0px;"+
		"top:0px;"+
	"}";
	document.getElementsByTagName('head')[0].appendChild(style);
	
	style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = "#isiHeaderLinks {"+
		"box-sizing:border-box;"+
		"height:"+sizes[id].hh+"px;"+
		"width:"+sizes[id].w+"px;"+
		"padding:5px 5px 0px 10px;"+
		"font-size:"+(id=="dim160x600" ? "9px;" : "10px;") + " text-align:left; white-space:nowrap;"+
		"line-height:1.2;"+
	"}";
	document.getElementsByTagName('head')[0].appendChild(style);
	
	style = document.createElement("style");
	style.type = 'text/css';
	style.innerHTML = ""+
		"a.isiPI:link, a.isiPI:visited { color:#b1005d; text-decoration:none; } "+
		"a.isiPI:hover { color:#000000; text-decoration: underline; }"
	document.getElementsByTagName('head')[0].appendChild(style);	
	
	initISI(isiEpass);
	//set use statement
	getElem("use_statement").innerHTML = isiUse;
	autoscrollPauseTime = sizes[id].isiPauseTime;
	autoscrollRunTime = sizes[id].isiScrollTime;	
	
	
	getElem("isiMedwatchLink").innerHTML = getMedwatchLink();
	getElem("isiPparxLink").innerHTML = getPparxLink();
	getElem("hotspotHolder").innerHTML = getHotspotLink();
	
	if (id == "dim728x90") {
        TweenMax.set(replay, { top: stageHeight - replay.offsetHeight - 2, left: isi.offsetLeft - replay.offsetWidth - 2 });
    } else {
        TweenMax.set(replay, { top: isi.offsetTop + isiHeaderLinksHolder.offsetTop - replay.offsetHeight - 2, left: isiHeaderLinksHolder.offsetWidth - replay.offsetWidth - 2 });
    }
}
function startScrolling(){
	console.log("startISIScroll(",autoscrollPauseTime,autoscrollRunTime,"stop",");");
	startISIScroll(autoscrollPauseTime,autoscrollRunTime,"stop");
}
function getHotspotLink(){
	switch(bannerType){
		case "standard": 
			console.log("BE SURE THE HTML HAS: var clickTag=https://...;");
			return "<a href='javascript:window.open(window.clickTag)'><div id='hotspot'></div></a>";	
			break;
		case "enhanced":
			console.log("BE SURE THE HTML HAS: var clickTag1=\'https://...\';");
			return  "<a href='javascript:window.open(window.clickTag1)'><div id='hotspot'></div></a>"; break;
		default:/*rich*/  return "<div id='hotspot'></div>";
	}
}
function initISI(epass, headerPosition){
	//set title "Important Safety Information" or "Use and Important Safety Information"
	var headerText = "Use and Important Safety Information<sup>1</sup>";
	
	var headerLinksText
	if(id=="dim160x600"){
		headerLinksText = "<div style='opacity:1 !important'>"+getFPILink()+"</div><br><div style='opacity:1 !important;'>"+getMGLink()+"</div>";
	} else {
		headerLinksText = "<div style='opacity:1 !important'>"+getFPILink()+"</div><div style='opacity:1 !important; right:133px;'>"+getMGLink()+"</div>";
	}
		
	
	
	
	
	
	//var headerLinksText = getFPILink() + " "+(w==160 ? "<br/>" : "") + getMGLink();
	
	var element = document.getElementById('isi'),
    style = window.getComputedStyle(element),
    bgc = style.getPropertyValue('background-color');
	document.getElementById("isi").style.backgroundColor = "transparent";
	
	var str = "";
	str = '<div id="isiHeaderLinksHolder" style="opacity: 1;"><div id="isiHeaderLinks" style="opacity: 1;">'+headerLinksText+'</div></div>';
	getElem("isi").innerHTML = str;
	var str = "";
	str = '<div id="isiHeaderHolder" style="opacity: 1;"><div id="isiHeader" style="opacity: 1;">'+headerText+'</div></div>';
	getElem("isi").innerHTML += str;
	
	str = "";
	str += '<div id="isiTextHolder" style="top:'+(sizes[id].hh*2)+'px; width: '+sizes[id].w+'px; height: '+(sizes[id].h - (sizes[id].hh * 2))+'px; overflow-x: hidden; overflow-y: scroll; opacity: 1;">';
	str += '<div id="isiTextCopy" style="opacity: 1; background-color:'+bgc+'; white-space: normal; padding:3px 10px 3px 10px; font-size: 0px;"></div>';
	str += '</div">';
	
	
	getElem("isi").innerHTML += str;	
	getElem("isiTextCopy").innerHTML = isiText;
	if(epass != undefined) { getElem("epass").innerHTML = epass };
	
	getElem('isiTextHolder').addEventListener ("mousedown", interruptScroll);
	getElem('isiTextHolder').addEventListener ("wheel", interruptScroll);
	
	
	if(bannerType == "rich"){
		getElem("FPILink").addEventListener('click', exitHandler, false);
		getElem("MGLink").addEventListener('click', exitHandler, false);
		getElem("isiMedwatchLink").addEventListener('click', exitHandler, false);
		getElem("isiPparxLink").addEventListener('click', exitHandler, false);
		getElem("hotspotHolder").addEventListener('click', exitHandler, false);
	} else {
		//getElem("hotspotHolder").innerHtml = getHotspotLink() + "<div id='hotspot'></div></a>";
		//getElem("hotspot").innerHTML = getHotspotLink();
	}
}


function resetISI(){
	console.log("resetISI");
	scrollInterrupted = false;
	TweenMax.to(getElem('isi'), .1, {alpha:1} );
	TweenMax.to(getElem('isiTextHolder'), .1, {alpha:1, scrollTo:{y:0, autoKill:true} });
	getElem('isiTextHolder').addEventListener ("mousedown", interruptScroll);
	getElem('isiTextHolder').addEventListener ("wheel", interruptScroll);
}
function startISIScroll(scrollDelay, AscrollTime, completeAction) {
	console.log("scrollInterrupted",scrollInterrupted);
	if(scrollInterrupted == false) {
		/*
			scrollDelay:int - number of seconds to delay before starting auoscroll
						if zero or undefined, isi does not autoscroll
			scrollTime - number of seconds to reach stop point
			completeAction - "stop" OR "pause~#"
						stop - means the autoscroll just stops when it reaches the stop point
						pause~# - means, pause at stop point then after # seconds return to the top of the isi
		example:
			startISIScroll() = no autoscroll
			startISIScroll(1, 5, "stop") = after 1 second start scrolling for 5 seconds to stop point then stop
			startISIScroll(3, 5, "pause~1") = after 3 seconds start autoscrolling for 5 seconds to stop point, then pause for 1 second, then return to top
		Last updated: Michael Barsotti 12.31.2014, happy new year!
		TO DO:
			nothing yet
		BUGS:
			none yet
		*/		
		scrollTime = AscrollTime;
		var scrollDelay = scrollDelay;
		if (scrollDelay != undefined) {
			var stopStick = getElem("stop");
			var scrollMessageStick = getElem("isiScrollMessageOverlay");
			var viewportHeight = getElem("isiTextHolder").offsetHeight;
			var stopPointTop;
			/*if (stopStick != null) {*/
			if(inlineStopText != "") {
				stopPointTop = stopStick.offsetTop;
				if (stopPointTop > viewportHeight) {
					//if the stop point is outside of the display upon load, replace stop tag with sentence
					stopStick.className = "stop";
					stopStick.innerHTML = inlineStopText;
					stopPointTop = (stopStick.offsetTop - viewportHeight) + stopStick.offsetHeight + 3;
					//auto-scroll				
					TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: scrollDelay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
				} else {
					autoscrollComplete(completeAction);
				}
			/*} else if (scrollMessageStick != null) {*/
			} else if(stopOverlayText != "") {
				stopPointTop = stopStick.offsetTop;
				if (stopPointTop > viewportHeight) {
					//if the stop point is outside of the display upon load, replace stop tag with sentence
					stopPointTop = stopStick.offsetTop - viewportHeight + getElem("isiScrollMessageOverlay").offsetHeight
					//auto-scroll
					TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: scrollDelay, ease: Linear.easeNone, onComplete:showScrollMessage/*, onComplete: autoscrollComplete, onCompleteParams: [completeAction]*/ });
				} else {
					autoscrollComplete(completeAction);
				}
			} else {
				stopPointTop = getElem("isiTextCopy").clientHeight;
				TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: scrollDelay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
			}
		} else {
			animationComplete();
		}
	} else { animationComplete(); }
}
function showScrollMessage(){
	console.log("show scroll footer");
	TweenMax.to(getElem("isiScrollMessageOverlay"),1,{autoAlpha:1});
	setTimeout(addScrollEvents,500);
}
function addScrollEvents(){
	getElem('isiTextHolder').addEventListener ("mousedown", hideScrollMessage);
	getElem('isiTextHolder').addEventListener ("wheel", hideScrollMessage);
	getElem('isiTextHolder').addEventListener ("scroll", hideScrollMessage);
}
function hideScrollMessage(){
	console.log("hide scroll footer");
	TweenMax.to(getElem("isiScrollMessageOverlay"),.5,{autoAlpha:0});
	getElem('isiTextHolder').removeEventListener ("mousedown", hideScrollMessage);
	getElem('isiTextHolder').removeEventListener ("wheel", hideScrollMessage);
	getElem('isiTextHolder').removeEventListener ("scroll", hideScrollMessage);
}
function autoscrollComplete(completeAction) {
    /*
    called by startISIScroll when auto scroll is completed
        completeAction - see startISIScroll
    */
	if (completeAction == "stop") {
		console.log("autoscroll isi hold time", scrollDelay, "seconds, scroll time", scrollTime, "seconds");
		animationComplete();
	} else { //pause ~ # (return to top)
		var acsdelay = completeAction.substr(completeAction.indexOf("~") + 1);
		TweenMax.to(getElem('isiTextHolder'), .25, { scrollTo: { y: 0, autoKill: true }, scrollDelay: acsdelay, ease: Linear.easeNone, onComplete: animationComplete });
		console.log("autoscroll isi hold time", scrollDelay, "seconds, scroll time", scrollTime, "seconds, final pause time", acsdelay, "seconds.");
	}
}
function interruptScroll(e){
	console.log("SCROLL",e);
	TweenMax.killTweensOf(getElem('isiTextHolder'));
	getElem('isiTextHolder').removeEventListener ("mousedown", interruptScroll);
	getElem('isiTextHolder').removeEventListener ("wheel", interruptScroll);
	scrollInterrupted = true;
	animationComplete();
}
function getISIHeight(){
	console.log("isi height",sizes[id].h,sizes[id].hh,(sizes[id].h + sizes[id].hh));
	return (sizes[id].h + sizes[id].hh);
}
