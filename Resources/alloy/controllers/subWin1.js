function Controller() {
    function finishCallback() {
        var controller = Alloy.createController("subWin2");
        var win = controller.getView();
        Alloy.Globals.navgroup.open(win);
    }
    function doNavigate() {
        animation.shake($.greenView, 250, finishCallback);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subWin1";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Window 1",
        id: "win1"
    });
    $.__views.win1 && $.addTopLevelView($.__views.win1);
    $.__views.greenView = Ti.UI.createView({
        width: "150dp",
        height: "150dp",
        backgroundColor: "green",
        id: "greenView"
    });
    $.__views.win1.add($.__views.greenView);
    doNavigate ? $.__views.greenView.addEventListener("click", doNavigate) : __defers["$.__views.greenView!click!doNavigate"] = true;
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Click to open Win2",
        textAlign: "center",
        color: "#000",
        font: {
            fontSize: "20dp"
        },
        id: "__alloyId1"
    });
    $.__views.greenView.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    __defers["$.__views.greenView!click!doNavigate"] && $.__views.greenView.addEventListener("click", doNavigate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;