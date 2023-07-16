import taskak from '../img/product_slider/taskak.jpg'
import maszkok from '../img/product_slider/maszkok.jpg'
import fehernemuk from '../img/product_slider/fehernemuk.jpg'
import oko_termekek from '../img/product_slider/oko_termekek.jpg'
import gyermekruhak from '../img/product_slider/gyermekruhak.jpg'
import konyhai_textilek from '../img/product_slider/konyhai_textilek.jpg'
import textil_jatekok from '../img/product_slider/textil_jatekok.jpg'

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
                    img_1: {
                        src: taskak,
                        alt:
                            "Valaki egy ruhánt készít, aki éppen megtűz egy ruha szélt, valamint egy sárga szabócenti is van a kép jobb szélén."
                    },
                    img_2: {
                        src: "src",
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
                    "Boltban vásárolt konfekciós ruhák hátránya, hogy nem egyénre szabottak, így sokaknak nem felelnek meg a méretek. Ruhapróbáláskor gyakran tapasztalható, hogy ráncolódnak ott, ahol nem kellene, szűkek vagy éppen bővek egyes részeiken, valamint hosszban vagy ujjhosszban nem megfelelőek.",
                    "Zakóknál elállhat vagy bugyrosodhat a hát, nadrágoknál pedig bugyrosodhat vagy túl szűkek lehetnek az ülepük. Ennek oka, hogy a tömeggyártás során a ruhák átlagos testarányokra készülnek, pedig az emberek különböző testalkattal rendelkeznek.",
                    "Az általam készített ruhák viszont egyedileg modellezettek, a levett testméretek alapján készülnek, így garantált, hogy olyanok lesznek, mint amiket a divatlapokon láthatunk."
                ]
            },
            {
                isActive: true,
                title: "Ruha javítás és átalakítás",
                url: "/szolgaltatasok/reszletek",
                icon: <Scissors className="icon scissors" />,
                images: {
                    img_1: {
                        src: "src",
                        alt:
                            "Ruha javítás és átalakítás kép. Egy szakadt farmernadrág, egy olló, négy különböző színű cérnaspulni, egy varrógyűszű, és egy szabócenti látható."
                    },
                    img_2: {
                        src: "src",
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
                    "Az ismerős érzés, amikor a boltban talált ruhadarab vagy nadrág jó derékban, tetszik, de túl hosszú, ezért inkább nem vesszük meg. Azonban nem kell otthagynod a boltban, hozd el hozzám, levágom és felvarrom a megfelelő méretre.",
                    "Ugyanez a helyzet a bőséggel is, mely könnyen problémát okozhat súlyváltozás esetén. De miért dobnád el a ruhádat, ha csak kicsit bő vagy szűk? Ha túl bő egy ruhadarab vagy nadrág, általában könnyen javítható.",
                    "Ha bővíteni kell, szintén találunk megoldást. Hozd el hozzám és megnézem, mit lehet tenni. Bosszantó, amikor egy tönkrement cipzár miatt el kell dobni valamit. Ne dobd ki, a cipzárcsere olcsó megoldás lehet. Hasonló bosszúság, amikor az anyag szakad ki. Egy szakadás nagyon gyakran nyom nélkül javítható. Tehát ne dobd ki, hozd el hozzám, megér egy próbát."
                ]
            },
            {
                isActive: true,
                title: "Gyermekruha készítés",
                url: "/szolgaltatasok/reszletek",
                icon: <Children className="icon children" />,
                images: {
                    img_1: {
                        src: "src",
                        alt:
                            "Egy kisfiú és egy kislány látható a képen. A fiú bal oldalon, a lány jobb oldalon van. A fiún zöld kabát és kék farmernadrág, a lányon rózsaszín kabát és fekete nadrág van."
                    },
                    img_2: {
                        src: "src",
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
                    img_1: {
                        src: taskak,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Kézi, háti és oldal táskák egyed kivitelben egyedi színben és dizájnnal.",
                details: [
                    "Termékeink egyedülálló kialakítással és minőségi anyagokból készülnek, hogy megfeleljenek az egyéni stílusnak és igényeknek. Kézi, háti és oldal táskáink változatos méretekben és formákban elérhetőek, így mindenki megtalálhatja a számára leginkább megfelelőt.",
                    "A kézi táskák elegáns és praktikus kiegészítők, amelyek ideálisak mindennapi használatra vagy különleges alkalmakra. Különböző stílusokban és méretekben kaphatók, lehetővé téve a személyes preferenciákhoz és funkcionális igényekhez való alkalmazkodást. Az anyagválasztékunk széles skálájából választhat, beleértve a tartós bőrt, a könnyű textilt vagy akár a strapabíró műanyagot is.",
                    "Háti táskáink kényelmes és divatos opciókat nyújtanak mind a mindennapi élethez, mind az utazáshoz. Ergonomikus kialakításuk és párnázott vállpántjaik megkönnyítik a terhelés egyenletes elosztását és csökkentik a vállra és a hátizmokra nehezedő nyomást. Több zsebbel és rekeszekkel rendelkeznek, így szervezett módon tárolhatjuk a szükséges dolgokat, például laptopot, noteszt vagy kulcstartót.",
                    "Az oldal táskák sokoldalúak és praktikusak, különösen azoknak, akiknek szükségük van könnyű hozzáférésre és mobilitásra. Ezek a táskák könnyen rögzíthetők az oldalsó testrészen, és rendkívül hasznosak lehetnek, amikor valamire gyorsan szükség van, például a telefonra, pénztárcára vagy kulcsokra.",
                    "Mindegyik termékünk egyedi színválasztékkal és dizájnnal rendelkezik, hogy kifejezze az egyéni stílust és személyiséget. Legyen szó a klasszikus fekete, a merész színek vagy a trendi minták kedvelőiről, mindig található olyan táska, amely illeszkedik az egyéni stílushoz és vágyakhoz.",
                    "Az egyedileg tervezett és készített kézi, háti és oldal táskáink a minőségi anyagok, a funkcionalitás és a stílus tökéletes kombinációját nyújtják. Bármilyen alkalomra vagy igényre, segítenek a személyes tárgyak biztonságos és stílusos szállításában.",
                ]
            },
            {
                isActive: true,
                title: "Maszkok",
                category: "maszkok",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: maszkok,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Női, férfi és gyermek maszkok különféle méretben, színben és kivitelben.",
                details: [
                    "Az egészség és biztonság kiemelt fontosságot kap, és a maszkok elengedhetetlenek lettek a mindennapi életünk részévé. A női, férfi és gyermek maszkok kínálata különféle méretekben, színekben és kivitelekben elérhető, hogy mindenki megtalálja a számára legmegfelelőbbet.",
                    "Női maszkjaink elegáns és stílusos kiegészítők, amelyek nemcsak védelmet nyújtanak, hanem a divat világába is illeszkednek. Különböző méretekben és formákban kaphatók, hogy megfeleljenek a különböző arcformáknak és kényelmi igényeknek. A nőies színek és minták széles választékával rendelkeznek, lehetővé téve, hogy a maszkok stílusosan illeszkedjenek a megjelenéshez és az egyéni preferenciákhoz.",
                    "Férfi maszkjaink praktikus és megbízható védelmet nyújtanak a mindennapi használatra. Robusztusabb anyagokból készülnek, és gyakran egyszerűbb, letisztultabb dizájnnal rendelkeznek. A kényelemre és a hatékonyságra összpontosítva tervezték őket, hogy megfeleljenek a férfiak igényeinek és életmódjának. Az egyedi színek és minták lehetőséget adnak arra, hogy kifejezd az egyéniségedet és stílusodat.",
                    "A gyermek maszkok rendkívül fontosak a kicsik védelmében. Kis méretekben készülnek, hogy tökéletesen illeszkedjenek a gyermekek arcához. Gyakran játékos és vidám mintákkal, kedvenc karakterekkel vagy színekkel díszítve, hogy a gyerekek számára is vonzóvá tegyék a viselésüket. Az ergonomikus kialakítás és a kényelmes anyagok gondoskodnak arról, hogy a gyermek maszkok kényelmesek legyenek a viselésük során.",
                    "Az egyedi méretek, színek és kivitelek lehetővé teszik, hogy mindenki megtalálja a saját igényeinek és preferenciáinak leginkább megfelelő maszkot. Fontos azonban megjegyezni, hogy a maszkok viselése mellett más egészségügyi óvintézkedések, például a távolságtartás és a megfelelő kézmosás továbbra is fontosak a fertőzés megelőzésében.",
                ]
            },
            {
                isActive: true,
                title: "Fehérneműk",
                category: "fehernemuk",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: fehernemuk,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Női fehérneműk nem csak fehér színben, akár egyedi mintával és hímzéssel.",
                details: [
                    "A női fehérneműk nemcsak funkcionális darabok, hanem lehetnek stílusos és vonzó kiegészítők is. A fehérneműk kínálata ma már sokkal többet nyújt, mint pusztán a hagyományos fehér szín. Az egyedi mintázatok és hímzések lehetőséget adnak arra, hogy a nők egyedi és kifejező darabokat viseljenek.",
                    "A női fehérneműk elérhetők számos különböző stílusban és fazonban. A melltartók és bugyik kínálatában megtalálhatók a klasszikus és egyszerű daraboktól kezdve a csipkés vagy hímzett részletekkel díszített változatokig. Ezek a részletek lehetővé teszik, hogy a nők kiemeljék nőiességüket és egyéni stílusukat.",
                    "Az egyedi mintázatok széles választékát kínálják a női fehérneműk. Lehetnek virágos minták, geometriai formák, állatminták vagy akár színes absztrakt mintázatok is. Ezek a minták élettel töltik meg a fehérneműt, és lehetővé teszik a személyiség kifejezését. Az egyedi mintázatokkal ellátott fehérneműk lehetnek játékosak, romantikusak, merészek vagy akár elegánsak is, így mindenki megtalálhatja a saját stílusához passzolót.",
                    "A hímzések is népszerűek a női fehérneműk díszítésében. A finom hímzések lehetnek virágok, csipkék, vagy akár különleges minták is, amelyek a fehérneműnek egyedi és exkluzív megjelenést kölcsönöznek. A hímzett részletek finoman kidolgozottak és gyakran kézzel készülnek, hogy különleges érzést és minőséget adjanak a fehérneműnek.",
                    "Az egyedi mintákkal és hímzésekkel ellátott női fehérneműk lehetővé teszik, hogy a nők személyre szabják és kifejezzék saját stílusukat és egyediségüket. Emellett a minőségi anyagok és a megfelelő kivitelezés gondoskodik a kényelemről és a tartósságról. Ezek a darabok nem csak magabiztosságot adhatnak, hanem örömöt és önbizalmat is inspirálhatnak a viselőjükben.",
                ]
            },
            {
                isActive: true,
                title: "Öko termékek",
                category: "oko_termekek",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: oko_termekek,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Eldobható termékek újragondolva. Váltsd le a műanyagot mosható textílre és ezzel óvd a környezetet.",
                details: [
                    "Az eldobható termékek újragondolása ma fontos szerepet játszik a fenntarthatóság és környezetvédelem terén. Az egyik megoldás a műanyag eldobható termékek helyettesítése mosható textíliákkal, amelyek segítségével csökkenthetjük a hulladéktermelést és óvhatjuk a környezetet.",
                    "Az eldobható műanyag termékek használata hosszú távon jelentős hatással lehet a környezetre. Az egyszer használatos műanyagok gyakran a hulladéklerakókban vagy a természetben kötnek ki, ahol sokáig nem bomlanak le. Ez a műanyaghulladék károsíthatja az élővilágot, befolyásolhatja a vízi ökoszisztémákat és hozzájárulhat a szennyezéshez.",
                    "A mosható textíliák használata olyan alternatívát kínál, amely lehetővé teszi a termékek újrahasznosítását és csökkenti a felesleges hulladékot. Az újratölthető textíliák, például mosható pelenkák, mosható papírtörlők vagy mosható bevásárlótáskák, tartósak és többször felhasználhatók. Ezek a termékek kiváló minőségű anyagokból készülnek, amelyek tartósak és ellenállóak, így hosszú élettartammal rendelkeznek.",
                    "Az átállás a mosható textíliákra hozzájárulhat a műanyaghulladék csökkentéséhez és az erőforrások fenntarthatóbb kihasználásához. A textíliák újrahasznosíthatóak és lehetőséget adnak arra, hogy a termékek hosszabb ideig szolgáljanak bennünket. Emellett a mosható textíliák gyakran kényelmesebbek is lehetnek, mivel puhábbak és kellemesebbek a bőr számára.",
                    "Fontos azonban megjegyezni, hogy a váltás a mosható textíliákra tudatos választás, és az új termékek fenntartható forrásokból és gyártási folyamatokból származzanak. Továbbá, az eldobható termékek használata még mindig bizonyos helyzetekben szükséges lehet, például egészségügyi vagy higiéniai okokból.",
                    "Az eldobható termékek újragondolása és a műanyag helyettesítése mosható textíliákkal segít abban, hogy a mindennapi döntéseink által pozitív hatást gyakoroljunk a környezetre. Ez egy lépés a fenntartható jövő felé, ahol csökkenthetjük a hulladék mennyiségét és óvhatjuk a környezetet a jövő generációi számára.",
                ]
            },
            {
                isActive: true,
                title: "Gyermekruhák",
                category: "gyermekruhak",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: gyermekruhak,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description: "Gyermek pizsamák, hálózsákok, polók, nadrágok és megannyi más.",
                details: [
                    "Gyermek pizsamák, hálózsákok, polók, nadrágok és még sok más termék kínálatával szolgálunk. A gyermekek ruházata és kiegészítői számos lehetőséget nyújtanak az egyedi stílus kifejezésére és a kényelmes viseletre.",
                    "Gyermek pizsamák: A gyermek pizsamák fontos részei a kényelmes és nyugodt éjszakai pihenésnek. Kínálatunkban megtalálhatók a puha pamut pizsamák, amelyek kellemes tapintással rendelkeznek és segítenek a gyermekeknek kényelmesen aludni. Különböző színek, mintázatok és kedvenc karakterek díszítik ezeket a pizsamákat, hogy a gyerekek számára is vonzóvá tegyék őket.",
                    "Hálózsákok: A hálózsákok ideálisak kempingezéshez, utazáshoz vagy egyszerűen egy vidám pizsamapartihoz. Biztosítják a meleget és kényelmet, miközben a gyermek kényelmesen pihenhet vagy alhat. Hálózsákok különféle méretekben és kivitelekben elérhetők, így minden korosztály megtalálja a számára megfelelőt.",
                    "Polók és nadrágok: A polók és nadrágok mindennapos viseletet jelentenek a gyerekek számára. Könnyű és légáteresztő anyagokból készülnek, amelyek kényelmes viseletet biztosítanak a mozgás szabadságával. Ezek a ruhadarabok sokféle színben és mintában elérhetők, lehetővé téve a gyermekek számára, hogy kifejezzék saját stílusukat.",
                    "Továbbá, kínálatunkban megtalálhatók még megannyi más gyermekruházati termék is, mint például pulóverek, kabátok, nadrágok és szoknyák. Mindegyik termékünket a gyermekek kényelme és stílusa szem előtt tartva tervezzük és készítjük. Fontos számunkra a minőségi anyagok és a tartósság, hogy a ruhák a mindennapi életben is sokáig szolgálhassanak.",
                    "A gyermekek ruházata és kiegészítői nemcsak a praktikumot szolgálják, hanem lehetőséget adnak a személyiség kifejezésére és a gyermeki kreativitás megjelenítésére. A színes és vidám tervezési elemekkel ellátott ruhadarabok, mintázatok és kedvenc karakterek hozzájárulnak ahhoz, hogy a gyermekek örömmel és magabiztosan viseljék őket.",
                ]
            },
            {
                isActive: true,
                title: "Konyhai textilek",
                category: "konyhai_textilek",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: konyhai_textilek,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Konyharuhák, tárolo zsákok, konyharuhák, tárolo zsákok, stb...",
                details: [
                    "Konyharuhák, tároló zsákok és még számos más konyhai termék kínálatával szolgálunk, hogy segítsünk a konyhai tevékenységekben és a környezettudatosabb életmód kialakításában.",
                    "Konyharuhák: A konyharuhák alapvető kiegészítői a konyhának. Kínálatunkban megtalálhatók a tartós és könnyen tisztítható anyagból készült konyharuhák, amelyek ideálisak az edények, serpenyők vagy felületek tisztítására. A minőségi anyagokból készült konyharuhák hatékonyan felszívják a nedvességet, és könnyen használhatók a konyhai munkafolyamatok során.",
                    "Tároló zsákok: A környezetbarát tároló zsákok kiváló alternatívái az egyszer használatos műanyag tárolóknak. Ezek a textil vagy szilikon alapú tárolók újrahasznosíthatók és hosszú távon használhatók. Többféle méretben és kialakításban érhetők el, így ideálisak az élelmiszerek, például gyümölcsök, zöldségek vagy száraz élelmiszerek tárolására. Továbbá, a tároló zsákok tisztítása és újrafelhasználása egyszerű és kényelmes.",
                    "Egyéb konyhai termékek: Kínálatunkban megtalálhatók még más praktikus konyhai termékek is, mint például szilikon sütőedények, szivacsok, tisztítókendők és törlőkendők. Ezek a termékek segítenek a hatékony és környezettudatosabb konyhai tevékenységekben. A minőségi anyagokból készült termékek tartósak és könnyen tisztíthatók, így hosszú élettartammal rendelkeznek.",
                    "Konyhai termékeink tervezése és kivitelezése során fontos szempont számunkra a fenntarthatóság és az egészséges életmód elősegítése. Mindegyik termékünk úgy van tervezve, hogy segítsen a mindennapi konyhai tevékenységekben, miközben minimalizálja a környezeti terhelést. Az egyszerű, praktikus és környezetbarát megoldásaink segítenek abban, hogy a konyhában hatékonyan dolgozhassunk és egészséges módon tárolhassuk az élelmiszereket.",
                ]
            },
            {
                isActive: true,
                title: "Textil játékok",
                category: "textil_jatekok",
                url: "/termekek/reszletek",
                images: {
                    img_1: {
                        src: textil_jatekok,
                        alt: "alt-1"
                    },
                    img_2: {
                        src: "src",
                        alt: "alt-2"
                    }
                },
                description:
                    "Textil állatkák, stb...",
                details: [
                    "Textilek: A textíliák széles választékát kínáljuk, amelyek ideálisak különféle célra. Kényelmes és puha anyagokból készülnek, amelyek kellemes tapintást biztosítanak. Kínálatunkban megtalálhatók például pamut, lenvászon, selyem és gyapjú termékek, amelyek kiváló minőséget képviselnek és tartósak.",
                    "Állatkák: Az állatkák a gyerekek legjobb barátai és hűséges társai. Kínálatunkban megtalálhatók különböző méretű és fajtájú plüssállatkák, amelyek tökéletesek a játékra és ölelésre. Az aranyos és puha állatkák biztosítják a gyermek számára a kényelmet és a szórakozást, miközben segítenek a képzelet gazdagításában és a játékban.",
                    "Egyéb termékek: Kínálatunkban továbbá megtalálhatók még egyéb kiegészítők és termékek, amelyek színesítik a mindennapokat. Ilyenek például dekoratív párnák, takarók, tárolókosarak és textil játékok. Ezek a termékek a személyes stílus kifejezésére és a kényelem megteremtésére szolgálnak otthonunkban és az élet más területein."
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
            name: "Eszter",
            rating: 4.5,
            comment:
                "A Mary Varrodaja kivételes weboldal, amely széles választékban kínál magas minőségű termékeket. Nemrégiben vásároltam egy gyönyörű kézzel készített nyakláncot a kollekciójukból, és nagyon elégedett vagyok a vásárlásommal. A weboldal könnyen kezelhető, és az online fizetési folyamat gördülékenyen ment. A termék gyorsan megérkezett, és gyönyörűen volt becsomagolva. Határozottan ajánlom a Mary Varrodaját mindazoknak, akik egyedi és elegáns ékszereket keresnek.",
            timestamp: "2023-07-04T09:30:00Z",
            short_comment:
                "A Mary Varrodaja kivételes weboldal, amely széles választékban kínál magas minőségű termékeket. Nemrégiben vásároltam egy gyönyörű kézzel készített nyakláncot a kollekciójukból, és nagyon elégedett vagyok a..."
        },
        {
            isActive: true,
            name: "Anna",
            rating: 4.8,
            comment:
                "A Mary Varrodajára akadtam, amikor különleges ajándékot kerestem a nővérem születésnapjára. Lenyűgözött a kitűnő kézműves munka és a részletek iránti figyelem, amelyek az áruikban megmutatkoznak. A weboldal gyönyörű kollekciót mutat be kézzel készített ékszerekből, amelyek igazán kiemelkedőek. A vevőszolgálat kiváló volt, és mindent megtettek, hogy a nővérem időben megkapja az ajándékát. Hálás vagyok a Mary Varrodajának, hogy ennyire kellemessé tették a vásárlási élményt.",
            timestamp: "2023-07-05T14:45:00Z",
            short_comment:
                "A Mary Varrodajára akadtam, amikor különleges ajándékot kerestem a nővérem születésnapjára. Lenyűgözött a kitűnő kézműves munka és a részletek iránti figyelem, amelyek az áruikban megmutatkoznak..."
        },
        {
            isActive: true,
            name: "Zsófia",
            rating: 4.2,
            comment:
                "A Mary Varrodaja lett az új kedvenc online áruházam, amikor ékszerekről van szó. Weboldaluk egy olyan gyöngyszemeket tartalmazó kincsesláda, amelyek gyönyörűen tervezettek, és különböző ízléshez és stílushoz illeszkednek. Ami igazán kiemelkedővé teszi őket, az az a szenvedély és kreativitás, amely minden egyes darabban megmutatkozik. Legyen szó feltűnő nyakláncról vagy finom fülbevalóról, a Mary Varrodajánál biztosan találsz valami igazán egyedit. A weboldaluk könnyen kezelhető, és az ügyfélszolgálatuk gyors és segítőkész. Határozottan ajánlom őket!",
            timestamp: "2023-07-05T19:12:00Z",
            short_comment:
                "A Mary Varrodaja lett az új kedvenc online áruházam, amikor ékszerekről van szó. Weboldaluk egy olyan gyöngyszemeket tartalmazó kincsesláda, amelyek gyönyörűen tervezettek, és különböző ízléshez és stílushoz illeszkednek..."
        },
        {
            isActive: true,
            name: "Katalin",
            rating: 4.7,
            comment:
                "Nemrégiben fedeztem fel a Mary Varrodaját, és kellemes meglepetés volt. A weboldaluk lenyűgöző választékkal rendelkezik kézzel készített ékszerekből, amelyek eleganciát és egyediséget sugároznak. Rendeltem egy karkötőt magamnak, és lenyűgözött a minőség és a részletek iránti gondosság. A termék gondosan be volt csomagolva, és nagyra értékeltem a személyes üzenetet tartalmazó kézzel írt üdvözlőlapot is. A Mary Varrodaja valóban egy rejtett kincs az online ékszerboltok világában.",
            timestamp: "2023-07-06T10:20:00Z",
            short_comment:
                "Nemrégiben fedeztem fel a Mary Varrodaját, és kellemes meglepetés volt. A weboldaluk lenyűgöző választ..."
        }
    ],

    hirek: [
        {
            isActive: !true,
            title: "Esztergom - Piac - 2023.07.07",
            text:
                "2023.07.07-én pénteken, 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
        },
        {
            isActive: true,
            title: "Esztergom - Piac - 2023.07.14",
            text:
                "2023.07.15-én pénteken, 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
        },
        {
            isActive: true,
            title: "Szentendre - Piac - 2023.07.16",
            text:
                "2023.07.16-án 7 órától várom kedves vásárlóimat a szentendrei piacon. Sok új textil játékkal készültem!"
        }
    ]
};

  // console.log("Caregoties:\n", categories);
  // console.log("Webshop:\n", webshop);
  // console.log("Website:\n", website);
