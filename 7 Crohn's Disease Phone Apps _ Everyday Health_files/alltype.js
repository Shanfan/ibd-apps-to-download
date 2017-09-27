var id,time,delay,loopMax = 0, loopCount = 0;
var animationStartTime,loopStartTime,loopFinishTime;
var stageWidth, stageHeight;
function init() {
	id = document.getElementsByTagName('body')[0].id;
	console.log("id " + id);
	stageWidth = parseInt(id.substring(3,id.indexOf("x")));
	stageHeight = parseInt(id.substring(id.indexOf("x") + 1));
	animationStartTime = new Date().getTime();
	
	loopMax = 0;
	
	switch (id) {
	    case 'dim160x600':
	        getElem('text1').innerHTML = "Crohn's <br> symptoms";
	        getElem('text2').innerHTML = "If you're <br> living with <br> moderate to <br> severe <br> Crohn's,";
	        getElem('text3').innerHTML = "it may feel <br> like your <br> life revolves <br> around your <br> symptoms.";
	        getElem('text4').innerHTML = "Learn about <br> a treatment <br> option that <br> helps reduce <br> Crohn's <br> symptoms.";
	        getElem('text5').innerHTML = "HUMIRA is a prescription <br> medicine used to reduce <br> signs and symptoms, and <br> to achieve and maintain <br> clinical remission in <br> adults with moderate to <br> severe Crohn's disease <br> who have not responded <br> well to certain other <br> medications."
	        getElem('text6').innerHTML = "How are <br> Crohn's symptoms <br> affecting you?"
	        getElem('top_text').innerHTML = "Moderate to Severe <br> Crohn's Disease";
	        getElem('ctaText').innerHTML = "Take the Assessment"
	        getElem('isiHead').innerHTML = "Important Safety <br> Information About <br> HUMIRA<sup>&#174;</sup> (adalimumab)<sup>1</sup>";
	        break;
	    case 'dim728x90':
	        getElem('text1').innerHTML = "Crohn's symptoms";
	        getElem('text2').innerHTML = "If you're living with moderate <br> to severe Crohn's,";
	        getElem('text3').innerHTML = "it may feel like your life revolves <br> around your symptoms.";
	        getElem('text4').innerHTML = "Learn about a treatment option <br> that helps reduce Crohn's symptoms.";
	        getElem('text5').innerHTML = "HUMIRA is a prescription medicine used to reduce signs and  symptoms, <br> and to achieve and maintain clinical remission in adults with moderate to <br> severe  Crohn's disease who have not responded well to certain other <br> medications."
	        getElem('text6').innerHTML = "How are Crohn's symptoms affecting you?"
	        getElem('top_text').innerHTML = "Moderate to Severe Crohn's Disease";
	        getElem('ctaText').innerHTML = "Take the Assessment"
	        getElem('isiHead').innerHTML = "Important Safety Information About HUMIRA<sup>&#174;</sup> (adalimumab)<sup>1</sup>";
	        break;
	    case 'dim300x600':
	        getElem('text1').innerHTML = "Crohn's <br> symptoms";
	        getElem('text2').innerHTML = "If you're <br> living with <br> moderate to <br> severe <br> Crohn's,";
	        getElem('text3').innerHTML = "it may feel <br> like your <br> life revolves <br> around your <br> symptoms.";
	        getElem('text4').innerHTML = "Learn about <br> a treatment <br> option that <br> helps reduce <br> Crohn's <br> symptoms.";
	        getElem('text5').innerHTML = "HUMIRA is a prescription <br> medicine used to reduce signs <br> and symptoms, and to achieve <br> and maintain clinical remission <br> in adults with moderate to <br> severe Crohn's disease who have <br> not responded well to <br> certain other medications.";
	        getElem('text6').innerHTML = "How are Crohn's <br> symptoms affecting you?"
	        getElem('top_text').innerHTML = "Moderate to Severe Crohn's Disease";
	        getElem('ctaText').innerHTML = "Take the Assessment"
	        getElem('isiHead').innerHTML = "Important Safety Information About <br> HUMIRA<sup>&#174;</sup> (adalimumab)<sup>1</sup>";
	        break;
	    case 'dim300x250':
	        getElem('text1').innerHTML = "Crohn's <br> symptoms";
	        getElem('text2').innerHTML = "If you're living <br> with moderate to <br> severe Crohn's,";
	        getElem('text3').innerHTML = "it may feel like <br> your life revolves <br> around your <br> symptoms.";
	        getElem('text4').innerHTML = "Learn about a <br> treatment option <br> that helps reduce <br> Crohn's symptoms.";
	       	getElem('text5').innerHTML = "HUMIRA is a prescription medicine used to reduce <br> signs and symptoms, and to achieve and <br> maintain clinical remission in adults with <br> moderate to severe Crohn's disease  who have <br> not responded well to certain other medications."
	        getElem('text6').innerHTML = "How are <br> Crohn's symptoms <br> affecting you?"
	        getElem('top_text').innerHTML = "Moderate to Severe Crohn's Disease";
	        getElem('ctaText').innerHTML = "Take the Assessment"
	        getElem('isiHead').innerHTML = "Important Safety Information About <br> HUMIRA<sup>&#174;</sup> (adalimumab)<sup>1</sup>";
	        break;
	    default:
	        console.log('No match', id)
	}
    getElem('number').innerHTML = "64Z-1552007"
	getElem("isiText").innerHTML = isiText;
	getElem("ctaPI").innerHTML = "<a href='javascript:foo()' id='ctaPI' class='isiHeaderLink'>Full Prescribing Information ></a>",
    getElem("ctaMG").innerHTML = "<a href='javascript:foo()' id='ctaMG' class='isiHeaderLink'>Medication Guide ></a>"

    //add events
	getElem('hotspot').addEventListener('click', exitHandler, false);
	getElem('ctaPI').addEventListener('click', exitHandler, false);
	getElem('ctaMG').addEventListener('click', exitHandler, false);
	getElem('refresh').addEventListener('click', resetAll, false);


	
	resetAll();


}
function resetAll() {
	console.log("resetAll");
	time = 1;
	delay = 1;
	//just in case...
	TweenMax.killTweensOf(getElem('isiTextHolder'));
	//show on launch
	TweenMax.set(
   [
       getElem('cover'), getElem('border'), getElem('container'), getElem('pointing'), getElem('isiHead'), getElem('isiText'), getElem('ctaPI'), getElem('ctaMG'), getElem('isiHeader'), getElem('background'),
       getElem('text1'), getElem('swirling_text')
   ], { alpha: 1 });
	TweenMax.set(
		[
			getElem('cta'), getElem('text2'), getElem('text3'), getElem('text5'), getElem('text6'),
            getElem('FP'), getElem('MG'), getElem('logo'), getElem('isi'), getElem('banner'), getElem('refresh'),
           
		], { alpha: 0 });

	switch (id) {
	    case 'dim160x600':
	        TweenMax.set(getElem('refresh'), { alpha: 0, left: stageWidth, delay: delay });
	        break;

	    case 'dim728x90':
	    	TweenMax.set(getElem('ctaPI'), {top:90});
	    	TweenMax.set(getElem('ctaMG'), {top:90});
	        TweenMax.to(getElem('refresh'), time, { alpha: 0, top: stageHeight, delay: delay });
	        break;
	        
	    case 'dim300x600':
	        TweenMax.set(getElem('refresh'), { alpha: 0, left: stageWidth, delay: delay });
	        break;
	    case 'dim300x250':
	        TweenMax.set(getElem('refresh'), { alpha: 0, left: stageWidth, delay: delay });
	        break;
	    default:
	        console.log('No match', id)
	}

	resetISI();
	startAnimation();
}
//
//
//
function startAnimation() {
	console.log("startAnimation");
	loopStartTime = new Date().getTime();
	var time = .25;
	var delay = .5;
	TweenMax.set(getElem('isi'), { alpha: 0, top: stageHeight });
	TweenMax.to(getElem('text1'), time, { alpha: 1, delay: delay });
	TweenMax.to(getElem('swirling_text'), 20, { rotation: "360", ease: Linear.easeNone, repeat: -1 });
	TweenMax.to(getElem('background'), time, { delay: delay, onComplete: step1 });	
}

function step1() {
    console.log('Complete Step 1')
    var time = 1.5;
    var delay = .25;
    TweenMax.to(getElem('text1'), time, { alpha: 0, delay: delay });

    TweenMax.to(getElem('text2'), time, { alpha: 1, delay: delay, onComplete: step2 });
    
}


function step2() {
    console.log('Complete Step 2')
    var time = 1.5;
    var delay = 1;
    TweenMax.to(getElem('text2'), time, { alpha: 0, delay: delay });

    TweenMax.to(getElem('text3'), time, { alpha: 1, delay: delay, onComplete: step3 });
    
}

function step3() {
    console.log('Complete Step 3')
    var time = 2;
    var delay = 1;
    TweenMax.to(getElem('text3'), time, { alpha: 0, delay: delay });
    TweenMax.to(getElem('swirling_text'), time, { alpha: 0, delay: delay });
    

    switch (id) {
        case 'dim160x600':
            TweenMax.set(getElem('top_text'), { alpha: 1, delay: delay });
            break;
        case 'dim728x90':
            TweenMax.set(getElem('top_text'), { alpha: 1, left: 275, top: 3, delay: delay });
            break;
        case 'dim300x600':
            TweenMax.set(getElem('top_text'), { alpha: 1, delay: delay });
            break;
        case 'dim300x250':
            TweenMax.set(getElem('top_text'), { alpha: 1, delay: delay });
            break;
        default:
    }


    TweenMax.to(getElem('top_text'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('text4'), time, { alpha: 1, delay: delay, onComplete: step4  });
}


function step4() {
    console.log('Complete Step 4')
    var time = 2;
    var delay = 1;
    TweenMax.killTweensOf(getElem('swirling_text'));
    TweenMax.to(getElem('text4'), time, { alpha: 0, delay: delay });

    switch (id) {
        case 'dim728x90':
            TweenMax.to(getElem('top_text'), time, { alpha: 1, left:73, delay: delay });
            break;
        default:
    }
   
    TweenMax.to(getElem('isiHead'), time, { delay: delay });
    TweenMax.to(getElem('logobig'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('text5'), time, { alpha: 1, delay: delay, onComplete: step5 });
}

function step5() {
    console.log('Complete Step 5')
    var time = .75;
    var delay = 7.50;

    switch (id) {
        case 'dim160x600':
            TweenMax.set(getElem('refresh'), { alpha: 0, left: 135, delay: delay }); break;
        case 'dim728x90':
            TweenMax.set(getElem('refresh'), { alpha: 0, top: 67, delay: delay }); break;
        case 'dim300x600':
            TweenMax.set(getElem('refresh'), { alpha: 0, left: 275, delay: delay }); break;
        case 'dim300x250':
            TweenMax.set(getElem('refresh'), { alpha: 0, left: 275, delay: delay }); break;
        default:
            console.log('No match', id)
    }

    TweenMax.to(getElem('text4'), time, { alpha: 0, delay: delay });
    TweenMax.to(getElem('text5'), time, { alpha: 0, delay: delay });
    TweenMax.to(getElem('top_text'), time, { alpha: 0, delay: delay });
    TweenMax.to(getElem('refresh'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('cta'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('ctaText'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('logobig'), time, { alpha: 0, delay: delay });

    TweenMax.to(getElem('logo'), time, { alpha: 1, delay: delay });
    TweenMax.to(getElem('text6'), time, { alpha: 1, delay: delay });

    switch (id) {
        case 'dim160x600':
            TweenMax.to(getElem('isi'), time, { top: 195, delay: delay });
            TweenMax.to(getElem('ctaPI'), time, { top: 8, delay: delay });
            TweenMax.to(getElem('ctaMG'), time, { top: 23, delay: delay, onComplete: finishLoop });

            break;
        case 'dim728x90':
            TweenMax.to(getElem('isi'), time, { top: 0, delay: delay });
            TweenMax.to(getElem('ctaPI'), time, { top: 78, delay: delay });
            TweenMax.to(getElem('ctaMG'), time, { top: 78, delay: delay, onComplete: finishLoop });

            break;
        case 'dim300x600':
            TweenMax.to(getElem('isi'), time, { top: 259, delay: delay });
            TweenMax.to(getElem('ctaPI'), time, { top: 5, delay: delay });
            TweenMax.to(getElem('ctaMG'), time, { top: 5, delay: delay, onComplete: finishLoop  });

            break;
        case 'dim300x250':
            TweenMax.to(getElem('isi'), time, { top: 114, delay: delay });
            TweenMax.to(getElem('ctaPI'), time, { top: 5, delay: delay });
            TweenMax.to(getElem('ctaMG'), time, { top: 5, delay: delay, onComplete: finishLoop });

            break;
        default:
    }

   

}


function finishLoop() {
    loopFinishTime = new Date().getTime();
	loopCount++;
	console.log("loop count", loopCount, "loop time",((loopFinishTime - loopStartTime)/1000),"seconds");
	if(loopCount < loopMax){
		setTimeout(resetAll,(delay*1000));
	} else {
		finalStep();
	}
}


function finalStep(){
	if(getElem("isi") != null) {
		startISIScroll(1, 26,"stop");
	} else {
		animationComplete();
	}
}
