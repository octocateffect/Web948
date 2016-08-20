var Good = (function () {
    function Good() {
    }
    return Good;
}());
var Company = (function () {
    function Company() {
    }
    return Company;
}());
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
        var detailBlock = $(".mobile .detail");
        var homeBtns = $(".mobile .home a");
        console.log(homeBtns);
        homeBtns.click(function () {
            homeBlock.css({
                "display": "none"
            });
            var height = _this.height - (54 * 2);
            $(".menu .menu-area").css({
                "height": "" + height
            });
            menuBlock.show();
        });
        var companyBtns = $(".mobile .showCompanyMenuBtnArea a");
        console.log(companyBtns);
        companyBtns.click(function () {
            detailBlock.hide();
        });
        var showDetailBtn = $(".mobile a[value=ShowDetail]");
        showDetailBtn.click(function () {
            $(".mobile .detail").show();
        });
        var closeDetailBtn = $(".mobile a[value=CloseDetail]");
        closeDetailBtn.click(function () {
            detailBlock.hide();
        });
        var homeBtn = $(".mobile a[value=Home]");
        var menuBtn = $(".mobile a[value=Menu]");
        var detailBtn = $(".mobile a[value=Detail]");
        console.log(homeBtn);
        console.log(menuBtn);
        console.log(detailBtn);
    };
    return App;
}());
var app = new App();
app.init();
