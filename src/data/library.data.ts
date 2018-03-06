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
  }
];
