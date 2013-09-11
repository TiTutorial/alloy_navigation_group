function doClick(e) {
	alert("OS_ANDROID = " + OS_ANDROID);
};

function openNavGroup() {
	var controller = Alloy.createController('index');
	var win = controller.getView();
	win.open();
};

if (OS_ANDROID) {
	alert("no navigation group");
} else {
	Alloy.Globals.navgroup = $.navgroup;
}

//init
if (OS_ANDROID) {
	var controller = Alloy.createController('detail');
	var win = controller.getView();
	win.open();
} else {
	$.index.open();
}

