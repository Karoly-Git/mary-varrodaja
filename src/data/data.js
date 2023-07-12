// Images of Products
import fehernemuk_img from "../img/categories/thumbnails/fehernemuk.jpg";
import fehernemuk_2_img from "../img/categories/thumbnails/fehernemuk2.jpg";

import gyermekruhak_img from "../img/categories/thumbnails/gyermekruhak.jpg";
import gyermekruhak_2_img from "../img/categories/thumbnails/gyermekruhak2.jpg";

import maszkok_img from "../img/categories/thumbnails/maszkok.jpg";
import maszkok_2_img from "../img/categories/thumbnails/maszkok2.jpg";

import oko_termekek_img from "../img/categories/thumbnails/oko_termekek.jpg";
import oko_termekek_2_img from "../img/categories/thumbnails/oko_termekek2.jpg";

import taskak_img from "../img/categories/thumbnails/taskak.jpg";
import taskak_2_img from "../img/categories/thumbnails/taskak2.jpg";

import konyhai_textilek_img from "../img/categories/thumbnails/konyhai-textilek.jpg";
import konyhai_textilek_2_img from "../img/categories/thumbnails/konyhai-textilek2.jpg";

import textil_jatekok_img from "../img/categories/thumbnails/textil-jatekok.jpg";
import textil_jatekok_2_img from "../img/categories/thumbnails/textil-jatekok2.jpg";

// Images of Services
import gyermekruha_keszites_img from "../img/szolgaltatasok/thumbnails/gyermekruha-keszites.jpg"
import gyermekruha_keszites_2_img from "../img/szolgaltatasok/gyermekruha.jpg"

import noi_felsoruha_keszites_img from "../img/szolgaltatasok/thumbnails/noi-felsoruha-keszites.jpg"
import noi_felsoruha_keszites_2_img from "../img/szolgaltatasok/felsoruha.jpg"

import ruha_javitas_es_atalakitas_img from "../img/szolgaltatasok/thumbnails/ruha-javitas-es-atalakitas.jpg"
import ruha_javitas_es_atalakitas_2_img from "../img/szolgaltatasok/javitas.jpg"

//const importAll = (requireContext) => requireContext.keys().map(requireContext);
//const images = importAll(require.context("../src/img/categories", false, /\.(png|jpe?g|svg)$/));
//console.log(images);

export const szolgaltatasok = {
    h1: "Üdvözöllek a varróműhelyemben!",
    data: [
        {
            szolgaltatas_id: 1,
            isActive: true,
            title: "Női felsőruha készítés",
            url: "/szolgaltatasok/reszletek",
            images: {
                img_1: {
                    src:
                        noi_felsoruha_keszites_img,
                    alt: "Valaki egy ruhánt készít, aki éppen megtűz egy ruha szélt, valamint egy sárga szabócenti is van a kép jobb szélén."
                },
                img_2: {
                    src:
                        noi_felsoruha_keszites_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Személyre szabott ruhák, blúzok, szoknyák, nadrágok és sokminden más.",
            short_description: "Személyre szabott ruhák, blúzok, szoknyák, nadrágok és sokminden más.",
            details: [
                /*
                "Boltban vásárolt ruhák egyik hátránya, hogy a méret nem egyénre szabott, az úgynevezett konfekció méret nagyon sokaknak nem felel meg.",
                "Biztosan veled is megtörtént már, hogy amikor felpróbáltál egy ruhadarabot, az többé kevésbé jó volt, de: ráncolódott ott ahol nem kellett volna; szűk volt az egyik helyen a másikon pedig bő; póló vagy ing hossza jó volt, de az ujjahossza túl rövid; a zakó háta elállt vagy bugyrosodott; a nadrág ülepe bugyrosodott vagy túl szoros volt.",
                "Ez azért van, mert a tömeggyártásnál a nagy átlagra jellemző testarányokra készítik a ruhákat, viszont az emberek közel fele nem ebbe a csoportba tartozik, hiszen a testarányok egyénenként változnak. Van akinek hosszabb a felsőteste, van akinek a végtagjai hosszabbak, van akinek a válla vagy a csípője szélesebb, stb.",
                "Az általam készített ruhák mind egyedileg modellezettek, a levett testméretek alapján készülnek, így biztos, hogy úgy fog mutatni, mint ahogyan a divatlapokban látható.",
                */
                "Boltban vásárolt konfekciós ruhák hátránya, hogy nem egyénre szabottak, így sokaknak nem felelnek meg a méretek. Ruhapróbáláskor gyakran tapasztalható, hogy ráncolódnak ott, ahol nem kellene, szűkek vagy éppen bővek egyes részeiken, valamint hosszban vagy ujjhosszban nem megfelelőek.",
                "Zakóknál elállhat vagy bugyrosodhat a hát, nadrágoknál pedig bugyrosodhat vagy túl szűkek lehetnek az ülepük. Ennek oka, hogy a tömeggyártás során a ruhák átlagos testarányokra készülnek, pedig az emberek különböző testalkattal rendelkeznek.",
                "Az általam készített ruhák viszont egyedileg modellezettek, a levett testméretek alapján készülnek, így garantált, hogy olyanok lesznek, mint amiket a divatlapokon láthatunk.",
            ],
        },
        {
            szolgaltatas_id: 2,
            isActive: true,
            title: "Ruha javítás és átalakítás",
            url: "/szolgaltatasok/reszletek",
            images: {
                img_1: {
                    src:
                        ruha_javitas_es_atalakitas_img,
                    alt: "Ruha javítás és átalakítás kép. Egy szakadt farmernadrág, egy olló, négy különböző színű cérnaspulni, egy varrógyűszű, és egy szabócenti látható."
                },
                img_2: {
                    src:
                        ruha_javitas_es_atalakitas_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Ha túl hosszú, túl bő, szakadt vagy ha bővíteni kell. Tönkrement a cipzár a kedvenc darabon? Minden ami alakítás, javítás.",
            short_description: "Ha túl hosszú, túl bő, szakadt vagy ha bővíteni kell. Minden ami alakítás, javítás.",
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
                "Ha bővíteni kell, szintén találunk megoldást. Hozd el hozzám és megnézem, mit lehet tenni. Bosszantó, amikor egy tönkrement cipzár miatt el kell dobni valamit. Ne dobd ki, a cipzárcsere olcsó megoldás lehet. Hasonló bosszúság, amikor az anyag szakad ki. Egy szakadás nagyon gyakran nyom nélkül javítható. Tehát ne dobd ki, hozd el hozzám, megér egy próbát.",
            ],
        },
        {
            szolgaltatas_id: 3,
            isActive: true,
            title: "Gyermekruha készítés",
            url: "/szolgaltatasok/reszletek",
            images: {
                img_1: {
                    src:
                        gyermekruha_keszites_img,
                    alt: "Egy kisfiú és egy kislány látható a képen. A fiú bal oldalon, a lány jobb oldalon van. A fiún zöld kabát és kék farmernadrág, a lányon rózsaszín kabát és fekete nadrág van."
                },
                img_2: {
                    src:
                        gyermekruha_keszites_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Bébi és gyermekruha készítés. Egyedi dizájn a megrendelő igényei szerint.",
            short_description: "Bébi és gyermekruha készítés. Egyedi dizájn a megrendelő igényei szerint.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
    ]
};

export const termekek = {
    h1: "Kézzel készített termékek egyedi dizájnnal",
    data: [
        {
            termek_id: 1,
            isActive: true,
            title: "Táskák",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        taskak_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        taskak_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Kézi, háti és oldal táskák egyed kivitelben egyedi színben és dizájnnal.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 2,
            isActive: true,
            title: "Maszkok",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        maszkok_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        maszkok_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Női, férfi és gyermek maszkok különféle méretben, színben és kivitelben.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 3,
            isActive: true,
            title: "Fehérneműk",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        fehernemuk_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        fehernemuk_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Női fehérneműk nem csak fehér színben, akár egyedi mintával és hímzéssel.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 4,
            isActive: true,
            title: "Öko termékek",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        oko_termekek_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        oko_termekek_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Eldobható termékek újragondolva. Váltsd le a műanyagot mosható textílre és ezzel óvd a környezetet.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 5,
            isActive: true,
            title: "Gyermekruhák",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        gyermekruhak_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        gyermekruhak_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Pizsamák, hálózsákok, polók, nadrágok és megannyi más.",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 6,
            isActive: true,
            title: "Konyhai textilek",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        konyhai_textilek_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        konyhai_textilek_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Konyharuhák, tárolo zsákok, konyharuhák, tárolo zsákok, stb...",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
        {
            termek_id: 7,
            isActive: true,
            title: "Textil játékok",
            url: "/termekek/reszletek",
            images: {
                img_1: {
                    src:
                        textil_jatekok_img,
                    alt: 'alt-1'
                },
                img_2: {
                    src:
                        textil_jatekok_2_img,
                    alt: 'alt-2'
                },
            },
            description: "Textil állatkák, textil állatkák, textil állatkák, textil állatkák, stb...",
            details: [
                "Egyedi gyermekruhákat készítek, hogy tökéletesen illeszkedjenek és divatosak legyenek. Ne aggódj a bolti méretek miatt! Hozd el hozzám a gyermeked méreteit, és varrok neki teljesen új ruhadarabot.",
                "Nem kell megszabadulnod a túl bő vagy szűk ruháktól sem. Hozd el hozzám, és átalakítom őket, hogy tökéletesen passzoljanak. Figyelembe veszem az egyedi igényeket és stílust a gyermekruha készítése során.",
            ],
        },
    ]
};


export const rolam = [
    {
        rolam_id: 1,
        title: "A minőség titka",
        description: "Nagyon szerencsésnek mondhaton magam, hiszen több mint 40 éve minden nap a hobbimnak élhetek, a munkám egyben a hobbim is. Teljes meggyőződéssel mondhatom, hogy erre születtem. Azt modják, hogy az elhivatottság és maximalizmus köszön vissza az elkészített ruháim minőségében.",
    },
    {
        rolam_id: 2,
        title: "Több mint munka, ez hivatás",
        description: "Fő profilom az egyedi női és gyermek ruhák készítés, de javításokat és átalakításokat férfiruházat esetén is vállalok. Készítek táskákat, újra használatható öko termékeket, fehérneműket és maszkokat is.",
    },
    {
        rolam_id: 3,
        title: "Kicsiknek és nagyoknak is örömmel dolgozok",
        description: "Büszke vagyok rá, hogy magánszemélyken túl beszállítója lehetek olyan nagynevű vállalkozásoknak és szervezeteknek mint a Thermal Hotel Visegrád, a Renaissance Étterem Visegrád és a Szent György Lovagrend.",
    },
];

export const gyik = [
    {
        gyik_id: 1,
        isActive: true,
        question: "Tudok bankkártyával fizetni?",
        answer: "Igen. Mind kártyás, készpénzes és átutalásos fizetésre is van lehetőség.",
    },
    {
        gyik_id: 2,
        isActive: true,
        question: "Mi a nyitvatartási idő?",
        answer: "Nincs kimondott nyitvatartás. Hétköznap jellemzően 9 és 16 óra között bármikor tudlak fogadni, de a biztonság kedvéért legyél szíves előzetesen telefonon vagy üzenetben érdeklődni, hogy biztosan otthon legyek amikor jössz.Sürgős esetben hétvégén is tudlak fogadni, kérlek előzetesen telefonon vagy üzenetben egyeztessünk.",
    },
    {
        gyik_id: 3,
        isActive: true,
        question: "Gyermekruhákat milyen korosztálynak keszíted?",
        answer: "Leginkább 0 és 6 éves kor közötti gyermekeknek, de ha idősebb, az sem probléma.",
    },
    {
        gyik_id: 4,
        isActive: true,
        question: "Páromnak van néhány nadrágja, ami túl hosszú, elhozhatom felvarratni?",
        answer: "Természetesen. Ne tévesszen meg, hogy nőiruha keszítés a fő profilom. Javításokat és átalakításokat minden ruhafélére vállalok függetlenül attól, hogy férfi, női vagy gyermekruha.",
    },
    {
        gyik_id: 5,
        isActive: true,
        question: "Van boltod ahol meg tudom vásárolni a termékeidet?",
        answer: "Webshopom van, valamint az Esztergomi Piacon péntekenként és a Szentendrei Piacon szombatonként vagyok megtalálható, illetve ha eljössz hozzám, itt is tudsz vásárolni.",
    },
    {
        gyik_id: 6,
        isActive: true,
        question: "Van online webshop, ahol tudok vásárolni a termékeidből?",
        answer: "Igen, a menüben a Webshop linkre kattintva tudod megnyini.",
    },
    {
        gyik_id: 7,
        isActive: true,
        question: "Kisfiam bolodul a vonatokért, tudnál vonatos nadrágot keszíteni neki?",
        answer: "Igen. Egyedi minta és figura nem probléma. Akadály akkor képzelhető el, ha olyan figurát szeretnél, ami le van védve, ilyenek például a Disney figurák többsége, de biztos vagyok benne, hogy találunk olyan figurát amit tudunk használni.",
    },
];

export const reviews = [
    {
        review_id: 1,
        isActive: true,
        name: "Eszter",
        rating: 4.5,
        comment: "A Mary Varrodaja kivételes weboldal, amely széles választékban kínál magas minőségű termékeket. Nemrégiben vásároltam egy gyönyörű kézzel készített nyakláncot a kollekciójukból, és nagyon elégedett vagyok a vásárlásommal. A weboldal könnyen kezelhető, és az online fizetési folyamat gördülékenyen ment. A termék gyorsan megérkezett, és gyönyörűen volt becsomagolva. Határozottan ajánlom a Mary Varrodaját mindazoknak, akik egyedi és elegáns ékszereket keresnek.",
        timestamp: "2023-07-04T09:30:00Z",
        short_comment: "A Mary Varrodaja kivételes weboldal, amely széles választékban kínál magas minőségű termékeket. Nemrégiben vásároltam egy gyönyörű kézzel készített nyakláncot a kollekciójukból, és nagyon elégedett vagyok a..."
    },
    {
        review_id: 2,
        isActive: true,
        name: "Anna",
        rating: 4.8,
        comment: "A Mary Varrodajára akadtam, amikor különleges ajándékot kerestem a nővérem születésnapjára. Lenyűgözött a kitűnő kézműves munka és a részletek iránti figyelem, amelyek az áruikban megmutatkoznak. A weboldal gyönyörű kollekciót mutat be kézzel készített ékszerekből, amelyek igazán kiemelkedőek. A vevőszolgálat kiváló volt, és mindent megtettek, hogy a nővérem időben megkapja az ajándékát. Hálás vagyok a Mary Varrodajának, hogy ennyire kellemessé tették a vásárlási élményt.",
        timestamp: "2023-07-05T14:45:00Z",
        short_comment: "A Mary Varrodajára akadtam, amikor különleges ajándékot kerestem a nővérem születésnapjára. Lenyűgözött a kitűnő kézműves munka és a részletek iránti figyelem, amelyek az áruikban megmutatkoznak..."
    },
    {
        review_id: 3,
        isActive: true,
        name: "Zsófia",
        rating: 4.2,
        comment: "A Mary Varrodaja lett az új kedvenc online áruházam, amikor ékszerekről van szó. Weboldaluk egy olyan gyöngyszemeket tartalmazó kincsesláda, amelyek gyönyörűen tervezettek, és különböző ízléshez és stílushoz illeszkednek. Ami igazán kiemelkedővé teszi őket, az az a szenvedély és kreativitás, amely minden egyes darabban megmutatkozik. Legyen szó feltűnő nyakláncról vagy finom fülbevalóról, a Mary Varrodajánál biztosan találsz valami igazán egyedit. A weboldaluk könnyen kezelhető, és az ügyfélszolgálatuk gyors és segítőkész. Határozottan ajánlom őket!",
        timestamp: "2023-07-05T19:12:00Z",
        short_comment: "A Mary Varrodaja lett az új kedvenc online áruházam, amikor ékszerekről van szó. Weboldaluk egy olyan gyöngyszemeket tartalmazó kincsesláda, amelyek gyönyörűen tervezettek, és különböző ízléshez és stílushoz illeszkednek..."
    },
    {
        review_id: 4,
        isActive: true,
        name: "Katalin",
        rating: 4.7,
        comment: "Nemrégiben fedeztem fel a Mary Varrodaját, és kellemes meglepetés volt. A weboldaluk lenyűgöző választékkal rendelkezik kézzel készített ékszerekből, amelyek eleganciát és egyediséget sugároznak. Rendeltem egy karkötőt magamnak, és lenyűgözött a minőség és a részletek iránti gondosság. A termék gondosan be volt csomagolva, és nagyra értékeltem a személyes üzenetet tartalmazó kézzel írt üdvözlőlapot is. A Mary Varrodaja valóban egy rejtett kincs az online ékszerboltok világában.",
        timestamp: "2023-07-06T10:20:00Z",
        short_comment: "Nemrégiben fedeztem fel a Mary Varrodaját, és kellemes meglepetés volt. A weboldaluk lenyűgöző választ..."
    }
]

export const hirek = [
    {
        hir_id: 1,
        isActive: !true,
        title: "Esztergom - Piac - 2023.07.07",
        text: "2023.07.07-én pénteken, 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
    },
    {
        hir_id: 2,
        isActive: true,
        title: "Esztergom - Piac - 2023.07.14",
        text: "2023.07.15-én pénteken, 8 órától az esztergomi piacon leszek megtalálható. Mindenkit szeretettel várok."
    },
    {
        hir_id: 3,
        isActive: true,
        title: "Szentendre - Piac - 2023.07.16",
        text: "2023.07.16-án 7 órától várom kedves vásárlóimat a szentendrei piacon. Sok új textil játékkal készültem!"
    },
]