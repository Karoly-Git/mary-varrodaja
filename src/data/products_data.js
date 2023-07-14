import mvt_0001 from '../img/database/taskak/mvt_0001.jpg'
import mvt_0002 from '../img/database/taskak/mvt_0002.jpg'
import mvt_0003 from '../img/database/taskak/mvt_0003.jpg'
import mvt_0004 from '../img/database/taskak/mvt_0004.jpg'

import taskak_img from "../img/categories/thumbnails/taskak.jpg";
import taskak_2_img from "../img/categories/thumbnails/taskak2.jpg";

import maszkok_img from "../img/categories/thumbnails/maszkok.jpg";
import maszkok_2_img from "../img/categories/thumbnails/maszkok2.jpg";

import fehernemuk_img from "../img/categories/thumbnails/fehernemuk.jpg";
import fehernemuk_2_img from "../img/categories/thumbnails/fehernemuk2.jpg";

import oko_termekek_img from "../img/categories/thumbnails/oko_termekek.jpg";
import oko_termekek_2_img from "../img/categories/thumbnails/oko_termekek2.jpg";

import gyermekruhak_img from "../img/categories/thumbnails/gyermekruhak.jpg";
import gyermekruhak_2_img from "../img/categories/thumbnails/gyermekruhak2.jpg";

import konyhai_textilek_img from "../img/categories/thumbnails/konyhai_textilek.jpg";
import konyhai_textilek_2_img from "../img/categories/thumbnails/konyhai_textilek2.jpg";

import textil_jatekok_img from "../img/categories/thumbnails/textil_jatekok.jpg";
import textil_jatekok_2_img from "../img/categories/thumbnails/textil_jatekok2.jpg";


export const categories = [
    {
        category: 'taskak',
        category_name: 'Táskák',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'maszkok',
        category_name: 'Maszkok',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'fehernemuk',
        category_name: 'Fehérneműk',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'oko_termekek',
        category_name: 'Öko termékek',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'gyermekruhak',
        category_name: 'Gyermekruhák',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'konyhai_textilek',
        category_name: 'Konyhai textilek',
        images: {
            webshop: '',
            website: '',
        },
    },
    {
        category: 'textil_jatekok',
        category_name: 'Textíl játékok',
        images: {
            webshop: '',
            website: '',
        },
    },
];

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
            isActive: true,
            category: "maszkok",
            prod_name: "Maszk",
            sku: "MVM-0689",
            on_stock: 1,
            price: 1750,
            properties: {
                color: "fekete",
                size: "L",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "maszkok",
            prod_name: "Pántos maszk",
            sku: "MVM-0927",
            on_stock: 8,
            price: 1299,
            properties: {
                color: "kék",
                size: "M",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "maszkok",
            prod_name: "Arcvédő maszk",
            sku: "MVM-0942",
            on_stock: 4,
            price: 1499,
            properties: {
                color: "feher",
                size: "L",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "maszkok",
            prod_name: "Sportmaszk",
            sku: "MVM-0951",
            on_stock: 10,
            price: 999,
            properties: {
                color: "fekete",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        }
    ],
    fehernemuk: [
        {
            id: 1,
            isActive: true,
            category: "fehernemuk",
            prod_name: "Tanga",
            sku: "MVF-0689",
            on_stock: 1,
            price: 2450,
            properties: {
                color: "feher",
                size: "M",
                description: "Description of this product."
            },
            images: {
                img: mvt_0004,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "fehernemuk",
            prod_name: "Melltartó",
            sku: "MVF-0924",
            on_stock: 3,
            price: 1799,
            properties: {
                color: "rozsaszin",
                size: "L",
                description: "Description of this product."
            },
            images: {
                img: mvt_0004,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "fehernemuk",
            prod_name: "Bugyi",
            sku: "MVF-0946",
            on_stock: 5,
            price: 999,
            properties: {
                color: "piros",
                size: "S",
                description: "Description of this product."
            },
            images: {
                img: mvt_0004,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "fehernemuk",
            prod_name: "Body",
            sku: "MVF-0954",
            on_stock: 2,
            price: 2499,
            properties: {
                color: "fekete",
                size: "M",
                description: "Description of this product."
            },
            images: {
                img: mvt_0004,
            },
        }
    ],
    oko_termekek: [
        {
            id: 1,
            isActive: true,
            category: "oko_termekek",
            prod_name: "Zacskó",
            sku: "MVO-0689",
            on_stock: 1,
            price: 750,
            properties: {
                color: "krem",
                size: "M",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "oko_termekek",
            prod_name: "Evőeszköz szett",
            sku: "MVO-0921",
            on_stock: 4,
            price: 499,
            properties: {
                color: "szines",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "oko_termekek",
            prod_name: "Vászontáska",
            sku: "MVO-0935",
            on_stock: 3,
            price: 1199,
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
            id: 4,
            isActive: true,
            category: "oko_termekek",
            prod_name: "Szilikon szívószál",
            sku: "MVO-0963",
            on_stock: 6,
            price: 299,
            properties: {
                color: "szines",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        }
    ],
    gyermekruhak: [
        {
            id: 1,
            isActive: true,
            category: "gyermekruhak",
            prod_name: "Poló",
            sku: "MVG-0689",
            on_stock: 1,
            price: 2150,
            properties: {
                color: "feher",
                size: "S",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "gyermekruhak",
            prod_name: "Nadrág",
            sku: "MVG-0926",
            on_stock: 2,
            price: 1399,
            properties: {
                color: "kek",
                size: "M",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "gyermekruhak",
            prod_name: "Pólószett",
            sku: "MVG-0947",
            on_stock: 3,
            price: 2999,
            properties: {
                color: "szines",
                size: "L",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "gyermekruhak",
            prod_name: "Kabát",
            sku: "MVG-0955",
            on_stock: 5,
            price: 3499,
            properties: {
                color: "piros",
                size: "S",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        }
    ],
    konyhai_textilek: [
        {
            id: 1,
            isActive: true,
            category: "konyhai_textilek",
            prod_name: "Konyharuha",
            sku: "MVK-0689",
            on_stock: 1,
            price: 850,
            properties: {
                color: "zold",
                size: "40x40cm",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "konyhai_textilek",
            prod_name: "Szárazdeliciouskampó",
            sku: "MVK-0913",
            on_stock: 6,
            price: 199,
            properties: {
                color: "szurke",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "konyhai_textilek",
            prod_name: "Fogókesztyű",
            sku: "MVK-0928",
            on_stock: 4,
            price: 599,
            properties: {
                color: "sarga",
                size: "One size",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "konyhai_textilek",
            prod_name: "Kötény",
            sku: "MVK-0957",
            on_stock: 2,
            price: 999,
            properties: {
                color: "piros",
                size: "M",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        }
    ],
    textil_jatekok: [
        {
            id: 1,
            isActive: true,
            category: "textil_jatekok",
            prod_name: "Malacka",
            sku: "MVT-0689",
            on_stock: 1,
            price: 950,
            properties: {
                color: "szines",
                size: "30cm",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 2,
            isActive: true,
            category: "textil_jatekok",
            prod_name: "Baba babakocsival",
            sku: "MVT-0922",
            on_stock: 2,
            price: 1499,
            properties: {
                color: "rozsaszin",
                size: "50cm",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 3,
            isActive: true,
            category: "textil_jatekok",
            prod_name: "Plüss medve",
            sku: "MVT-0941",
            on_stock: 3,
            price: 599,
            properties: {
                color: "barna",
                size: "40cm",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        },
        {
            id: 4,
            isActive: true,
            category: "textil_jatekok",
            prod_name: "Kutyus játék",
            sku: "MVT-0956",
            on_stock: 5,
            price: 799,
            properties: {
                color: "szines",
                size: "35cm",
                description: "Description of this product.",
            },
            images: {
                img: mvt_0002,
            },
        }
    ]
};

