
function calculateImage(cw, ch, ir) {
	// cw: canvas width
	// ch: canvas height
	// ir: image aspect ratio
	
	// question:
	// Input: Given canvas size and image ratio, resize the image 
	// Output: new image size and position
	
	// requirement: 
	// 1. Preserve image aspect ratio
	// 2. image should be at the center
	// 3. clip as less image as possible
	

	

	return [imgWidth, imgHeight, posX, posY];
}


function calculateImage_solution(cw, ch, ir) {
	// cw: canvas width
	// ch: canvas height
	// ir: image aspect ratio
	
	// question:
	// Input: Given canvas size and image ratio, resize the image 
	// Output: new image size and position
	var cr = cw / ch;
	var imgWidth = 0;
	var imgHeight = 0;
	var posX = 0;
	var posY = 0;

	if( ir >= cr) {
		// image is wider
		// clip the image width
		imgHeight = ch;
		imgWidth = ir * imgHeight;
		posY = 0;
		posX = -(imgWidth - cw ) / 2;

	} else {
		// image is taller
		// clip the image height
		imgWidth = cw;
		imgHeight = imgWidth / ir;
		posX = 0;
		posY = - (imgHeight - ch) / 2; 
		
	}

	

	return [imgWidth, imgHeight, posX, posY];
}