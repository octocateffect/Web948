class Good {
    name: string;
    price: string;
    url: string;
}

class Company {
    name: string;
    goods: Good[];
}

class App {
    private vm: Company[] = [];

    private height: number;

    init() {
        console.log("init");

        this.height = $(".mobile").height();
        console.log(this.height);

        const homeBlock = $(".mobile .home");
        const menuBlock = $(".mobile .menu");

        const btns = $(".mobile .home a");
        console.log(btns);
        btns.click(() => {
            homeBlock.css({
                "display": "none"
            });

            const height = this.height - (54 * 2);
            $(".menu .menu-area").css({
                "height": `${height}`
            });
            menuBlock.show();
        });

        const homeBtn = $(".mobile a[value=Home]");

        const menuBtn = $(".mobile a[value=Menu]");

        const detailBtn = $(".mobile a[value=Detail]");

        const detailBlock = $(".mobile .detail");

        console.log(homeBtn);

        console.log(menuBtn);

        console.log(detailBtn);
    }
}

var app = new App();
app.init();