// Product slider images
import taskak_slider from '../img/product_slider/taskak.jpg'
import maszkok_slider from '../img/product_slider/maszkok.jpg'
import fehernemuk_slider from '../img/product_slider/fehernemuk.jpg'
import oko_termekek_slider from '../img/product_slider/oko_termekek.jpg'
import gyermekruhak_slider from '../img/product_slider/gyermekruhak.jpg'
import konyhai_textilek_slider from '../img/product_slider/konyhai_textilek.jpg'
import textil_jatekok_slider from '../img/product_slider/textil_jatekok.jpg'

// Termékek page images
import taskak_page from '../img/termekek/taskak.jpg'
import maszkok_page from '../img/termekek/maszkok.jpg'
import fehernemuk_page from '../img/termekek/fehernemuk.jpg'
import oko_termekek_page from '../img/termekek/oko_termekek.jpg'
import gyermekruhak_page from '../img/termekek/gyermekruhak.jpg'
import konyhai_textilek_page from '../img/termekek/konyhai_textilek.jpg'
import textil_jatekok_page from '../img/termekek/textil_jatekok.jpg'

// Szolgáltatások page images
import noi_felsoruha_keszites_page from '../img/szolgaltatasok/noi_felsoruha_keszites.jpg'
import ruha_javitas_es_atalakitas_page from '../img/szolgaltatasok/ruha_javitas_es_atalakitas.jpg'
import gyermekruha_keszites_page from '../img/szolgaltatasok/gyermekruha_keszites.jpg'

import { GiLargeDress as Dress } from "react-icons/gi";
import { ImScissors as Scissors } from "react-icons/im";
import { BiChild as Children } from "react-icons/bi";

export const categories = [
    {
        category: "taskak",
        category_name: "Táskák",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "maszkok",
        category_name: "Maszkok",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "fehernemuk",
        category_name: "Fehérneműk",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "oko_termekek",
        category_name: "Öko termékek",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "gyermekruhak",
        category_name: "Gyermekruhák",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "konyhai_textilek",
        category_name: "Konyhai textilek",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    },
    {
        category: "textil_jatekok",
        category_name: "Textíl játékok",
        website: {
            isActive: true,
            image: "image.jpg"
        },
        webshop: {
            isActive: true,
            image: "image.jpg"
        }
    }
];

export let webshop = {
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
                img: []
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                img: []
            }
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
                img: []
            }
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
                img: []
            }
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
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
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
                description: "Description of this product."
            },
            images: {
                img: []
            }
        }
    ]
};

export const website = {
    szolgaltatasok: {
        h1: "Üdvözöllek a varróműhelyemben!",
        data: [
            {
                isActive: true,
                title: "Női felsőruha készítés",
                url: "/szolgaltatasok/reszletek",
                icon: <Dress className="icon dress" />,
                images: {
                    product_slider: {
                        src: "src",
                        alt:
                            "alt"
                    },
                    page: {
                        src: noi_felsoruha_keszites_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Személyre szabott ruhák, blúzok, szoknyák, nadrágok és sokminden más.",
                short_description:
                    "Személyre szabott ruhák, blúzok, szoknyák, nadrágok és sokminden más.",
                details: [
                    /*
                            "Boltban vásárolt ruhák egyik hátránya, hogy a méret nem egyénre szabott, az úgynevezett konfekció méret nagyon sokaknak nem felel meg.",
                            "Biztosan veled is megtörtént már, hogy amikor felpróbáltál egy ruhadarabot, az többé kevésbé jó volt, de: ráncolódott ott ahol nem kellett volna; szűk volt az egyik helyen a másikon pedig bő; póló vagy ing hossza jó volt, de az ujjahossza túl rövid; a zakó háta elállt vagy bugyrosodott; a nadrág ülepe bugyrosodott vagy túl szoros volt.",
                            "Ez azért van, mert a tömeggyártásnál a nagy átlagra jellemző testarányokra készítik a ruhákat, viszont az emberek közel fele nem ebbe a csoportba tartozik, hiszen a testarányok egyénenként változnak. Van akinek hosszabb a felsőteste, van akinek a végtagjai hosszabbak, van akinek a válla vagy a csípője szélesebb, stb.",
                            "Az általam készített ruhák mind egyedileg modellezettek, a levett testméretek alapján készülnek, így biztos, hogy úgy fog mutatni, mint ahogyan a divatlapokban látható.",
                            */
                    "A boltban vásárolt konfekciós ruhák hátránya, hogy nem egyénre szabottak, így sokaknak nem felelnek meg a méretek. Ruhapróbáláskor gyakran tapasztalhatod, hogy ráncolódik ott, ahol nem kellene, egyes rész szűk vagy éppen bő, hosszban vagy ujjhosszban nem megfelelő.",
                    "Ennek oka, hogy a tömeggyártás során a ruhák átalános testarányokra készülnek, pedig az emberek különböző testarányokkal rendelkeznek, tehát a konfekció nem jó mindenkinek.",
                    "Az általam készített ruhák egyedileg modellezettek, a levett testméretek alapján készülnek, így garantált, hogy olyanok lesznek, mint amiket a divatlapokban láthatunk."
                ]
            },
            {
                isActive: true,
                title: "Ruha javítás és átalakítás",
                url: "/szolgaltatasok/reszletek",
                icon: <Scissors className="icon scissors" />,
                images: {
                    product_slider: {
                        src: "src",
                        alt:
                            "Ruha javítás és átalakítás kép. Egy szakadt farmernadrág, egy olló, négy különböző színű cérnaspulni, egy varrógyűszű, és egy szabócenti látható."
                    },
                    page: {
                        src: ruha_javitas_es_atalakitas_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Ha túl hosszú, túl bő, szakadt vagy ha bővíteni kell. Tönkrement a cipzár a kedvenc darabon? Minden ami alakítás, javítás.",
                short_description:
                    "Ha túl hosszú, túl bő, szakadt vagy ha bővíteni kell. Minden ami alakítás, javítás.",
                details: [
                    /*"Ki ne ismerné az érzést, amikor a boltban megvásárolni kívánt nadrág vagy ruha derékban jó, nagyon tetszik, csak túl hosszú és ezért inkább nem vesszük meg.",
                            "Nem kell otthagynod a boltban, hozd el hozzám, én levágom és felvarrom a megfelelő méretre.",
                            "Az előbb említetthez hasonlóan lehet probléma a bőséggel is. Súlyváltozás esetén ez könnyen bekövetkezhet. De miért dobnád el a ruhádat, ha egy kicsit bő vagy szűk?",
                            "Ha túl bő egy nadrág vagy ruha, az általában gyorsan javítható. Ha bővíteni kell, arra is van megoldás.",
                            "Hozd el hozzám és megnézem mit lehet tenni.",
                            "Bosszantó tud lenni, amikor egy tönkrement cipzár miatt ki kell dobni valamit. Ne dobd ki, a cipzárcsere olcsó megoldás, hogy vissza kapd.",
                            "Hasonló bosszúság, amikor az anyag szakad ki. Egy szakadás nagyon gyakran nyom nélkül javítható.",
                            "Ne dobd ki, hozd el hozzám, egy próbát megér.",*/
                    "Ismerős az érzés, amikor a boltban talált nadrág, tetszik, de túl hosszú? Nem kell otthagynod a boltban, hozd el hozzám, levágom és felvarrom a megfelelő méretre!",
                    "Bosszantó, amikor egy tönkrement cipzár miatt el kell dobni valamit. Ne dobd ki! A cipzárcsere olcsó megoldás lehet.",
                    "A bőség is módisítható! Miért dobnád el a ruhádat, ha kicsit bő vagy szűk? Ha túl bő egy ruhadarab vagy nadrág, általában könnyen javítható. Ha bővíteni kell, az is többnyire megoldható. Hozd el hozzám és megnézem, mit lehet tenni. "
                ]
            },
            {
                isActive: true,
                title: "Gyermekruha készítés",
                url: "/szolgaltatasok/reszletek",
                icon: <Children className="icon children" />,
                images: {
                    product_slider: {
                        src: "src",
                        alt:
                            "Egy kisfiú és egy kislány látható a képen. A fiú bal oldalon, a lány jobb oldalon van. A fiún zöld kabát és kék farmernadrág, a lányon rózsaszín kabát és fekete nadrág van."
                    },
                    page: {
                        src: gyermekruha_keszites_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Bébi és gyermekruha készítés. Egyedi dizájn és kialakítás a megrendelő igényei szerint.",
                short_description:
                    "Bébi és gyermekruha készítés. Egyedi dizájn és kialakítás a megrendelő igényei szerint.",
                details: [
                    "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                    "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során."
                ]
            }
        ]
    },

    termekek: {
        h1: "Kézzel készített termékek egyedi dizájnnal",
        data: [
            {
                isActive: true,
                title: "Táskák",
                category: "taskak",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: taskak_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: taskak_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Egyedileg tervezett minőségi és stílusos kézi, háti és oldal táskák. Elérhetők változatos méretben és színben.",
                details: [
                    "Táskáimat egyedülálló kialakítással és minőségi anyagokból készítem, hogy megfeleljenek az egyéni igényeknek.",
                    // "A kézi táskák elegáns és praktikus kiegészítők, amelyek ideálisak mindennapi használatra vagy különleges alkalmakra. Különböző stílusokban és méretekben kaphatók, lehetővé téve a személyes preferenciákhoz és funkcionális igényekhez való alkalmazkodást. Az anyagválasztékunk széles skálájából választhat, beleértve a tartós bőrt, a könnyű textilt vagy akár a strapabíró műanyagot is.",
                    // "Háti táskáink kényelmes és divatos opciókat nyújtanak mind a mindennapi élethez, mind az utazáshoz. Ergonomikus kialakításuk és párnázott vállpántjaik megkönnyítik a terhelés egyenletes elosztását és csökkentik a vállra és a hátizmokra nehezedő nyomást. Több zsebbel és rekeszekkel rendelkeznek, így szervezett módon tárolhatjuk a szükséges dolgokat, például laptopot, noteszt vagy kulcstartót.",
                    // "Az oldal táskák sokoldalúak és praktikusak, különösen azoknak, akiknek szükségük van könnyű hozzáférésre és mobilitásra. Ezek a táskák könnyen rögzíthetők az oldalsó testrészen, és rendkívül hasznosak lehetnek, amikor valamire gyorsan szükség van, például a telefonra, pénztárcára vagy kulcsokra.",
                    "Mindegyik táska egyedi dizájnnal rendelkezik, hogy kifejezze az egyéni stílust és személyiséget.",
                    "Az egyedileg tervezett és készített kézi, háti és oldal táskáim a minőségi anyagok, a funkcionalitás és a stílus kombinációját nyújtják.",
                ]
            },
            {
                isActive: true,
                title: "Maszkok",
                category: "maszkok",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: maszkok_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: maszkok_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Női, férfi és gyermek maszkok különféle méretben, színben és dizájnnal.",
                // Női, férfi és gyermek maszkjaink változatos méretben, színben és kivitelben garantálják a kényelmet és stílust.
                details: [
                    "A női, férfi és gyermek maszkok különféle méretekben és kivitelekben elérhetők, hogy mindenki megtalálja a számára legmegfelelőbbet.",
                    "Női maszkjaim elegáns és stílusos kiegészítők, amelyek nőies színekkel és mintákkal rendelkeznek, lehetővé téve, hogy a maszkok stílusosan illeszkedjenek a megjelenéshez.",
                    "Férfi maszkjaim egyszerűbb, letisztultabb dizájnnal rendelkeznek. A kényelemre és a hatékonyságra összpontosítva terveztem őket, hogy megfeleljenek a férfiak igényeinek.",
                    "A gyermek maszkok kis méretekben készülnek, hogy tökéletesen illeszkedjenek a gyermekek arcához. Gyakran játékos és vidám mintákkal, kedvenc karakterekkel vagy színekkel vannak díszítve, hogy a gyerekek számára is vonzóvá tegyék a viselésüket.",
                ]
            },
            {
                isActive: true,
                title: "Fehérneműk",
                category: "fehernemuk",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: fehernemuk_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: fehernemuk_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Női fehérneműk nem csak fehér színben, akár egyedi mintával és hímzéssel.",
                details: [
                    "Egyedi mintázatok széles választékát kínálom a női fehérneműkhöz. Lehetnek virágos minták, geometriai formák, állatminták vagy akár színes absztrakt mintázatok is. Az egyedi mintázatokkal ellátott fehérneműk lehetnek játékosak, romantikusak, vagy akár elegánsak is, így mindenki megtalálhatja a saját stílusához passzolót.",
                    "A hímzések is népszerűek a női fehérneműk díszítésében, melyek lehetnek virágok, csipkék, vagy akár különleges minták is, amelyek a fehérneműnek egyedi és exkluzív megjelenést kölcsönöznek.",
                    "Az egyedi mintákkal és hímzésekkel ellátott női fehérneműk lehetővé teszik, hogy kifejezd saját stílusodat, emellett a minőségi anyagok és a megfelelő kivitelezés gondoskodik a kényelemről és a tartósságról.",
                ]
            },
            {
                isActive: true,
                title: "Öko termékek",
                category: "oko_termekek",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: oko_termekek_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: oko_termekek_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Eldobható termékek újragondolva. Váltsd le a műanyagot mosható textílre és ezzel óvd a környezetet.",
                details: [
                    "Az eldobható termékek újragondolása ma fontos szerepet játszik a fenntarthatóság és környezetvédelem terén. Az egyik megoldás a műanyag eldobható termékek helyettesítése mosható textíliákkal, amelyek segítségével óvhatjuk a környezetet.",
                    "A mosható textíliák tartósak és többször felhasználhatók. Ezek a termékek kiváló minőségű anyagokból készülnek, amelyek tartósak és ellenállóak, így hosszú élettartammal rendelkeznek.",
                    "Az eldobható termékek újragondolása és a műanyag helyettesítése mosható textíliákkal segít abban, hogy a mindennapi döntéseink által pozitív hatást gyakoroljunk a környezetre. Ez egy lépés a fenntartható jövő felé, ahol csökkenthetjük a hulladék mennyiségét és óvhatjuk a környezetet a jövő generációi számára.",
                ]
            },
            {
                isActive: true,
                title: "Gyermekruhák",
                category: "gyermekruhak",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: gyermekruhak_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: gyermekruhak_page,
                        alt: "alt-2"
                    }
                },
                description: "Gyermek pizsamák, hálózsákok, polók, nadrágok és megannyi más hasznos ruhadarab.",
                details: [
                    "Gyermek pizsamák, hálózsákok, polók, nadrágok és még sok más termék.",
                    "A polók és nadrágok mindennapos viseletet jelentenek a gyerekek számára. Könnyű és légáteresztő anyagokból készülnek, amelyek kényelmes viseletet biztosítanak a mozgás szabadságával. Ezek a ruhadarabok sokféle színben és mintában elérhetők, lehetővé téve a gyermekek számára, hogy kifejezzék saját stílusukat.",
                    "Mindegyik termékemmet a gyermekek kényelmét és stílusát szem előtt tartva terveztem és készítem. Fontos számomra a minőségi anyagok használata és a tartósság, hogy a ruhák sokáig szolgálhassanak.",
                    "A gyermekek ruházata és kiegészítői nemcsak a praktikumot szolgálják, hanem lehetőséget adnak a személyiség kifejezésére és a gyermeki kreativitás megjelenítésére. A színes és vidám tervezési elemekkel ellátott ruhadarabok, mintázatok és kedvenc karakterek hozzájárulnak ahhoz, hogy a gyermekek örömmel és magabiztosan viseljék őket.",
                ]
            },
            {
                isActive: true,
                title: "Konyhai textilek",
                category: "konyhai_textilek",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: konyhai_textilek_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: konyhai_textilek_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Konyharuhák, tároló zsákok és sok más praktikus termékek a mindennapi tevékenységek megkönnyítésére.",
                details: [
                    "A konyharuhák alapvető kiegészítői a konyhának. Kínálatomkban megtalálhatók a tartós és könnyen tisztítható anyagból készült konyharuhák, amelyek ideálisak az edények, serpenyők vagy felületek tisztítására. A minőségi anyagokból készült konyharuhák hatékonyan felszívják a nedvességet, és könnyen használhatók a konyhai munkafolyamatok során.",
                    "A környezetbarát tároló zsákok kiváló alternatívái az egyszer használatos műanyag tárolóknak. Ezek a textil alapú tárolók hosszú távon használhatók. Többféle méretben és kialakításban érhetők el, így ideálisak az élelmiszerek, például gyümölcsök, zöldségek vagy száraz élelmiszerek tárolására. A tároló zsákok tisztítása egyszerű és kényelmes, mosógépben mosható.",
                ]
            },
            {
                isActive: true,
                title: "Textil játékok",
                category: "textil_jatekok",
                url: "/termekek/reszletek",
                images: {
                    product_slider: {
                        src: textil_jatekok_slider,
                        alt: "alt-1"
                    },
                    page: {
                        src: textil_jatekok_page,
                        alt: "alt-2"
                    }
                },
                description:
                    "Plüssállatkák és egyéb vidám kiegészítők amik színesítik a mindennapokat gyerekek és felnőttek számára egyaránt.",
                details: [
                    "A textíl állatkák a gyerekek legjobb barátai és hűséges társai. Kínálatomban megtalálhatók különböző méretű és fajtájú plüssállatkák, amelyek tökéletesek a játékra és ölelésre. Az aranyos és puha állatkák biztosítják a gyermek számára a kényelmet és a szórakozást, miközben segítenek a képzelet gazdagításában és a játékban.",
                ]
            }
        ]
    },

    rolam: [
        {
            isActive: true,
            title: "Több mint munka, ez hivatás",
            description:
                "Nagyon szerencsésnek mondhaton magam, hiszen több mint 40 éve minden nap a hobbimnak élhetek, a munkám egyben a hobbim is. Teljes meggyőződéssel mondhatom, hogy erre születtem. Azt modják, hogy az elhivatottság és maximalizmus köszön vissza az elkészített ruháim minőségében."
        },
        {
            isActive: true,
            title: "A minőség titka",
            description:
                "Fő profilom az egyedi női és gyermek ruhák készítés, de javításokat és átalakításokat férfiruházat esetén is vállalok. Készítek táskákat, újra használatható öko termékeket, fehérneműket és maszkokat is."
        },
        {
            isActive: true,
            title: "Kicsiknek és nagyoknak is örömmel dolgozok",
            description:
                "Büszke vagyok rá, hogy magánszemélyken túl beszállítója lehetek olyan nagynevű vállalkozásoknak és szervezeteknek mint a Thermal Hotel Visegrád, a Renaissance Étterem Visegrád és a Szent György Lovagrend."
        }
    ],

    gyik: [
        {
            isActive: true,
            question: "Gyermekruhákat milyen korosztálynak keszíted?",
            answer:
                "Leginkább 0 és 6 éves kor közötti gyermekeknek, de ha idősebb, az sem probléma."
        },
        {
            isActive: true,
            question: "Tudok bankkártyával fizetni?",
            answer:
                "Igen. Mind kártyás, készpénzes és átutalásos fizetésre is van lehetőség."
        },
        {
            isActive: true,
            question: "Mi a nyitvatartási idő?",
            answer:
                "Nincs kimondott nyitvatartási időm. Hétköznap jellemzően 9 és 16 óra között bármikor tudlak fogadni, de a biztonság kedvéért legyél szíves előzetesen telefonon vagy üzenetben érdeklődni, hogy biztosan otthon legyek amikor jössz. Sürgős esetben hétvégén is tudlak fogadni, kérlek előzetesen telefonon vagy üzenetben egyeztessünk."
        },
        {
            isActive: true,
            question:
                "Páromnak van néhány nadrágja, ami túl hosszú, elhozhatom felvarratni?",
            answer:
                "Természetesen. Javításokat és átalakításokat minden ruhafélére vállalok függetlenül attól, hogy férfi, női vagy gyermekruha."
        },
        {
            isActive: true,
            question: "Van boltod ahol meg tudom nézni és vásárolni a termékeidet?",
            answer:
                "Kimondott üzlethelyiségem nincsen, de Webshopom van, valamint az Esztergomi Piacon péntekenként és a Szentendrei Piacon szombatonként vagyok megtalálható, illetve ha eljössz hozzám, itt is tudsz vásárolni."
        },
        {
            isActive: true,
            question: "Van online webshop, ahol tudok vásárolni a termékeidből?",
            answer: "Igen, a menüben a Webshop linkre kattintva tudod megnyini."
        },
        {
            isActive: true,
            question:
                "Kisfiam bolodul a vonatokért, tudnál vonatos nadrágot keszíteni neki?",
            answer:
                "Igen. Egyedi minta és figura nem probléma. Akadály akkor képzelhető el, ha olyan figurát szeretnél, ami le van védve, ilyenek például a Disney figurák többsége. De biztos vagyok benne, hogy találunk olyan figurát amit tudunk használni."
        }
    ],

    velemenyek: [
        {
            isActive: true,
            name: "Anna",
            rating: 4.8,
            comment:
                "Nagyon hálás vagyok, egy régi ruhámat vittem el, amit már évek óta nem tudtam viselni, de most új életre kelt. A kreativitás és a szakértelm valóban lenyűgöző. Köszönöm a munkát, nagyszerű a ruha!",
            short_comment:
                "Nagyon hálás vagyok, egy régi ruhámat vittem el, amit már évek óta nem tudtam viselni, de most új életre kelt. A kreativitás és a szakértelm valóban lenyűgöző. Köszönöm a munkát, nagyszerű a ruha!",
        },
        {
            isActive: true,
            name: "Zsófia",
            rating: 4.2,
            comment:
                "Imádtam az új ruhát, amit a lányom esküvőjére készíttettem! A minőség kiváló, és nagyon figyelmesen és gondosan dolgozott, hogy minden részlet tökéletes legyen. Ajánlom mindenkinek, aki tökéletes ruhát szeretne!",
            short_comment:
                "Imádtam az új ruhát, amit a lányom esküvőjére készíttettem! A minőség kiváló, és nagyon figyelmesen és gondosan dolgozott, hogy minden részlet tökéletes legyen. Ajánlom mindenkinek, aki tökéletes ruhát szeretne!",
        },
        {
            isActive: true,
            name: "Katalin",
            rating: 4.7,
            comment:
                "Nagyon elégedett vagyok a babahálózsákkal, amit rendeltem! A minősége kiváló, és kisfiam nagyon jókat alszik benne. A színek is nagyon szépek, és nagyon könnyű használni. Egyértelműen a legjobb választás volt.",
            short_comment:
                "Nagyon elégedett vagyok a babahálózsákkal, amit rendeltem! A minősége kiváló, és kisfiam nagyon jókat alszik benne. A színek is nagyon szépek, és nagyon könnyű használni. Egyértelműen a legjobb választás volt.",
        }
    ],

    hirek: [
        {
            isActive: !true,
            title: "Esztergom - Piac - 2023.07.29",
            text:
                "Pénteken, 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
        },
        {
            isActive: true,
            title: "Esztergom - Piac - 2023.07.14",
            text:
                "Pénteken 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
        },
        {
            isActive: true,
            title: "Szentendre - Piac - 2023.07.30",
            text:
                "Szombaton 7 órától várom vásárlóimat a szentendrei piacon. Sok új textil játékkal készültem!"
        }
    ]
};

  // console.log("Caregoties:\n", categories);
  // console.log("Webshop:\n", webshop);
  // console.log("Website:\n", website);
