// JavaScript Document

/*	created <div> in HTML underneath canvas that contains
	dynamic background image to be revealed when user scratches off
*/
var scratchoff_bg = myFT.$("#scratchoff_bg");
scratchoff_bg[0].style.backgroundImage = "url(" + myFT.instantAds.image2; +")";
scratchoff_start = myFT.instantAds.image1;

// added clickTag to scratch off image that is being revealed

myFT.applyClickTag(scratchoff_bg, 1, myFT.instantAds.clickthrough_url)

function removeCanvas() {

	//change cursor to pointer
	scratchoff_bg[0].style.cursor = "pointer";
	// set scratchoff to target DIV id scratchoff
	var scratchoff = myFT.$("#scratchoff");
	// hide canvas element with scratch functionality/animation/interactivity
	scratchoff[0].style.visibility = "hidden";

}
// Use the following function skipToEnd() to jump to the final frame (by removing the canvas)
function skipToEnd() {
	clearTimeout(endFrameTimeout);
	removeCanvas();

}

// adding timeout to remove canvas after a certain amount of seconds (in this case 3000 MS or 3 seconds)
var endFrameTimeout = setTimeout(function () {
	skipToEnd();
}, 8000)


////////////////////////////////////////////////////////

var scratchoff = document.getElementById("scratchoff"),
	scratchoffCanvas = scratchoff.getContext('2d'),
	brushRadius = (scratchoff.width / 100) * 5,
	img = new Image();

if (brushRadius < 27) { brushRadius = 27 }

img.onload = function () {
	scratchoffCanvas.drawImage(img, 0, 0, scratchoff.width, scratchoff.height);
}
img.src = scratchoff_start;


function detectLeftButton(event) {
	if ('buttons' in event) {
		return event.buttons === 1;
	} else if ('which' in event) {
		return event.which === 1;
	} else {
		return event.button === 1;
	}
}

function getBrushPos(xRef, yRef) {
	var scratchoffRect = scratchoff.getBoundingClientRect();
	return {
		x: Math.floor((xRef - scratchoffRect.left) / (scratchoffRect.right - scratchoffRect.left) * scratchoff.width),
		y: Math.floor((yRef - scratchoffRect.top) / (scratchoffRect.bottom - scratchoffRect.top) * scratchoff.height)
	};
}

function drawDot(mouseX, mouseY) {
	scratchoffCanvas.beginPath();
	scratchoffCanvas.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
	scratchoffCanvas.fillStyle = '#000';
	scratchoffCanvas.globalCompositeOperation = "destination-out";
	scratchoffCanvas.fill();
}

scratchoff.addEventListener("mousemove", function (e) {
	var brushPos = getBrushPos(e.clientX, e.clientY);
	var leftBut = detectLeftButton(e);
	if (leftBut == 1) {
		drawDot(brushPos.x, brushPos.y);
	}
}, false);

scratchoff.addEventListener("touchmove", function (e) {
	e.preventDefault();
	var touch = e.targetTouches[0];
	if (touch) {
		var brushPos = getBrushPos(touch.pageX, touch.pageY);
		drawDot(brushPos.x, brushPos.y);
	}
}, false);