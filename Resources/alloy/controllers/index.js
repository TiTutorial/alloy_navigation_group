function Controller() {
    function openNavGroup() {
        var controller = Alloy.createController("index");
        var win = controller.getView();
        win.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.openBtn = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        title: "Open NavGroup",
        id: "openBtn"
    });
    $.__views.index.add($.__views.openBtn);
    openNavGroup ? $.__views.openBtn.addEventListener("click", openNavGroup) : __defers["$.__views.openBtn!click!openNavGroup"] = true;
    $.__views.detail = Alloy.createController("detail", {
        id: "detail"
    });
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.detail.getViewEx({
            recurse: true
        }),
        id: "navgroup"
    });
    $.__views.index.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.navgroup = $.navgroup;
    alert("open, Alloy.Globals.navgroup = " + Alloy.Globals.navgroup);
    $.index.open();
    __defers["$.__views.openBtn!click!openNavGroup"] && $.__views.openBtn.addEventListener("click", openNavGroup);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;