var animation = require('alloy/animation');

function finishCallback() {
	var controller = Alloy.createController('subWin1');
	var win = controller.getView();
	if (OS_ANDROID) {
		win.open();
	} else {
		Alloy.Globals.navgroup.open(win);
	}
};

function doNavigate() {
	animation.shake($.blueView, 250, finishCallback);
};

