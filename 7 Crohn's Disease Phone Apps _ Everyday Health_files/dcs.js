window.onload = function() {
	if (Enabler.isInitialized()) {
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitHandler);
	}
}
function enablerInitHandler() {
	createBorder();
	preloadFonts();
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
		testLoad();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, testLoad);
	}
}



var loadedItems = 2;
function preloadFonts() {
	if(typeof googleFonts !== 'undefined'){
		WebFontConfig = {
			google: { families: googleFonts },
			active: testLoad,
			fontinactive: function(familyName, fvd) { console.log("Warning: font " + familyName + " could not be loaded."); }
		};
		(function(d) {
			var wf = d.createElement('script'), s = d.scripts[0];
			wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			s.parentNode.insertBefore(wf, s);
		})(document);
	}else{loadedItems--;}
}
function testLoad(){
	loadedItems--;
	if(loadedItems <= 0){ init(); }
}