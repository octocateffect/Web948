class Item {
    name: string;
    price: string;
    img: string;
}

class Company {
    name: string;
    menu: Item[];
}

class Condition {
    menu: string;
    items: string[];
}

class App {
    private height: number;

    private vm: Company[] = [
        <Company>{
            name: "Company 1",
            menu: [
                <Item>{
                    id: "1",
                    name: "Item 1 1",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "2",
                    name: "Item 1 2",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "3",
                    name: "Item 1 3",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "4",
                    name: "Item 1 4",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "5",
                    name: "Item 1 5",
                    price: "10",
                    img: "#"
                }
            ]
        },
        <Company>{
            name: "Company 2",
            menu: [
                <Item>{
                    id: "1",
                    name: "Item 2 1",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "2",
                    name: "Item 21 2",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "3",
                    name: "Item 1 3",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "4",
                    name: "Item 2 4",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "5",
                    name: "Item 2 5",
                    price: "10",
                    img: "#"
                }
            ]
        },
        <Company>{
            name: "Company 3",
            menu: [
                <Item>{
                    id: "1",
                    name: "Item 3 1",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "2",
                    name: "Item 3 2",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "3",
                    name: "Item 3 3",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "4",
                    name: "Item 3 4",
                    price: "10",
                    img: "#"
                },
                <Item>{
                    id: "5",
                    name: "Item 3 5",
                    price: "10",
                    img: "#"
                }
            ]
        }
    ];

    private initBtnEvent(): void {
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
    }

    init() {
        console.log("init");

        // get height
        this.height = $(".mobile").height();
        console.log(this.height);
        this.initBtnEvent();

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