function Controller() {
    function finishCallback() {
        Alloy.Globals.navgroup.close();
    }
    function doNavigate() {
        animation.shake($.redView, 250, finishCallback);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "subWin2";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.win2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Window 2",
        id: "win2"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.redView = Ti.UI.createView({
        width: "150dp",
        height: "150dp",
        backgroundColor: "red",
        id: "redView"
    });
    $.__views.win2.add($.__views.redView);
    doNavigate ? $.__views.redView.addEventListener("click", doNavigate) : __defers["$.__views.redView!click!doNavigate"] = true;
    $.__views.__alloyId2 = Ti.UI.createLabel({
        text: "Click to close NavGroup",
        textAlign: "center",
        color: "#000",
        font: {
            fontSize: "20dp"
        },
        id: "__alloyId2"
    });
    $.__views.redView.add($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var animation = require("alloy/animation");
    __defers["$.__views.redView!click!doNavigate"] && $.__views.redView.addEventListener("click", doNavigate);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;