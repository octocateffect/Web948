class MenuItem {
    id: string;
    category: string;
    name: string;
    prices: string;
    imageurl: string;
    items: string[];
}

class Condition {
    menu: string;
    items: string[];
}

class App {
    private height: number;

    private menus: MenuItem[] = [];

    private getMenus(callback: any): void {
        const url = "/Content/menus.json";
        //console.log("ajax start");

        $.ajax({
            type: "get",
            url: url,
            data: null,
            contentType: "json",
            dataType: "json",
            beforeSend: () => {
            },
            success: response => {
                var data: MenuItem[] = [];

                let i = 0;
                while (response[0][i]) {
                    const item = response[0][i];

                    data.push(<MenuItem>{
                        id: item["id"],
                        name: item["name"],
                        category: item["category"],
                        imageurl: item["image_url"],
                        prices: item["prices"],
                        items: item["items"]
                    });

                    i++;
                }

                this.menus = data;

                callback();
            },
            complete: () => {
            },
            error: (xhr, status, text) => {
                //console.log(text);
            }
        });

        //return data;
    }

    private initHeight() {
        // init height
        this.height = $(".mobile").height();
        //console.log(this.height);
    }

    private initBtnEvent(): void {
        // init Block
        const homeBlock = $(".mobile .home");
        const menuBlock = $(".mobile .menu");
        const detailBlock = $(".mobile .detail");

        // Show Menu
        const homeBtns = $(".mobile .home a");
        //console.log(homeBtns);
        homeBtns.click(() => {
            homeBlock.css({
                "display": "none"
            });

            const height = (this.height * 0.92 - (54 * 2));
            $(".menu .menu-area").css({
                "height": `${height}`
            });
            menuBlock.show();
        });

        // Change Company
        const companyBtns = $(".mobile .showCompanyMenuBtnArea a");
        //console.log(companyBtns);
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
    }

    private generateSlideContentItem(item: MenuItem): string {
        const image =item.imageurl || `../../Content/images/food1.png`; //TODO

        const html = `<li class="slideItem" style="background-image: url('${image}');">
                        <div class="row center">
                            <span class="slidLeftBtn">
                                <a href="#" value="${item.id}" class="btn btn-large left orange">
                                    <i class="material-icons">remove</i>
                                </a>
                            </span>
                            <span class="slideImgMask center">
<div class="item-name">${item.name.trim()}</div>
<div class="item-price">${item.prices} 元</div>
                            </span>
                            <span class="slidRightBtn">
                                <a href="#" value="${item.id}" class="btn btn-large right orange">
                                    <i class="material-icons">add</i>
                                </a>
                            </span>
                        </div>
                    </li>`;

        return html;
    }

    private generateSlideContent(): string {
        const menus: MenuItem[] = this.menus;

        //console.log(menus);

        let html = ` <ul><li class="slideItem" style="height: 50px"></li>`;

        menus.map((menu: MenuItem) => {
            html += this.generateSlideContentItem(menu);
        });

        html += `<li class="slideItem" style="height: 50px"></li></ul>`;

        return html;
    }

    private insertslideContent(): void {
        $(".slidewapper").html(this.generateSlideContent());
    }

    init() {
        //console.log("init");

        this.initHeight();
        this.initBtnEvent();
        this.getMenus(() => {
            this.insertslideContent();
        });
    }
}

var app = new App();
app.init();