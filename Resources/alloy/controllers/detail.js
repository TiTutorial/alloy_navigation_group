function Controller() {
    function finishCallback() {
        var controller = Alloy.createController("subWin1");
        var win = controller.getView();
        Alloy.Globals.navgroup.open(win);
    }
    function doNavigate() {
        animation.shake($.blueView, 250, finishCallback);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "#ccc",
        title: "NavGroup Demo",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.blueView = Ti.UI.createView({
        width: "150dp",
        height: "150dp",
        backgroundColor: "blue",
        id: "blueView"
    });
    $.__views.detail.add($.__views.blueView);
    doNavigate ? $.__views.blueView.addEventListener("click", doNavigate) : __defers["$.__views.blueView!click!doNavigate"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Click to open Win1",
        textAlign: "center",
        color: "#000",
        font: {
            fontSize: "20dp"
        },
        id: "__alloyId0"
    });
    $.__views.blueView.add($.__views.__alloyId0);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    __defers["$.__views.blueView!click!doNavigate"] && $.__views.blueView.addEventListener("click", doNavigate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;