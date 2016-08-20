var Item = (function () {
    function Item() {
    }
    return Item;
}());
var Company = (function () {
    function Company() {
    }
    return Company;
}());
var Condition = (function () {
    function Condition() {
    }
    return Condition;
}());
var App = (function () {
    function App() {
        this.vm = [
            {
                name: "Company 1",
                menu: [
                    {
                        id: "1",
                        name: "Item 1 1",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "2",
                        name: "Item 1 2",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "3",
                        name: "Item 1 3",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "4",
                        name: "Item 1 4",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "5",
                        name: "Item 1 5",
                        price: "10",
                        img: "#"
                    }
                ]
            },
            {
                name: "Company 2",
                menu: [
                    {
                        id: "1",
                        name: "Item 2 1",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "2",
                        name: "Item 21 2",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "3",
                        name: "Item 1 3",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "4",
                        name: "Item 2 4",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "5",
                        name: "Item 2 5",
                        price: "10",
                        img: "#"
                    }
                ]
            },
            {
                name: "Company 3",
                menu: [
                    {
                        id: "1",
                        name: "Item 3 1",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "2",
                        name: "Item 3 2",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "3",
                        name: "Item 3 3",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "4",
                        name: "Item 3 4",
                        price: "10",
                        img: "#"
                    },
                    {
                        id: "5",
                        name: "Item 3 5",
                        price: "10",
                        img: "#"
                    }
                ]
            }
        ];
    }
    App.prototype.initHeight = function () {
        this.height = $(".mobile").height();
        console.log(this.height);
    };
    App.prototype.initBtnEvent = function () {
        var _this = this;
        var homeBlock = $(".mobile .home");
        var menuBlock = $(".mobile .menu");
        var detailBlock = $(".mobile .detail");
        var homeBtns = $(".mobile .home a");
        console.log(homeBtns);
        homeBtns.click(function () {
            homeBlock.css({
                "display": "none"
            });
            var height = (_this.height * 0.86 - (54 * 2));
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
    };
    App.prototype.init = function () {
        console.log("init");
        this.initHeight();
        this.initBtnEvent();
    };
    return App;
}());
var app = new App();
app.init();
