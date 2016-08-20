﻿class MenuItem {
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
    private jsonfack = [
        {
            "56": {
                "category": "",
                "name": "熱那堤(中) - L2",
                "items": ["56"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3068.png?",
                "prices": "65",
                "id": "56"
            },
            "54": {
                "category": "",
                "name": "小杯玉米湯",
                "items": ["76"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1417.png?",
                "prices": "33",
                "id": "54"
            },
            "42": {
                "category": "",
                "name": "小杯檸檬紅茶",
                "items": ["42"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33413.png?",
                "prices": "28",
                "id": "42"
            },
            "48": {
                "category": "",
                "name": "小杯焦糖熱奶茶",
                "items": ["76"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3019.png?",
                "prices": "33",
                "id": "48"
            },
            "43": {
                "category": "",
                "name": "小杯雪碧",
                "items": ["43"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3193.png?",
                "prices": "28",
                "id": "43"
            },
            "60": {
                "category": "",
                "name": "熱焦糖瑪琪朵(中)",
                "items": ["60"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33844.png?",
                "prices": "85",
                "id": "60"
            },
            "61": {
                "category": "",
                "name": "冰亞美利加諾",
                "items": ["61"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34805.png?",
                "prices": "65",
                "id": "61"
            },
            "62": {
                "category": "",
                "name": "冰焦糖瑪琪朵(中)",
                "items": ["62"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34842.png?",
                "prices": "85",
                "id": "62"
            },
            "63": {
                "category": "",
                "name": "熱香草那堤(中)",
                "items": ["63"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33854.png?",
                "prices": "85",
                "id": "63"
            },
            "64": {
                "category": "",
                "name": "熱榛果那堤(中)",
                "items": ["64"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33856.png?",
                "prices": "85",
                "id": "64"
            },
            "49": {
                "category": "",
                "name": "熱紅茶",
                "items": ["76"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3017.png?",
                "prices": "33",
                "id": "49"
            },
            "66": {
                "category": "",
                "name": "冰香草那堤(中)",
                "items": ["66"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34848.png?",
                "prices": "85",
                "id": "66"
            },
            "67": {
                "category": "",
                "name": "冰榛果那堤(中)",
                "items": ["67"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34850.png?",
                "prices": "85",
                "id": "67"
            },
            "68": {
                "category": "",
                "name": "冰抹茶那堤(中)",
                "items": ["68"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34815.png?",
                "prices": "85",
                "id": "68"
            },
            "69": {
                "category": "",
                "name": "熱阿薩姆那堤(中)",
                "items": ["69"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33824.png?",
                "prices": "85",
                "id": "69"
            },
            "52": {
                "category": "",
                "name": "熱巧克力",
                "items": ["76"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3020.png?",
                "prices": "33",
                "id": "52"
            },
            "53": {
                "category": "",
                "name": "柳橙酷蘇打",
                "items": ["53"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3147.png?",
                "prices": "48",
                "id": "53"
            },
            "24": {
                "category": "",
                "name": "聖代(芝麻)",
                "items": ["24"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4337.png?",
                "prices": "30",
                "id": "24"
            },
            "25": {
                "category": "",
                "name": "巧克力聖代",
                "items": ["25"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4329.png?",
                "prices": "30",
                "id": "25"
            },
            "26": {
                "category": "",
                "name": "香草奶昔",
                "items": ["26"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4203.png?",
                "prices": "40",
                "id": "26"
            },
            "27": {
                "category": "",
                "name": "草莓奶昔",
                "items": ["27"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4202.png?",
                "prices": "40",
                "id": "27"
            },
            "20": {
                "category": "",
                "name": "冰炫風-布朗尼",
                "items": ["20"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4347.png?",
                "prices": "55",
                "id": "20"
            },
            "21": {
                "category": "",
                "name": "冰炫風 (芝麻)",
                "items": ["21"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4368.png?",
                "prices": "55",
                "id": "21"
            },
            "22": {
                "category": "",
                "name": "OREO冰炫風",
                "items": ["22"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4361.png?",
                "prices": "55",
                "id": "22"
            },
            "23": {
                "category": "",
                "name": "花聖代-布朗尼",
                "items": ["23"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4339.png?",
                "prices": "49",
                "id": "23"
            },
            "46": {
                "category": "",
                "name": "小杯柳橙汁",
                "items": ["46"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33432.png?",
                "prices": "40",
                "id": "46"
            },
            "47": {
                "category": "",
                "name": "小杯美式咖啡",
                "items": ["76"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3014.png?",
                "prices": "33",
                "id": "47"
            },
            "44": {
                "category": "",
                "name": "小杯無糖冰綠茶",
                "items": ["44"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33418.png?",
                "prices": "28",
                "id": "44"
            },
            "45": {
                "category": "",
                "name": "小杯零卡可樂",
                "items": ["45"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3188.png?",
                "prices": "28",
                "id": "45"
            },
            "28": {
                "category": "",
                "name": "洋蔥香圈圈",
                "items": ["28"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4072.png?",
                "prices": "49",
                "id": "28"
            },
            "29": {
                "category": "",
                "name": "小四季沙拉",
                "items": ["29"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1607.png?",
                "prices": "25",
                "id": "29"
            },
            "40": {
                "category": "",
                "name": "冰那堤(中)",
                "items": ["40"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34840.png?",
                "prices": "75",
                "id": "40"
            },
            "41": {
                "category": "",
                "name": "小杯可口可樂",
                "items": ["41"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3183.png?",
                "prices": "28",
                "id": "41"
            },
            "1": {
                "category": "",
                "name": "揚蝦圈圈堡",
                "items": ["1"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1236.png?",
                "prices": "95",
                "id": "1"
            },
            "0": {
                "category": "",
                "name": "玉米濃湯",
                "items": ["0"],
                "image_url": "",
                "prices": "30",
                "id": "0"
            },
            "3": {
                "category": "",
                "name": "起司豬排堡",
                "items": ["3"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1540.png?",
                "prices": "79",
                "id": "3"
            },
            "2": {
                "category": "",
                "name": "嫩雞圈圈堡",
                "items": ["2"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/31361.png?",
                "prices": "95",
                "id": "2"
            },
            "5": {
                "category": "",
                "name": "雙層四盎司牛肉堡",
                "items": ["5"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1060.png?",
                "prices": "115",
                "id": "5"
            },
            "4": {
                "category": "",
                "name": "培根牛肉堡",
                "items": ["4"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1081.png?",
                "prices": "105",
                "id": "4"
            },
            "7": {
                "category": "",
                "name": "大麥克",
                "items": ["7"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1058.png?",
                "prices": "79",
                "id": "7"
            },
            "6": {
                "category": "",
                "name": "四盎司牛肉堡",
                "items": ["6"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1059.png?",
                "prices": "85",
                "id": "6"
            },
            "9": {
                "category": "",
                "name": "勁辣鷄腿堡",
                "items": ["9"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1317.png?",
                "prices": "82",
                "id": "9"
            },
            "8": {
                "category": "",
                "name": "雙層牛肉吉事堡",
                "items": ["8"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1044.png?",
                "prices": "75",
                "id": "8"
            },
            "51": {
                "category": "",
                "name": "焦糖冰奶茶",
                "items": ["51"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33426.png?",
                "prices": "45",
                "id": "51"
            },
            "39": {
                "category": "",
                "name": "冰那堤-(中) - L2",
                "items": ["39"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3418.png?",
                "prices": "65",
                "id": "39"
            },
            "65": {
                "category": "",
                "name": "熱抹茶那堤(中)",
                "items": ["65"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33822.png?",
                "prices": "85",
                "id": "65"
            },
            "76": {
                "category": "",
                "name": "33元飲料",
                "items": ["76"],
                "image_url": "",
                "prices": "33",
                "id": "76"
            },
            "75": {
                "category": "",
                "name": "四人分享餐",
                "items": ["11", "11", "11", "11", "13", "30", "30", "30", "30", "76", "76", "76", "76"],
                "image_url": "",
                "prices": "409",
                "id": "75"
            },
            "38": {
                "category": "",
                "name": "葡萄柚萊姆冰沙",
                "items": ["38"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34821.png?",
                "prices": "95",
                "id": "38"
            },
            "73": {
                "category": "",
                "name": "冰巧克力(中)",
                "items": ["73"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34843.png?",
                "prices": "75",
                "id": "73"
            },
            "72": {
                "category": "",
                "name": "冰阿薩姆那堤(中)",
                "items": ["72"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34819.png?",
                "prices": "85",
                "id": "72"
            },
            "71": {
                "category": "",
                "name": "熱特濃白咖啡(中)",
                "items": ["71"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33842.png?",
                "prices": "75",
                "id": "71"
            },
            "70": {
                "category": "",
                "name": "熱巧克力(中)",
                "items": ["70"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33845.png?",
                "prices": "75",
                "id": "70"
            },
            "59": {
                "category": "",
                "name": "熱亞美利加諾",
                "items": ["59"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33808.png?",
                "prices": "65",
                "id": "59"
            },
            "58": {
                "category": "",
                "name": "熱那堤(中)",
                "items": ["58"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33840.png?",
                "prices": "75",
                "id": "58"
            },
            "11": {
                "category": "",
                "name": "原味麥脆鷄",
                "items": ["11"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1309.png?",
                "prices": "50",
                "id": "11"
            },
            "10": {
                "category": "",
                "name": "板烤鷄腿堡",
                "items": ["10"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1315.png?",
                "prices": "85",
                "id": "10"
            },
            "13": {
                "category": "",
                "name": "九塊麥克鷄塊",
                "items": ["13"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1300.png?",
                "prices": "95",
                "id": "13"
            },
            "12": {
                "category": "",
                "name": "辣味麥脆鷄",
                "items": ["12"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1310.png?",
                "prices": "50",
                "id": "12"
            },
            "15": {
                "category": "",
                "name": "麥香魚",
                "items": ["15"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1217.png?",
                "prices": "69",
                "id": "15"
            },
            "14": {
                "category": "",
                "name": "六塊麥克鷄塊",
                "items": ["14"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1302.png?",
                "prices": "69",
                "id": "14"
            },
            "17": {
                "category": "",
                "name": "麥克雙牛堡",
                "items": ["17"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1048.png?",
                "prices": "49",
                "id": "17"
            },
            "16": {
                "category": "",
                "name": "麥香鷄",
                "items": ["16"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1348.png?",
                "prices": "49",
                "id": "16"
            },
            "19": {
                "category": "",
                "name": "美式辣鷄堡",
                "items": ["19"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/31333.png?",
                "prices": "39",
                "id": "19"
            },
            "18": {
                "category": "",
                "name": "法式芥末香鷄堡",
                "items": ["18"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/31307.png?",
                "prices": "39",
                "id": "18"
            },
            "31": {
                "category": "",
                "name": "鳳梨派",
                "items": ["31"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4136.png?",
                "prices": "28",
                "id": "31"
            },
            "30": {
                "category": "",
                "name": "勁辣香雞翅",
                "items": ["30"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1330.png?",
                "prices": "39",
                "id": "30"
            },
            "37": {
                "category": "",
                "name": "野莓萊姆冰沙",
                "items": ["37"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34817.png?",
                "prices": "95",
                "id": "37"
            },
            "36": {
                "category": "",
                "name": "芒果萊姆冰沙",
                "items": ["36"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34818.png?",
                "prices": "95",
                "id": "36"
            },
            "35": {
                "category": "",
                "name": "荔枝萊姆冰沙",
                "items": ["35"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/34822.png?",
                "prices": "95",
                "id": "35"
            },
            "34": {
                "category": "",
                "name": "蘋果-四季水果袋",
                "items": ["34"],
                "image_url": "https://www.mcdelivery.com.tw/tw/browse/menu.html?daypartId=45&catId=100",
                "prices": "39",
                "id": "34"
            },
            "33": {
                "category": "",
                "name": "小包薯條",
                "items": ["33"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4014.png?",
                "prices": "28",
                "id": "33"
            },
            "55": {
                "category": "",
                "name": "高鈣鮮乳",
                "items": ["55"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3508.png?",
                "prices": "28",
                "id": "55"
            },
            "74": {
                "category": "",
                "name": "四塊麥克鷄塊",
                "items": ["74"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/1302.png?",
                "prices": "46",
                "id": "74"
            },
            "32": {
                "category": "",
                "name": "蘋果派",
                "items": ["32"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/4135.png?",
                "prices": "28",
                "id": "32"
            },
            "57": {
                "category": "",
                "name": "熱亞美利加諾(中) - L2",
                "items": ["57"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/3066.png?",
                "prices": "55",
                "id": "57"
            },
            "50": {
                "category": "",
                "name": "經典冰咖啡",
                "items": ["50"],
                "image_url": "https://drjaosdejw578.cloudfront.net/tw/static/1471535072755/assets/886/products/33416.png?",
                "prices": "45",
                "id": "50"
            }
        }
    ];

    private height: number;

    private menus: MenuItem[] = [];

    private getMenus(callback: any): void {
        const url = "Content/menus.json";
        //console.log("ajax start");

        $.ajax({
            type: "get",
            url: url,
            //data: "",
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
                var data: MenuItem[] = [];
                let i = 0;
                while (this.jsonfack[0][i]) {
                    const item = this.jsonfack[0][i];

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
        const image = item.imageurl || `../../Content/images/food1.png`; //TODO

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

    private userOrder: string[] = [];

    init() {
        //console.log("init");

        this.initHeight();
        this.initBtnEvent();
        this.getMenus(() => {
            this.insertslideContent();

            // add Btn
            const insertBtns = $(".slidRightBtn a");
            insertBtns.map((i, e) => {
                var elem = $(e);
                var value = elem.attr("value");
                elem.click(() => {
                    this.insertItem(value);
                    //console.log(value);
                });
            });

            // delete Btn

            const removeBtns = $(".slidLeftBtn a");
            removeBtns.map((i, e) => {
                var elem = $(e);
                var value = elem.attr("value");
                elem.click(() => {
                    this.removeItem(value);
                    //console.log(value);
                });
            });
        });
    }

    insertItem(id: string): void {
        //console.log(`+${id}`);
        this.userOrder.push(id);
        console.log(this.userOrder);
    }

    removeItem(id: string): void {
        //console.log(`-${id}`);
        const elem = Enumerable.from(this.userOrder).firstOrDefault(i => i === id);
        //const index = this.userOrder.indexOf(id);
        console.log(elem);
        //const index = this.userOrder.indexOf(id);
        if (elem) {
            const index = this.userOrder.indexOf(id);
            this.userOrder.splice(index, 1);
        }

        console.log(this.userOrder);
    }
}

var app = new App();
app.init();