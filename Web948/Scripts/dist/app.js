var MenuItem = (function () {
    function MenuItem() {
    }
    return MenuItem;
}());
var Condition = (function () {
    function Condition() {
    }
    return Condition;
}());
var App = (function () {
    function App() {
        this.menus = [];
    }
    App.prototype.getMenus = function (callback) {
        var _this = this;
        var url = "Content/menus.json";
        $.ajax({
            type: "get",
            url: url,
            dataType: "json",
            beforeSend: function () {
            },
            success: function (response) {
                var data = [];
                var i = 0;
                while (response[0][i]) {
                    var item = response[0][i];
                    data.push({
                        id: item["id"],
                        name: item["name"],
                        category: item["category"],
                        imageurl: item["image_url"],
                        prices: item["prices"],
                        items: item["items"]
                    });
                    i++;
                }
                _this.menus = data;
                callback();
            },
            complete: function () {
            },
            error: function (xhr, status, text) {
            }
        });
    };
    App.prototype.initHeight = function () {
        this.height = $(".mobile").height();
    };
    App.prototype.initBtnEvent = function () {
        var _this = this;
        var homeBlock = $(".mobile .home");
        var menuBlock = $(".mobile .menu");
        var detailBlock = $(".mobile .detail");
        var homeBtns = $(".mobile .home a");
        homeBtns.click(function () {
            homeBlock.css({
                "display": "none"
            });
            var height = (_this.height * 0.92 - (54 * 2));
            $(".menu .menu-area").css({
                "height": "" + height
            });
            menuBlock.show();
        });
        var companyBtns = $(".mobile .showCompanyMenuBtnArea a");
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
    App.prototype.generateSlideContentItem = function (item) {
        var image = item.imageurl || "../../Content/images/food1.png";
        var html = "<li class=\"slideItem\" style=\"background-image: url('" + image + "');\">\n                        <div class=\"row center\">\n                            <span class=\"slidLeftBtn\">\n                                <a href=\"#\" value=\"" + item.id + "\" class=\"btn btn-large left orange\">\n                                    <i class=\"material-icons\">remove</i>\n                                </a>\n                            </span>\n                            <span class=\"slideImgMask center\">\n<div class=\"item-name\">" + item.name.trim() + "</div>\n<div class=\"item-price\">" + item.prices + " \u5143</div>\n                            </span>\n                            <span class=\"slidRightBtn\">\n                                <a href=\"#\" value=\"" + item.id + "\" class=\"btn btn-large right orange\">\n                                    <i class=\"material-icons\">add</i>\n                                </a>\n                            </span>\n                        </div>\n                    </li>";
        return html;
    };
    App.prototype.generateSlideContent = function () {
        var _this = this;
        var menus = this.menus;
        var html = " <ul><li class=\"slideItem\" style=\"height: 50px\"></li>";
        menus.map(function (menu) {
            html += _this.generateSlideContentItem(menu);
        });
        html += "<li class=\"slideItem\" style=\"height: 50px\"></li></ul>";
        return html;
    };
    App.prototype.insertslideContent = function () {
        $(".slidewapper").html(this.generateSlideContent());
    };
    App.prototype.init = function () {
        var _this = this;
        this.initHeight();
        this.initBtnEvent();
        this.getMenus(function () {
            _this.insertslideContent();
        });
    };
    return App;
}());
var app = new App();
app.init();
