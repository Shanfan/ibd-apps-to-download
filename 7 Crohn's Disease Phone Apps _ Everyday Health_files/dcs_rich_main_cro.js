var id,stageWidth, stageHeight;
var mainTimeline,numOfLoops = 0,loopDelay = 1;
var video1;


function exitHandler(e) {
	var target = e.toElement || e.relatedTarget || e.target || function () { throw "Failed to attach an event target!"; }
    console.log('clicked on',target.id)
	switch (target.id) {
	    case "FPILink": Enabler.exit("FPI exit", "http://www.rxabbvie.com/pdf/humira.pdf"); break;
	    case "MGLink": Enabler.exit("MG exit", "http://www.rxabbvie.com/pdf/humira_medguide.pdf"); break;
	    case "isiMedwatchLink": Enabler.exit("isi medwatch exit", "http://www.fda.gov/Safety/MedWatch/default.htm"); break;
		case "isiPparxLink": Enabler.exit("isi pparx exit", "http://www.pparx.org"); break;
	    default: Enabler.exit("hotspot exit", "https://www.humira.com/crohns/consider-humira-for-crohns-treatment"); break;
	}
}

var isReplay = false;
function replayAnimation(){
	isReplay = true;
	interruptScroll();
	resetISI();
	mainTimeline.repeat(numOfLoops);
	mainTimeline.pause(0);
	mainTimeline.play();
	TweenMax.set(replay,{autoAlpha:0});
}



function init() {
	console.log("INIT");
	id = document.getElementsByTagName('body')[0].id;
	console.log("id " + id);
	stageWidth = parseInt(id.substring(3,id.indexOf("x")));
	stageHeight = parseInt(id.substring(id.indexOf("x")+1));	
	//create variables of each div in the HTML file
	var array = document.getElementsByTagName("div");
	var ii = array.length;
	for(i = 0; i < ii; i++){
		if(array[i].id){
			window[array[i].id] = getElem(array[i].id);
		} 
	}
	
	var epass = "64Z-1868203";
	setupISI("ABB_CROHNS_NOUSE_0001",epass,"rich");
	    
	numOfLoops = 0;
	loopDelay = 2;
	
	replay.addEventListener("click", replayAnimation);

	setupVideo();
			
	mainTimeline = new TimelineMax({onComplete:completeTimeline, repeat:numOfLoops, repeatDelay:loopDelay});
		
	mainTimeline	
		.set([
			cover,border,background,eyebrow,
			getElem("isiPI")
		], { autoAlpha: 1 })
        .set([
			despite
        ], { autoAlpha: 0 })
		
		.set(replayGraphic,{fill:"#ffffff"})
		.set(replay, { autoAlpha: 0 })
		.set(videoHolder, { top: 82 })
		.to(videoHolder, .125, { autoAlpha: 1, onComplete: initVideo })
        /*init video also pauses timeline playback*/
		
		.addLabel("frame1", "+=.25")
        .to(background2, .25, { autoAlpha: 1 }, "frame1")
        .to(despite, .25, { autoAlpha: 0 }, "frame1")
        .to(videoHolder, .25, { autoAlpha: 0 }, "frame1")
        .to(eyebrow, .25, { autoAlpha: 0 }, "frame1")
        .to(remission, .25, { autoAlpha: 1 }, "frame1")
        .to(logo, .25, { autoAlpha: 1 }, "frame1")
        .to(indication, .25, { autoAlpha: 1, delay: .50 })
		
		.addLabel("frame2","+=6.00")
		.to(indication, .25, { autoAlpha: 0 }, "frame2")
        .to(remission, .25, { autoAlpha: 0 }, "frame2")
        .to(domore, .25, { autoAlpha: 1 }, "frame2")
        .to(cta, .25, { autoAlpha: 1 }, "frame2")
		.to(isi, .25, { autoAlpha:1 }, "frame2")
		
	.pause();
		
	startAnimation();
}
function startAnimation() {
    console.log("startAnimation");
    mainTimeline.play();
}

function completeTimeline() {
    console.log("completeTimeline");
    startScrolling();
    TweenMax.to(replay, 2, { autoAlpha: 1 })
}

function completeAutoscroll() {
    console.log("completeAutoscroll()");
}
function resumeTimeline() {

    mainTimeline.play()
}
function initVideo() {
    mainTimeline.pause();
    //startTheVideo(); 
    setTimeout(startTheVideo, 500);
}

function startTheVideo() {
    video1.currentTime = 0;
    video1.play();
}

function setupVideo() {
    video1 = document.getElementById('video1');

    Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
        studio.video.Reporter.attach('video_1', video1);
    });

    //video1.addEventListener('abort', videoEventHandler, false);//Script to be run on abort
    //video1.addEventListener('canplay', videoEventHandler, false);//Script to be run when a file is ready to start playing (when it has buffered enough to begin)
    //video1.addEventListener('canplaythrough', videoEventHandler, false);//Script to be run when a file can be played all the way to the end without pausing for buffering
    //video1.addEventListener('cuechange', videoEventHandler, false);//Script to be run when the cue changes in a <track> element
    //video1.addEventListener('durationchange', videoEventHandler, false);//Script to be run when the length of the media changes
    //video1.addEventListener('emptied', videoEventHandler, false);//Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects)
    video1.addEventListener('ended', videoEventHandler, false);//Script to be run when the media has reach the end (a useful event for messages like "thanks for listening")
    //video1.addEventListener('error', videoEventHandler, false);//Script to be run when an error occurs when the file is being loaded
    //video1.addEventListener('loadeddata', videoEventHandler, false);//Script to be run when media data is loaded
    //video1.addEventListener('loadedmetadata', videoEventHandler, false);//Script to be run when meta data (like dimensions and duration) are loaded
    //video1.addEventListener('loadstart', videoEventHandler, false);//Script to be run just as the file begins to load before anything is actually loaded
    //video1.addEventListener('pause', videoEventHandler, false);//Script to be run when the media is paused either by the user or programmatically
    //video1.addEventListener('play', videoEventHandler, false);//Script to be run when the media is ready to start playing
    //video1.addEventListener('playing', videoEventHandler, false);//Script to be run when the media actually has started playing
    //video1.addEventListener('progress', videoEventHandler, false);//Script to be run when the browser is in the process of getting the media data
    //video1.addEventListener('ratechange', videoEventHandler, false);//Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode)
    //video1.addEventListener('seeked', videoEventHandler, false);//Script to be run when the seeking attribute is set to false indicating that seeking has ended
    //video1.addEventListener('seeking', videoEventHandler, false);//Script to be run when the seeking attribute is set to true indicating that seeking is active
    //video1.addEventListener('stalled', videoEventHandler, false);//Script to be run when the browser is unable to fetch the media data for whatever reason
    //video1.addEventListener('suspend', videoEventHandler, false);//Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason
    video1.addEventListener('timeupdate', videoEventHandler, false);//Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)
    //video1.addEventListener('volumechange', videoEventHandler, false);//Script to be run each time the volume is changed which (includes setting the volume to "mute")
    //video1.addEventListener('waiting', videoEventHandler, false);//Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data)
}
function videoEventHandler(e) {
    switch (e.type) {
        case "timeupdate": try { fakeCuepoint(); } catch (er) { } break;
        case "ended": resumeTimeline(); break;
        default:
    }
}

var fakeCuepointList = [-1, 0, 5];
var previousFakeCuepoint, currentFakeCuepoint;
function fakeCuepoint(e) {
    var i = parseInt(video1.currentTime);
    console.log(video1.currentTime)
    if (window["fakeCuepointList"].indexOf(i) > 0) {
        currentFakeCuepoint = i;
        if (currentFakeCuepoint != previousFakeCuepoint) {
            previousFakeCuepoint = currentFakeCuepoint;
            if (i == fakeCuepointList[1]) {
                displayFirstText();
            } else if (i == fakeCuepointList[2]) {
                displaySecondText();
            }
        }
    }
}
function displayFirstText() {
    console.log("DISPLAY THE FIRST PIECE OF TEXT")
    TweenMax.to(areyou, .25, { autoAlpha: 1 })
}
function displaySecondText() {
    console.log("REMOVE THE FIRST PIECE OF TEXT and DISPLAY THE SECOND PIECE OF TEXT")
    TweenMax.to(areyou, .25, { autoAlpha: 0 })
    TweenMax.to(despite, .25, { autoAlpha: 1 })

}

