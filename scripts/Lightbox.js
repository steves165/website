var that = this;

function main() {

	jQuery('#here').on('click', function() {
		that.init();
	});

}

function init() {
	jQuery('#lightboxOverlay').css({
		opacity : 0.8,
		color : black,
		height : jQuery(window).height(),
		width : jQuery(window).width(),
		top : 0,
		left : 0,
		'z-index' : 10000,
		display : block
	});

}

jQuery(document).ready(function() {
	that.main();
});




