// Images of Termékek
import fehernemuk_img from '../img/categories/fehernemuk.jpg';
import gyermekruhak_img from '../img/categories/gyermekruhak.jpg';
import maszkok_img from '../img/categories/maszkok.jpg';
import oko_termekek_img from '../img/categories/oko_termekek.jpg';
import taskak_img from '../img/categories/taskak.jpg';

// Images of Szolgáltatások
import gyermekruha_keszites_img from '../img/szolgaltatasok/gyermekruha-keszites.jpg'
import noi_felsoruha_keszites_img from '../img/szolgaltatasok/noi-felsoruha-keszites.jpg'
import ruha_javitas_es_atalakitas_img from '../img/szolgaltatasok/ruha-javitas-es-atalakitas.jpg'

//const importAll = (requireContext) => requireContext.keys().map(requireContext);
//const images = importAll(require.context('../src/img/categories', false, /\.(png|jpe?g|svg)$/));
//console.log(images);

export const szolgaltatasok = [
    {
        szolgaltatas_id: 1,
        title: "Női felsőruha készítés",
        url: "/szolgaltatasok/noi-felsoruha-keszites",
        img: noi_felsoruha_keszites_img,
        alt: "Valaki egy ruhánt készít, aki éppen megtűz egy ruha szélt, valamint egy sárga szabócenti is van a kép jobb szélén.",
        description: "Személyre szabott ruhák, blúzok, szoknyák, nadrágok és sokminden más.",
        details: [
            {
                detail_id: 1,
                title: "Egyénre szabva",
                img: "",
                pharagraps: [
                    "Boltban vásárolt ruhák egyik hátránya, hogy a méret nem egyénre szabott, az úgynevezett konfekció méret nagyon sokaknak nem felel meg.",
                    "Biztosan veled is megtörtént már, hogy amikor felpróbáltál egy ruhadarabot, az többé kevésbé jó volt, de: ráncolódott ott ahol nem kellett volna; szűk volt az egyik helyen a másikon pedig bő; póló vagy ing hossza jó volt, de az ujjahossza túl rövid; a zakó háta elállt vagy bugyrosodott; a nadrág ülepe bugyrosodott vagy túl szoros volt.",
                    "Ez azért van, mert a tömeggyártásnál a nagy átlagra jellemző testarányokra készítik a ruhákat, viszont az emberek közel fele nem ebbe a csoportba tartozik, hiszen a testarányok egyénenként változnak. Van akinek hosszabb a felsőteste, van akinek a végtagjai hosszabbak, van akinek a válla vagy a csípője szélesebb, stb.",
                    "Az általam készített ruhák mind egyedileg modellezettek, a levett testméretek alapján készülnek, így biztos, hogy úgy fog mutatni, mint ahogyan a divatlapokban látható.",
                ],
            },
        ],
    },
    {
        szolgaltatas_id: 2,
        title: "Ruha javítás és átalakítás",
        url: "/szolgaltatasok/ruha-javitas-es-atalakitas",
        img: ruha_javitas_es_atalakitas_img,
        alt: "Ruha javítás és átalakítás kép. Egy szakadt farmernadrág, egy olló, négy különböző színű cérnaspulni, egy varrógyűszű, és egy szabócenti látható.",
        description: "Ha túl hosszú, túl bő, szakadt vagy ha bővíteni kell. Tönkrement a cipzár a kedvenc darabon? Minden ami alakítás, javítás.",
        details: [
            {
                detail_id: 1,
                title: "Túl hosszú?",
                img: "",
                alt: "",
                pharagraps: [
                    "Ki ne ismerné az érzést, amikor a boltban megvásárolni kívánt nadrág vagy ruha derékban jó, nagyon tetszik, csak túl hosszú és ezért inkább nem vesszük meg.",
                    "Nem kell otthagynod a boltban, hozd el hozzám, én levágom és felvarrom a megfelelő méretre.",
                ],
            },
            {
                detail_id: 2,
                title: "Túl bő vagy túl szűk?",
                img: "",
                alt: "",
                pharagraps: [
                    "Az előbb említetthez hasonlóan lehet probléma a bőséggel is. Súlyváltozás esetén ez könnyen bekövetkezhet. De miért dobnád el a ruhádat, ha egy kicsit bő vagy szűk?",
                    "Ha túl bő egy nadrág vagy ruha, az általában gyorsan javítható. Ha bővíteni kell, arra is van megoldás.",
                    "Hozd el hozzám és megnézem mit lehet tenni.",
                ],
            },
            {
                detail_id: 3,
                title: "Tönkrement a cipzár?",
                img: "",
                alt: "",
                pharagraps: [
                    "Bosszantó tud lenni, amikor egy tönkrement cipzár miatt ki kell dobni valamit. Ne dobd ki, a cipzárcsere olcsó megoldás, hogy vissza kapd.",
                    "Hasonló bosszúság, amikor az anyag szakad ki. Egy szakadás nagyon gyakran nyom nélkül javítható.",
                    "Ne dobd ki, hozd el hozzám, egy próbát megér.",
                ],
            },
        ],
    },
    {
        szolgaltatas_id: 3,
        title: "Gyermekruha készítés",
        url: "/szolgaltatasok/gyermekruha-keszites",
        img: gyermekruha_keszites_img,
        alt: "Egy kisfiú és egy kislány látható a képen. A fiú bal oldalon, a lány jobb oldalon van. A fiún zöld kabát és kék farmernadrág, a lányon rózsaszín kabát és fekete nadrág van.",
        description: "Bébi és gyermekruha készítés. Egyedi dizájn a megrendelő igényei szerint.",
        details: [
            {
                detail_id: 1,
                title: "Cím 1 gyermekruhához",
                img: "",
                alt: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum cumque unde saepe fugit dicta aliquid accusamus tenetur veritatis blanditiis illum alias impedit magnam corrupti quos porro molestias ex? Molestias non corpore repudiandae! Qui, magni distinctio.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Estore non ipsum fuga rerum cumque unde saepe fugit dicta aliquid accusamus tenetur veritatis blanditiis illum alias impedit magnam corrupti quos porro molestias ex? .",
                ],
            },
            {
                detail_id: 2,
                title: "Cím 2 gyermekruhához",
                img: "",
                alt: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga rerum cumque unde saepe fugit dicta aliquid accusamus tenetur veritatis blanditiis illum alias impedit magnam corrupti quos porro molestias ex? Molestias non corpore repudiandae! Qui, magni distinctio.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Estore non ipsum fuga rerum cumque unde saepe fugit dicta aliquid accusamus tenetur veritatis blanditiis illum alias impedit magnam corrupti quos porro molestias ex? .",
                ],
            },
        ],
    },
];

export const termekek = [
    {
        termek_id: 1,
        isActive: true,
        title: "Táskák",
        url: "/termekek/taskak",
        img: taskak_img,
        alt: "",
        description: "Kézi, háti és oldal táskák egyed kivitelben egyedi színben és dizájnnal.",
        details: [
            {
                detail_id: 1,
                title: "Alcím Táskák",
                img: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
            },
        ],
    },
    {
        termek_id: 2,
        isActive: true,
        title: "Maszkok",
        url: "/termekek/maszkok",
        img: maszkok_img,
        alt: "",
        description: "Női, férfi és gyermek maszkok különféle méretben, színben és kivitelben.",
        details: [
            {
                detail_id: 1,
                title: "Alcím Maszkok",
                img: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
            },
        ],
    },
    {
        termek_id: 3,
        isActive: true,
        title: "Fehérneműk",
        url: "/termekek/fehernemuk",
        img: fehernemuk_img,
        alt: "",
        description: "Női fehérneműk nem csak fehér színben, akár egyedi mintával és hímzéssel.",
        details: [
            {
                detail_id: 1,
                title: "Alcím Fehérneműk",
                img: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
            },
        ],
    },
    {
        termek_id: 4,
        isActive: true,
        title: "Öko termékek",
        url: "/termekek/oko-termekek",
        img: oko_termekek_img,
        alt: "",
        description: "Eldobható termékek újragondolva. Váltsd le a műanyagot mosható textílre és ezzel óvd a környezetet.",
        details: [
            {
                detail_id: 1,
                title: "Alcím Öko termékek",
                img: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
            },
        ],
    },
    {
        termek_id: 5,
        isActive: true,
        title: "Gyermekruhák",
        url: "/termekek/gyermekruhak",
        img: gyermekruhak_img,
        alt: "",
        description: "Pizsamák, hálózsákok, polók, nadrágok és megannyi más.",
        details: [
            {
                detail_id: 1,
                title: "Alcím Gyermekruhák",
                img: "",
                pharagraps: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                ],
            },
        ],
    },
];

export const rolam = [
    {
        rolam_id: 1,
        title: "Baltringer Mária vagyok, nőiruha készítő.",
        description: "Nagyon szerencsésnek mondhaton magam, hiszen több mint 40 éve minden nap a hobbimnak élhetek, a munkám egyben a hobbim is. Teljes meggyőződéssel mondhatom, hogy erre születtem. Azt modják, hogy az elhivatottság és maximalizmus köszön vissza az elkészített ruháim minőségében.",
    },
    {
        rolam_id: 2,
        title: "Több mint munka, ez hivatás.",
        description: "Fő profilom az egyedi női és gyermek ruhák készítés, de javításokat és átalakításokat férfiruházat esetén is vállalok. Készítek táskákat, újra használatható öko termékeket, fehérneműket és maszkokat is.",
    },
    {
        rolam_id: 3,
        title: "Kicsiknek és nagyoknak is örömmel dolgozok.",
        description: "Büszke vagyok rá, hogy magánszemélyken túl beszállítója lehetek olyan nagynevű vállalkozásoknak és szervezeteknek mint a Thermal Hotel Visegrád, a Renaissance Étterem Visegrád és a Szent György Lovagrend.",
    },
];

export const gyik = [
    {
        gyik_id: 1,
        question: "Tudok bankkártyával fizetni?",
        answer: "Igen. Mind kártyás, készpénzes és átutalásos fizetésre is van lehetőség.",
        link: "",
    },
    {
        gyik_id: 2,
        question: "Mi a nyitvatartási idő?",
        answer: "Nincs kimondott nyitvatartás. Hétköznap jellemzően 9 és 16 óra között bármikor tudlak fogadni, de a biztonság kedvéért legyél szíves előzetesen telefonon vagy üzenetben érdeklődni, hogy biztosan otthon legyek amikor jössz.Sürgős esetben hétvégén is tudlak fogadni, kérlek előzetesen telefonon vagy üzenetben egyeztessünk.",
        link: "",
    },
    {
        gyik_id: 3,
        question: "Gyermekruhákat milyen korosztálynak keszíted?",
        answer: "Leginkább 0 és 6 éves kor közötti gyermekeknek, de ha idősebb, az sem probléma.",
        link: "",
    },
    {
        gyik_id: 4,
        question: "Páromnak van néhány nadrágja, ami túl hosszú, elhozhatom felvarratni?",
        answer: "Természetesen. Ne tévesszen meg, hogy nőiruha keszítés a fő profilom. Javításokat és átalakításokat minden ruhafélére vállalok függetlenül attól, hogy férfi, női vagy gyermekruha.",
        link: "",
    },
    {
        gyik_id: 5,
        question: "Van boltod ahol meg tudom vásárolni a termékeidet?",
        answer: "Webshopom van, valamint a Szentendrei Piacon megtalálsz szombatonként, illetve ha eljössz hozzám, itt is tudsz vásárolni.",
        link: "",
    },
    {
        gyik_id: 6,
        question: "Van online webshop, ahol tudok vásárolni a termékeidből?",
        answer: "Igen, a linkre kattintva tudod megnyini.",
        link: "",
    },
    {
        gyik_id: 7,
        question: "Kisfiam bolodul a vonatokért, tudnál vonatos nadrágot keszíteni neki?",
        answer: "Igen. Egyedi minta és figura nem probléma. Akadály akkor képzelhető el, ha olyan figurát szeretnél, ami le van védve, ilyenek például a Disney figurák többsége, de biztos vagyok benne, hogy találunk olyan figurát amit tudunk használni.",
        link: "",
    },
];

