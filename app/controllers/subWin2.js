var animation = require('alloy/animation');

function finishCallback(){
	if (OS_ANDROID) {
		$.win2.close();
	} else {
		Alloy.Globals.navgroup.close();
	}
};

function doNavigate (){
	animation.shake($.redView, 250, finishCallback);
};