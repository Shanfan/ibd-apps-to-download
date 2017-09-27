/*DCS*/
window.onload = function() {
	hideAll();
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);
	}
}
function enablerInitHandler() {
	//hideAll();
	createBorder();
	politeLoad();
}
function politeLoad() {
	if (Enabler.isPageLoaded()) {
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}
function pageLoadedHandler() {
	if (Enabler.isVisible()) {
		init();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, init);
	}
}
function exitHandler(e) {
	var target = e.toElement || e.relatedTarget || e.target || function () { throw "Failed to attach an event target!"; }
    console.log('clicked on',target.id)
    if (target.id != "replay") {
        if (target.id == "" || target.id == "isiText") {
            //this isi text itself does not have useful id
            tag = "hotspot";
        }
        switch (target.id) {
            // case "pi": case "ctaPI": Enabler.exit("fpi exit", "http://www.rxabbvie.com/pdf/humira.pdf"); break;
            // case "mg": case "ctaMG": Enabler.exit("mg exit", "http://www.rxabbvie.com/pdf/humira_medguide.pdf"); break;
            // case "medwatch": Enabler.exit("medwatch exit", "http://www.fda.gov/medwatch"); break;
            // case "pparx": Enabler.exit("pparx exit", "https://www.pparx.org"); break;
            // default: Enabler.exit("hotspot exit", "https://www.humira.com/crohns/symptoms-of-crohns"); break;

						case "pi": case "ctaPI": window.open(window.clickTag_PI); break;
            case "mg": case "ctaMG": window.open(window.clickTag_Mg); break;
            case "medwatch": window.open(window.clickTag_Medwatch); break;
            case "pparx": window.open(window.clickTag_Pparx); break;
            default: window.open(window.clickTag); break;
						
        }
    } else {
        replay();
    }
}
/*INTOUCH*/
//ISI
var scrollTime;
var scrollInterrupted = false;
function foo(){}
function resetISI() {
    TweenMax.to(getElem('isi'), .1, { alpha: 1 });
    TweenMax.to(getElem('isiTextHolder'), .1, { alpha: 1, scrollTo: { y: 0, autoKill: true } });
    var array = getElem("isiText").getElementsByTagName("A");
    var ii = array.length;
    for (i = 0; i < ii; i++) {
        console.log("ISI link found", array[i].id);
        getElem(array[i].id).addEventListener('click', exitHandler, false);
    }
}


function startISIScroll(delay, AscrollTime, completeAction) {
    /*
        delay:int - number of seconds to delay before starting auoscroll
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
	getElem('isiTextHolder').addEventListener ("mousedown", interruptScroll);
	scrollTime = AscrollTime;
	var delay = delay;
	getElem("isiText").style = isiCSS;
	if (delay != undefined) {
		var stopStick = getElem("stop");
		var viewportHeight = getElem("isiTextHolder").clientHeight;
		var stopPointTop;
		if (stopStick != null) {
			stopPointTop = stopStick.offsetTop;
			if (stopPointTop > viewportHeight) {
				//if the stop point is outside of the display upon load, replace stop tag with sentence
				stopStick.className = "stop";
				stopStick.innerHTML = stopText;
				stopPointTop = stopStick.offsetTop - viewportHeight + stopStick.offsetHeight;
				//auto-scroll
				TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: delay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
			} else {
				autoscrollComplete(completeAction);
			}
		} else {
			stopPointTop = getElem("isiText").clientHeight;
			TweenMax.to(getElem('isiTextHolder'), scrollTime, { scrollTo: { y: stopPointTop, autoKill: true }, delay: delay, ease: Linear.easeNone, onComplete: autoscrollComplete, onCompleteParams: [completeAction] });
		}
	} else {
		animationComplete();
	}
}
function autoscrollComplete(completeAction) {
    /*
    called by startISIScroll when auto scroll is completed
        completeAction - see startISIScroll
    */
	if (completeAction == "stop") {
		console.log("autoscroll isi hold time", delay, "seconds, scroll time", scrollTime, "seconds");
		animationComplete();
	} else { //pause ~ # (return to top)
		var acsdelay = completeAction.substr(completeAction.indexOf("~") + 1);
		TweenMax.to(getElem('isiTextHolder'), .25, { scrollTo: { y: 0, autoKill: true }, delay: acsdelay, ease: Linear.easeNone, onComplete: animationComplete });
		console.log("autoscroll isi hold time", delay, "seconds, scroll time", scrollTime, "seconds, final pause time", acsdelay, "seconds.");
	}
}
function interruptScroll(e){
	console.log("SCROLL",e);
	TweenMax.killTweensOf(getElem('isiTextHolder'));
	getElem('isiTextHolder').removeEventListener ("mousedown", interruptScroll);
}
//ALL
function animationComplete() {
    //called at end of all animation
    var animationFinishTime = new Date().getTime();
    console.log("Animation complete " + ((animationFinishTime - animationStartTime) / 1000));
}
function hideAll() {
    var elems = document.getElementsByTagName('div');
    for (var ea = 0; ea < elems.length - 1; ea++) {
		TweenMax.set(elems[ea], { alpha: 0 });
    }
}
function addEvent(e){
	var target = e.toElement || e.relatedTarget || e.target || e.srcElement || function () { throw "Failed to attach an event target!"; }
	target.style.cursor = "pointer";
	target.style.zIndex = 1000;
	target.addEventListener('click', exitHandler, false);
}
function removeEvent(e){
	var target = e.toElement || e.relatedTarget || e.target || e.srcElement || function () { throw "Failed to attach an event target!"; }
	target.style.cursor = "default";
	target.style.zIndex = 1;
	target.removeEventListener('click', exitHandler);
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
