import { Book } from '../app/library/interface';
import { UUID } from 'angular2-uuid';

export const books: Book[] = [
  {
    id: UUID.UUID(),
    title: 'Az Éhezők Viadala',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
    description: 'Észak-Amerika romjain ma Panem országa, a ragyogó Kapitólium és a tizenkét távoli körzet fekszik. ' +
    'A Kapitólium kegyetlenül bánik Panem lakóival: minden évben, minden körzetből kisorsolnak egy-egy ' +
    'tizenkét és tizennyolc év közötti fiút és lányt, akiknek részt kell venniük Az Éhezők Viadalán. ' +
    'Az életre-halálra zajló küzdelmet élőben közvetíti a tévé. A tizenhat éves Katniss Everdeen egyedül ' +
    'él a húgával és az anyjával a Tizenkettedik Körzetben. Amikor a húgát kisorsolják, Katniss önként ' +
    'jelentkezik helyette a Viadalra, ez pedig felér egy halálos ítélettel. ' +
    'De Katniss már nem először néz farkasszemet a halállal..',
    isbn: '9789639868649',
    series: 'Az Éhezők Viadala-trilógia 1. kötete',
    img: 'collins_1.jpg',
    year: '2011',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'Futótűz',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
    description: 'Katniss és Peeta megnyerték az Éhezők Viadalát, így ők és a családjaik megmenekültek az éhezéstől,' +
    ' de a fiatalok nem ülhetnek nyugodtan a babérjaikon. Vár rájuk a hosszú Győzelmi Körút, ismét csak a tévénézők árgus szeme előtt. ' +
    'A kötelező udvariaskodás unalmát azonban döbbenet és félelem váltja fel, amikor hírét veszik, hogy lázadás készül ' +
    'a Kapitólium ellen. Snow elnök sosem habozott lesújtani az engedetlenekre, és most is ott csap le, ahol senki sem várja.' +
    ' Emberek halnak meg, családok lesznek földönfutók, Katniss és Peeta pedig újabb küzdelemre kényszerülnek,' +
    ' ahol a tétek még nagyobbak, mint korábban. ',
    isbn: '9786155049729',
    series: 'Az Éhezők Viadala-trilógia 2. kötete',
    img: 'collins_2.jpg',
    year: '2012',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'A kiválasztott',
    author: 'Suzanne Collins',
    publisher: 'Agave Könyvek Kiadó Kft.',
    description: 'Bár minden ellene szólt, ' +
    'Katniss Everdeennek kétszer is sikerült élve kikerülnie az Éhezők Viadalából. ' +
    'Túlélt minden megpróbáltatást, de még mindig nincs biztonságban. ' +
    'Mert a Kapitólium bűnbakot keres a lázadás miatt. Snow elnök pedig egyértelművé tette: ' +
    'Kapitólium haragja elől senki sem menekülhet. Sem Katniss családja, sem a barátai, sem pedig a 12. Körzet lakói. ' +
    'De közeledik a végső forradalom ideje. Amikor a nép végre szembeszáll a Kapitólium zsarnokságával. ' +
    'És ebben a forradalomban Katnissnak döntő szerepe lesz.',
    isbn: '9786155049712',
    series: 'Az Éhezők Viadala-trilógia 3. kötete',
    img: 'collins_3.jpg',
    year: '2011',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'Halálparancs',
    author: 'James Dashner',
    publisher: 'Cartaphilus Kiadó Kft.',
    description: 'Mielőtt megalakult a VESZETT, mielőtt létrejött a Tisztás, mielőtt Thomas belépett az Útvesztőbe,' +
    ' napkitörések sora érte a Földet, és szörnyű ragállyal fertőzte meg az emberiséget. A bolygó lakóinak nagy része odaveszett. ' +
    'Aki megbetegedett, annak lassanként elborult az elméje, és előbb-utóbb tomboló véglénnyé vált. ' +
    'Mark és Trina a túlélők kis csoportjához tartozik. Miután elmenekültek a New Yorkra lesújtó szökőár elől, ' +
    'nap mint nap az életben maradásért küzdenek, az élelmükért, a nyugalmukért. A természet lassan mintha már az ' +
    'újjáéledés jeleit mutatná a napkitörések után, amikor egy napon különös légi jármű - egy Berg - jelenik meg településük fölött. ' +
    'A Bergről a Kitörés vírusával fertőzött lövedékekkel kezdik lőni a csoportot.',
    isbn: '9789632664392',
    series: 'Az Útvesztő-trilógia előzményeinek első kötete',
    img: 'dashner_4.jpg',
    year: '2015',
    cover: 'Kartonált',
  },
  {
    id: UUID.UUID(),
    title: 'A kiválasztott',
    author: 'James Dashner',
    publisher: 'Cartaphilus Kiadó Kft.',
    description: 'Bekövetkezett a világvége. Az erdőket tűz pusztította el, a folyók és a tavak kiszáradtak, a tengerek' +
    ' szinte semmivé lettek. Aztán jött a gyilkos kór: láz söpört végig a világon. Az emberek egymás ellen fordultak, ' +
    'tombolt az erőszak, melynek családok milliói estek áldozatul. Majd megjelent a VESZETT, melynek tagjai válaszokat kerestek. ' +
    'És találtak egy fiút, aki tökéletesen megfelelt a céljaiknak. A fiú, Thomas, pedig épített egy Útvesztőt. Thomas nem tudta, ' +
    'mennyi titok, mennyi hazugság veszi körül. Nem tudta, barátai és a VESZETT alkalmazottai közül kiben bízhat meg, és kik azok, ' +
    'akik alantas szándékkal megtévesztik, eszközként használják. Akik igaz barátai, azok a végsőkig hűségesek lesznek hozzá, ' +
    'még akkor is, amikor már emlékük sem marad róla.',
    isbn: '9789632665658',
    series: 'Az Útvesztő-trilógia előzményeinek második kötete',
    img: 'dashner_5.jpg',
    year: '2017',
    cover: 'Kartonált',
  },
  {
    id: UUID.UUID(),
    title: 'A papírmágus',
    author: 'Charlie N. Holmberg',
    publisher: 'Gabo Könyvkiadó és kereskedés Kft.',
    description: 'Ceony Twill összetört álmokkal érkezik meg Emery Thane mágus házába. A varázslóképző iskolában évfolyamelsőként ' +
    'végzett lány fémmágusnak készült, most mégis papírmágiára kárhoztatják - de hát mi haszna a papírnak egyáltalán? Azonban a' +
    ' varázslatok, amelyeket Ceony a csodabogár Thane keze alatt megtanul, rácáfolnak előítéleteire. Ahogy kibomlik előtte a' +
    ' papírmágia csodálatos világa, megismeri tanára sötét múltját és egy olyan tiltott és veszedelmes mágiafajtát, amellyel ' +
    'szemben szinte semmi reménye nem lehet felvenni a versenyt. Mégis muszáj megtennie, mert hamarosan szó szerint ' +
    'Thane szíve lesz a tét.',
    isbn: '9789634064633',
    series: 'A papírmágus trilógia I.',
    img: 'holmberg_1.jpg',
    year: '2017',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'Az üvegmágus',
    author: 'Charlie N. Holmberg',
    publisher: 'Gabo Könyvkiadó és kereskedés Kft.',
    description: 'Ceony Twill folytatja papírmágusi tanulmányait, ám tanárával,' +
    ' Emery Thane-nel nem tud olyan könnyen dűlőre jutni, mint a tananyaggal. ' +
    'Amikor ő és Thane macska-egér játékba keverednek egy bosszúszomjas varázslóval, Ceonynak el kell döntenie: ' +
    'hagyja, hogy mások megvédjék, vagy ő próbálja megóvni a szeretteit a fenyegetéstől. Eközben pedig olyan ' +
    'titok birtokába jut, amely az egész mágikus világot kifordíthatja a sarkából, és csak rajta áll, ' +
    'hogy képes-e megakadályozni, hogy ez a veszedelmes tudás rossz kezekbe kerüljön.',
    isbn: '9789634065500',
    series: 'A papírmágus trilógia II.',
    img: 'holmberg_2.jpg',
    year: '2017',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'Anyám teremtményei',
    author: 'Barczikay Lilla',
    publisher: 'Szófia kiadó',
    description: 'A főszereplő aki maga mondja el a történetet paraképességekkel bír. Az árvaházat ügyesen elhagyó ' +
    'fiatalok nem mindennapi társaságot hoznak össze; a mesélő pedig szinte természetes módon beszélget bútorokkal,' +
    ' ajtóval, ablakkal, lépcsőkkel. A regényben éppen így fonódik össze a természetes, és ami azon túlmutat.' +
    ' Az olvasó végül részese lesz a történetnek, és ezt egy cseppet sem bánja..',
    isbn: '9789638903266',
    series: '-',
    img: 'barczikay.jpg',
    year: '2015',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'A rémálmok lánya',
    author: 'Kendare Blake',
    publisher: 'Geopen Könyvkiadó Kft.',
    description: 'Hónapok teltek el, amióta a vérbe öltözött lány, Anna Korlova becsapta maga mögött a Pokol kapuját, ' +
    'de Cas Lowood, a híres kísértetvadász nem tudja kiheverni elvesztését. Hiába mondják a barátai, hogy' +
    ' Anna miatta szállt alá, ő csak élőhalottként tengődik. A fiú tudja, hogy sosem talál rá a szerelemre egy ' +
    'élő lány oldalán, senki sem hasonlítható az ő halott Annájához. És csak őt látja mindenütt, vele alszik ' +
    'el és vele riad fel rémálmaiból. De valami nagyon nincs rendjén... Ezek nem képzelgések. Valahányszor ' +
    'megjelenik, látszik Annán, hogy a legválogatottabb kínzásokat kell kiállnia. Persze meg kell bűnhődnie tetteiért,' +
    ' de Cas úgy érzi, most rajta a sor, hogy viszonozza a lánynak, amit érte tett..',
    isbn: '9789639973800',
    series: '-',
    img: 'kendare_blake_2.jpg',
    year: '2012',
    cover: 'Keménytábla, védőborító',
  },
  {
    id: UUID.UUID(),
    title: 'Vérbe öltözött Anna',
    author: 'Kendare Blake',
    publisher: 'Geopen Könyvkiadó Kft.',
    description: 'Élők és holtak. Szerelem és halál. Önfeláldozás és gyilkosság...A 17 éves Cas Lowood szokatlan hivatást választ: ' +
    'halottakat öl.Így tett az apja is, míg el nem pusztította egy kegyetlen kísértet. Cas apja rejtélyes fegyverével, ' +
    'az athaméval együtt a rendkívüli képességet is örökölte, ezért mozgalmas életmódra rendezkedik be boszorkánykodással ' +
    'foglalkozó mamája és Tybalt, a szellemek jelenlétét megérző macska társaságában. A fiú a helyi mendemondákat és' +
    ' a titokzatos események hírét követve nyomoz az élőkre veszedelmes, vérszomjas és bosszúálló holtak után, ' +
    'hogy ártalmatlanná tegye őket.',
    isbn: '9789639973930',
    series: '-',
    img: 'kendare_blake_1.jpg',
    year: '2012',
    cover: 'Keménytábla, védőborító',
  },
  {
    id: UUID.UUID(),
    title: 'A beavatott',
    author: 'Veronica Roth',
    publisher: 'Ciceró Könyvstúdió Kft.',
    description: 'Beatrice Prior a távoli jövő Chicagójában él: az itteni társadalom öt csoportra tagolódik, ' +
    'melyek mindegyike egy-egy erény kiművelését írja elő tagjai számára. Ők az Őszinték, az Önfeláldozók, a ' +
    'Bátrak, a Barátságosak és a Műveltek. Az év egy bizonyos napján a mindenkori tizenhat éveseknek el kell dönteniük, ' +
    'melyik csoporthoz kívánnak tartozni. Ennek kell szentelniük életük hátralevő részét. Beatrice ingadozik aközött, ' +
    'hogy a családjával maradjon-e - vagy végre önmagává váljon. Ez a két lehetőség kizárja egymást. Végül olyan döntést hoz, ' +
    'amely mindenki számára meglepetést jelent - még önmagának is.',
    isbn: '9789635397617',
    series: 'A beavatott sorozat első kötete',
    img: 'roth_1.jpg',
    year: '2012',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'A lázadó',
    author: 'Veronica Roth',
    publisher: 'Ciceró Könyvstúdió Kft.',
    description: 'Egyetlen döntésed hatására megváltozhatsz - vagy akár meg is semmisülhetsz. ' +
    'Minden egyes választásunknak megvannak a maga következményei - Tris Prior is megtapasztalja ezt, ' +
    'amikor nyugtalanság s zavar támad körülötte a társadalom valamennyi csoportjában. Meg kell próbálnia ' +
    'megmenteni a szeretteit - és önmagát -, miközben újra meg újra szembesül a fájdalom, a megbocsátás, ' +
    'az azonosulás, a hűség, a politika, a szerelem és a szeretet kérdéseivel.',
    isbn: '9789635397815',
    series: 'A beavatott sorozat második kötete',
    img: 'roth_2.jpg',
    year: '2013',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'A hűséges',
    author: 'Veronica Roth',
    publisher: 'Ciceró Könyvstúdió Kft.',
    description: 'Darabjaira hullott a csoportokra épülő társadalom, amelyben Tris Prior hitt korábban:' +
    ' erőszakos cselekmények és hatalmi harcok vezettek a széteséséhez, a túlélők veszteségek és árulások ' +
    'sebeit hordozzák. Tris ezért aztán él a felkínált lehetőséggel, hogy feltérképezze a város általa ' +
    'ismert határain túli világot. Hátha ott, a kerítésen túl megadatik neki és Tobiasnak, hogy elkezdjék ' +
    'egyszerű, közös életüket, amelyet nem terhelnek szövevényes hazugságok, érdek-összefonódások és' +
    ' fájdalmas emlékek. Az új világ azonban félelmetesebbnek bizonyul, mint amelyet Tris maga mögött hagyott. ' +
    'A korábbi felismerések értelmüket veszítik, veszélyes új igazságok formálják át az embereket, akiket szeretett.' +
    ' Trisnek ismét meg kell vívnia a maga csatáját, hogy megérthesse a bonyolult emberi természetet és önmagát: ' +
    'képtelennél képtelenebb döntéseket kell hoznia a bátorság, a hűség, az áldozatkészség és a szeretet próbatételei során.',
    isbn: '9789635398768',
    series: 'A beavatott sorozat harmadik kötete',
    img: 'roth_3.jpg',
    year: '2014',
    cover: 'Puhatáblás, ragasztókötött',
  },
  {
    id: UUID.UUID(),
    title: 'Négyes',
    author: 'Veronica Roth',
    publisher: 'Ciceró Könyvstúdió Kft.',
    description: 'EGYETLEN DÖNTÉS, amely megszabadít a múltadtól. EGYETLEN DÖNTÉS amely meghatározza a jövődet. ' +
    'EGYETLEN DÖNTÉS amely végérvényesen megváltoztat. EGYETLEN DÖNTÉS és szabad lehetsz.',
    isbn: '9789635399109',
    series: 'A beavatott sorozat kiegészítő kötete',
    img: 'roth_4.jpg',
    year: '2014',
    cover: 'Puhatáblás, ragasztókötött',
  },
];
