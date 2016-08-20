class Good {
    name: string;
    price: string;
    url: string;
}

class Company {
    name: string;
    goods: Good[];
}

class Condition {
    menu: string;
    items: string[];
}

class App {
    private vm: Company[] = [];

    private height: number;

    init() {
        console.log("init");

        // get height
        this.height = $(".mobile").height();
        console.log(this.height);

        // init Block
        const homeBlock = $(".mobile .home");
        const menuBlock = $(".mobile .menu");
        const detailBlock = $(".mobile .detail");

        // Show Menu
        const homeBtns = $(".mobile .home a");
        console.log(homeBtns);
        homeBtns.click(() => {
            homeBlock.css({
                "display": "none"
            });

            const height = this.height - (54 * 2);
            $(".menu .menu-area").css({
                "height": `${height}`
            });
            menuBlock.show();
        });

        // Change Company
        const companyBtns = $(".mobile .showCompanyMenuBtnArea a");
        console.log(companyBtns);
        companyBtns.click(() => {
            detailBlock.hide();
        });

        //ShowDetail
        const showDetailBtn = $(".mobile a[value=ShowDetail]");
        showDetailBtn.click(() => {
            $(".mobile .detail").show();
        });

        // Hide Detail
        const closeDetailBtn = $(".mobile a[value=CloseDetail]");
        closeDetailBtn.click(() => {
            detailBlock.hide();
        });

        ///
        //const homeBtn = $(".mobile a[value=Home]");

        //const menuBtn = $(".mobile a[value=Menu]");

        //const detailBtn = $(".mobile a[value=Detail]");

        //console.log(homeBtn);

        //console.log(menuBtn);

        //console.log(detailBtn);
    }
}

var app = new App();
app.init();