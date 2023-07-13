import mvt_0001 from '../img/database/taskak/mvt_0001.jpg'
import mvt_0002 from '../img/database/taskak/mvt_0002.jpg'
import mvt_0003 from '../img/database/taskak/mvt_0003.jpg'
import mvt_0004 from '../img/database/taskak/mvt_0004.jpg'


export let data = {
    taskak: [
        {
            id: 1,
            isActive: true,
            category: "taskak",
            prod_name: "Oldaltáska",
            sku: "MVT-0001",
            on_stock: 1,
            price: 1250,
            properties: {
                color: "barna",
                size: "M",
                description: "Description of this product."
            },
            images: {
                img: mvt_0001
            }
        },
        {
            id: 2,
            isActive: true,
            category: "taskak",
            prod_name: "Hátizsák",
            sku: "MVT-0002",
            on_stock: 5,
            price: 1899,
            properties: {
                color: "szurke",
                size: "L",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "taskak",
            prod_name: "Kézitáska",
            sku: "MVT-0003",
            on_stock: 2,
            price: 599,
            properties: {
                color: "fekete",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0003,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "taskak",
            prod_name: "Kistáska",
            sku: "MVT-0004",
            on_stock: 3,
            price: 899,
            properties: {
                color: "piros",
                size: "S",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0004,
            },
        }
    ],
    maszkok: [
        {
            id: 1,
            category: "maszk",
            prod_name: "Maszk",
            sku: "MVM-0689",
            on_stock: 1,
            price: 1750,
            properties: {
                color: "fekete",
                size: "L",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 2,
            category: "maszk",
            prod_name: "Pántos maszk",
            sku: "MVM-0927",
            on_stock: 8,
            price: 1299,
            properties: {
                color: "kék",
                size: "M",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 3,
            category: "maszk",
            prod_name: "Arcvédő maszk",
            sku: "MVM-0942",
            on_stock: 4,
            price: 1499,
            properties: {
                color: "feher",
                size: "L",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 4,
            category: "maszk",
            prod_name: "Sportmaszk",
            sku: "MVM-0951",
            on_stock: 10,
            price: 999,
            properties: {
                color: "fekete",
                size: "One size",
                description: "Description of this product.",
                images: {},
            }
        }
    ],
    fehernemuk: [
        {
            id: 1,
            category: "fehernemu",
            prod_name: "Tanga",
            sku: "MVF-0689",
            on_stock: 1,
            price: 2450,
            properties: {
                color: "feher",
                size: "M",
                description: "Description of this product."
            }
        },
        {
            id: 2,
            category: "fehernemu",
            prod_name: "Melltartó",
            sku: "MVF-0924",
            on_stock: 3,
            price: 1799,
            properties: {
                color: "rozsaszin",
                size: "L",
                description: "Description of this product."
            }
        },
        {
            id: 3,
            category: "fehernemu",
            prod_name: "Bugyi",
            sku: "MVF-0946",
            on_stock: 5,
            price: 999,
            properties: {
                color: "piros",
                size: "S",
                description: "Description of this product."
            }
        },
        {
            id: 4,
            category: "fehernemu",
            prod_name: "Body",
            sku: "MVF-0954",
            on_stock: 2,
            price: 2499,
            properties: {
                color: "fekete",
                size: "M",
                description: "Description of this product."
            }
        }
    ],
    oko_termekek: [
        {
            id: 1,
            category: "oko termek",
            prod_name: "Zacskó",
            sku: "MVO-0689",
            on_stock: 1,
            price: 750,
            properties: {
                color: "krem",
                size: "M",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 2,
            category: "oko termek",
            prod_name: "Evőeszköz szett",
            sku: "MVO-0921",
            on_stock: 4,
            price: 499,
            properties: {
                color: "szines",
                size: "One size",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 3,
            category: "oko termek",
            prod_name: "Vászontáska",
            sku: "MVO-0935",
            on_stock: 3,
            price: 1199,
            properties: {
                color: "szurke",
                size: "L",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 4,
            category: "oko termek",
            prod_name: "Szilikon szívószál",
            sku: "MVO-0963",
            on_stock: 6,
            price: 299,
            properties: {
                color: "szines",
                size: "One size",
                description: "Description of this product.",
                images: {},
            }
        }
    ],
    gyermekruhak: [
        {
            id: 1,
            category: "gyermekruha",
            prod_name: "Poló",
            sku: "MVG-0689",
            on_stock: 1,
            price: 2150,
            properties: {
                color: "feher",
                size: "S",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 2,
            category: "gyermekruha",
            prod_name: "Nadrág",
            sku: "MVG-0926",
            on_stock: 2,
            price: 1399,
            properties: {
                color: "kek",
                size: "M",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 3,
            category: "gyermekruha",
            prod_name: "Pólószett",
            sku: "MVG-0947",
            on_stock: 3,
            price: 2999,
            properties: {
                color: "szines",
                size: "L",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 4,
            category: "gyermekruha",
            prod_name: "Kabát",
            sku: "MVG-0955",
            on_stock: 5,
            price: 3499,
            properties: {
                color: "piros",
                size: "S",
                description: "Description of this product.",
                images: {},
            }
        }
    ],
    konyhai_textilek: [
        {
            id: 1,
            category: "konyhai textil",
            prod_name: "Konyharuha",
            sku: "MVK-0689",
            on_stock: 1,
            price: 850,
            properties: {
                color: "zold",
                size: "40x40cm",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 2,
            category: "konyhai textil",
            prod_name: "Szárazdeliciouskampó",
            sku: "MVK-0913",
            on_stock: 6,
            price: 199,
            properties: {
                color: "szurke",
                size: "One size",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 3,
            category: "konyhai textil",
            prod_name: "Fogókesztyű",
            sku: "MVK-0928",
            on_stock: 4,
            price: 599,
            properties: {
                color: "sarga",
                size: "One size",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 4,
            category: "konyhai textil",
            prod_name: "Kötény",
            sku: "MVK-0957",
            on_stock: 2,
            price: 999,
            properties: {
                color: "piros",
                size: "M",
                description: "Description of this product.",
                images: {},
            }
        }
    ],
    textil_jatekok: [
        {
            id: 1,
            category: "textil jatekok",
            prod_name: "Malacka",
            sku: "MVT-0689",
            on_stock: 1,
            price: 950,
            properties: {
                color: "szines",
                size: "30cm",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 2,
            category: "textil jatekok",
            prod_name: "Baba babakocsival",
            sku: "MVT-0922",
            on_stock: 2,
            price: 1499,
            properties: {
                color: "rozsaszin",
                size: "50cm",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 3,
            category: "textil jatekok",
            prod_name: "Plüss medve",
            sku: "MVT-0941",
            on_stock: 3,
            price: 599,
            properties: {
                color: "barna",
                size: "40cm",
                description: "Description of this product.",
                images: {},
            }
        },
        {
            id: 4,
            category: "textil jatekok",
            prod_name: "Kutyus játék",
            sku: "MVT-0956",
            on_stock: 5,
            price: 799,
            properties: {
                color: "szines",
                size: "35cm",
                description: "Description of this product.",
                images: {},
            }
        }
    ]
};

/*products.taskak.map((item, index) => {
  console.log(item.prod_name);
});*/

let allCategories = [
    "taskak",
    "maszkok",
    "fehernemuk",
    "oko_termekek",
    "gyermekruhak",
    "konyhai_textilek",
    "textil_jatekok"
];

/*
let category = allCategories[1];
console.log(category);
let input = "";
let minPrice = 500;
let maxPrice = 5000;

console.log(
    products[category]
        .filter((item) =>
            item.prod_name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
        )
        .filter(
            (item) =>
                item.price >= minPrice && item.price <= maxPrice
        )
);
*/
