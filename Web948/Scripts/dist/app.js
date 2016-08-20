"use strict";
var Good = (function () {
    function Good() {
    }
    return Good;
}());
exports.Good = Good;
var Company = (function () {
    function Company() {
    }
    return Company;
}());
exports.Company = Company;
var App = (function () {
    function App() {
        this.vm = [];
    }
    App.prototype.init = function () {
        var _this = this;
        console.log("init");
        this.height = $(".mobile").height();
        console.log(this.height);
        var homeBlock = $(".mobile .home");
        var menuBlock = $(".mobile .menu");
        var btns = $(".mobile .home a");
        console.log(btns);
        btns.click(function () {
            homeBlock.css({
                "display": "none"
            });
            var height = _this.height - (54 * 2);
            $(".menu .menu-area").css({
                "height": "" + height
            });
            menuBlock.show();
        });
        var homeBtn = $(".mobile a[value=Home]");
        var menuBtn = $(".mobile a[value=Menu]");
        var detailBtn = $(".mobile a[value=Detail]");
        var detailBlock = $(".mobile .detail");
        console.log(homeBtn);
        console.log(menuBtn);
        console.log(detailBtn);
    };
    return App;
}());
exports.App = App;
var app = new App();
app.init();
