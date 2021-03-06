
// image sources
var imagesSrc = ["https://www.flaticon.com/svg/static/icons/svg/3456/3456656.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456709.svg", "https://www.flaticon.com/svg/static/icons/svg/3456/3456669.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456847.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456890.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456805.svg", "https://www.flaticon.com/premium-icon/icons/svg/3457/3457010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3456/3456953.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437497.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437492.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437488.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437514.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437526.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437502.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437541.svg", "https://www.flaticon.com/premium-icon/icons/svg/3437/3437552.svg", "https://www.flaticon.com/svg/static/icons/svg/3459/3459017.svg", "https://www.flaticon.com/svg/static/icons/svg/3459/3459013.svg", "https://www.flaticon.com/svg/static/icons/svg/3459/3459010.svg", "https://www.flaticon.com/premium-icon/icons/svg/3459/3459064.svg", "https://www.flaticon.com/svg/static/icons/svg/3408/3408545.svg", "https://www.flaticon.com/svg/static/icons/svg/3408/3408678.svg", "https://www.flaticon.com/svg/static/icons/svg/3408/3408551.svg", "https://www.flaticon.com/svg/static/icons/svg/3408/3408736.svg", "https://www.flaticon.com/svg/static/icons/svg/3408/3408800.svg","https://www.flaticon.com/svg/static/icons/svg/3408/3408817.svg"]


// helper functions 
// ===================================

// each function for itiration
function each(coll, fn) {
	if (Array.isArray(coll) || typeof coll === 'string'){
		for (var i = 0; i < coll.length; i++) {
			fn(coll[i], i)
		}
	} else {
		for (var key in coll) {
			fn(coll[key], key)
		}
	}
}

// range function for img id's
function range(min, max) {
	var arr = []
	if (max === undefined) {
		max = min
		min = 0
	}
	for (var e = min; e < max; e++) {
		arr.push(e)
	}
	return arr
}
// random number gen. for randomizing imgs
function randomize(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//select random  new images 
function randomImages(numberOfImages = 8) {
	console.log(numberOfImages)
	var arr = [];
	var imgSrc = imagesSrc.slice(0);
	for (var i = 0; i < numberOfImages; i++) {
		var rand = randomize(0, imgSrc.length - 1);
		arr[i] = imgSrc[rand];
		imgSrc.splice(rand, 1);
	}
	return arr.concat(arr);
}








 