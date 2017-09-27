var id, stageWidth, stageHeight;
var mainTimeline, numOfLoops = 0, loopDelay = 1;
var rolloverTimeline

var isReplay = false;

function replayAnimation() {
    isReplay = true;
    interruptScroll();
    resetISI();
    mainTimeline.repeat(numOfLoops);
    mainTimeline.pause(0);
    mainTimeline.play();
    TweenMax.set(replay, { autoAlpha: 1 });
    rolloverTimeline.pause(0);
    TweenMax.set(arrows, { autoAlpha: 0 });
    TweenMax.set(replay, { autoAlpha: 0 });
}

function init() {
    console.log("INIT");
    id = document.getElementsByTagName('body')[0].id;
    console.log("id " + id);
    stageWidth = parseInt(id.substring(3, id.indexOf("x")));
    stageHeight = parseInt(id.substring(id.indexOf("x") + 1));
    //create variables of each div in the HTML file
    var array = document.getElementsByTagName("div");
    var ii = array.length;
    for (i = 0; i < ii; i++) {
        if (array[i].id) {
            window[array[i].id] = getElem(array[i].id);
        }
    }

    replay.addEventListener("click", replayAnimation);
    cta.addEventListener("mouseover", ctaOver);


    var epass = "64Z-1856212";
    setupISI("ABB_CROHNS_NOUSE_0001", epass, "enhanced");
    numOfLoops = 0;
    loopDelay = 0;
    rolloverTimeline = new TimelineMax()

    mainTimeline = new TimelineMax({ onComplete: completeTimeline, repeat: numOfLoops, repeatDelay: loopDelay });
		
	mainTimeline	
		.set([
			cover,border,isi,background, 
			eyebrow, text1, one, two, three,
            text2, text3, text4,
			getElem("isiHeaderText")
		],{autoAlpha:1})
		.set(isi, { top:600 })
        .set([cta, arrows], { x: 0 })
                .set(replayGraphic, { fill: "#a90056" })


        .addLabel("frame3", "+=1.50")
        .to(one, .25, { autoAlpha: 0 }, "frame3")
        .to(two, .25, { autoAlpha: 0 }, "frame3")
        .to(three, .25, { autoAlpha: 0 }, "frame3")
        .to(text2, .25, { autoAlpha: 0 }, "frame3")
        .to(text3, .25, { autoAlpha: 0 }, "frame3")
        .to(text4, .25, { autoAlpha: 0 }, "frame3")

        .addLabel("frame4", "+=.25")
        .to(four, .25, { autoAlpha: 1 }, "frame4")
        .to(five, .25, { autoAlpha: 1 }, "frame4")
        .to(six, .25, { autoAlpha: 1 }, "frame4")
        .to(text5, .10, { autoAlpha: 1 }, "frame4")
        .to(text6, .10, { autoAlpha: 1 }, "frame4")
        .to(text7, .10, { autoAlpha: 1 }, "frame4")

        .addLabel("frame5", "+=1.50")
        .to(four, .25, { autoAlpha: 0 }, "frame5")
        .to(five, .25, { autoAlpha: 0 }, "frame5")
        .to(six, .25, { autoAlpha: 0 }, "frame5")
        .to(text5, .25, { autoAlpha: 0 }, "frame5")
        .to(text6, .25, { autoAlpha: 0 }, "frame5")
        .to(text7, .25, { autoAlpha: 0 }, "frame5")

        .addLabel("frame6", "+=.25")
        .to(seven, .25, { autoAlpha: 1 }, "frame6")
        .to(eight, .25, { autoAlpha: 1 }, "frame6")
        .to(nine, .25, { autoAlpha: 1 }, "frame6")
        .to(text8, .10, { autoAlpha: 1 }, "frame6")
        .to(text9, .10, { autoAlpha: 1 }, "frame6")
        .to(text10, .10, { autoAlpha: 1 }, "frame6")

	    .addLabel("frame7", "+=1.00")
        .to(seven, .25, { autoAlpha: 0, delay:1.00 }, "frame7")
        .to(eight, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(nine, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(text1, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(text8, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(text9, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(text10, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")
        .to(eyebrow, .25, { autoAlpha: 0, delay: 1.00 }, "frame7")

        .addLabel("frame14", "+=.25")
        .to(humiralogo, .25, { autoAlpha: 1 }, "frame14")
        .to(text11, .25, { autoAlpha: 1 }, "frame14")
		.to(text15, .25, { autoAlpha: 1 }, "frame14")
        .to(text12, .25, { autoAlpha: 1 })
        .to(text13, .25, { autoAlpha: 1 })
        .to(text14, .25, { autoAlpha: 1 })

        .addLabel("frame15", "+=7.00")
        .to(text11, .25, { autoAlpha: 0 }, "frame15")
        .to(text12, .25, { autoAlpha: 0 }, "frame15")
        .to(text13, .25, { autoAlpha: 0 }, "frame15")
        .to(text14, .25, { autoAlpha: 0 }, "frame15")
        .to(text15, .25, { autoAlpha: 0 }, "frame15")

        .addLabel("frame16", "+=.25")
        .to(isi, .25, { autoAlpha: 1, top: 126 }, "frame16")
		.to(humiralogo, .25, {top: 53 }, "frame16")
        .to(text16, .25, { autoAlpha: 1 }, "frame16")

        .addLabel("frame17", "+=.50")
		.to(cta, .50, { autoAlpha: 1, left:134 }, "frame17")
        .to(text17, .50, { autoAlpha: 1, left:141 }, "frame17")
        .to(arrows, .50, { autoAlpha: 1, left: 268 }, "frame17")
        .to(arrows, .50, { autoAlpha: 1, left: 270 })
        .to(arrows, .50, { autoAlpha: 1, left: 268 })
        .to(arrows, .50, { autoAlpha: 1, left: 270 })
		.to(arrows, .50, { autoAlpha: 1, left: 271 })
	
	.pause();

    startAnimation();
}
function ctaOver() {
    console.log('hitting it')
    rolloverTimeline.to(arrows, .50, { autoAlpha: 1, left: 268 })
    rolloverTimeline.to(arrows, .50, { autoAlpha: 1, left: 270 })
    rolloverTimeline.to(arrows, .50, { autoAlpha: 1, left: 268 })
    rolloverTimeline.to(arrows, .50, { autoAlpha: 1, left: 270 })
    rolloverTimeline.play()
}
function startAnimation() {
    console.log("startAnimation");
    mainTimeline.play();
}

function completeTimeline() {
    console.log("completeTimeline");
    startScrolling();
    if (id == "dim728x90") {
        TweenMax.set(replay, { top: stageHeight - replay.offsetHeight - 2, left: isi.offsetLeft - replay.offsetWidth - 2 });
    } else {
        TweenMax.set(replay, { top: isi.offsetTop + isiHeaderLinksHolder.offsetTop - replay.offsetHeight - 2, left: isiHeaderLinksHolder.offsetWidth - replay.offsetWidth - 2 });
    }
    TweenMax.to(replay, 2, { autoAlpha: 1 })
}

function completeAutoscroll() {
    console.log("completeAutoscroll()");
}