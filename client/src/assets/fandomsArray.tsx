import Clexa from './index-fandoms-carousel/clexa.jpg';
import SwanQueen from './index-fandoms-carousel/swanqueen.jpg';
import Mezu from './index-fandoms-carousel/mezu.jpg';
import Calzona from './index-fandoms-carousel/calzona.jpg';
import Shoni from './index-fandoms-carousel/shoni.jpg';
import Damie from './index-fandoms-carousel/damie.jpeg';
import Avalance from './index-fandoms-carousel/avalance.jpg';
import Deanoru from './index-fandoms-carousel/deanoru.jpeg';
import Marina from './index-fandoms-carousel/marina.jpg';
import EmmaAndAlyssa from './index-fandoms-carousel/emmaAndalyssa.jpg';
import Crisabel from './index-fandoms-carousel/crisabel.jpg';

let Fandoms = [
    {
        name: 'Clexa',
        type: 'TV',
        world: 'The 100',
        fanficNumber: '12,000',
        src: Clexa
    },
    {
        name: 'SwanQueen',
        type: 'TV',
        world: 'Once Upon a Time',
        fanficNumber: '20,000',
        src: SwanQueen
    },
    {
        name: 'Mezu',
        type: 'Yuri',
        world: 'Citrus',
        fanficNumber: '500',
        src: Mezu
    },
    {
        name: 'Calzona',
        type: 'TV',
        world: 'Grey\'s Anatomy',
        fanficNumber: '6,000',
        src: Calzona
    },
    {
        name: 'Shoni',
        type: 'TV',
        world: 'The Wilds',
        fanficNumber: '200',
        src: Shoni
    },
    {
        name: 'Emma & Alyssa',
        type: 'Movie',
        world: 'The Prom',
        fanficNumber: '100',
        src: EmmaAndAlyssa
    },
    {
        name: 'Marina',
        type: 'TV',
        world: 'Station 19',
        fanficNumber: '600',
        src: Marina
    },
    {
        name: 'Deanoru',
        type: 'TV',
        world: 'The Runaways',
        fanficNumber: '1000',
        src: Deanoru
    },
    {
        name: 'Avalance',
        type: 'TV',
        world: 'Legends of Tommorow',
        fanficNumber: '3000',
        src: Avalance
    },
    {
        name: 'Damie',
        type: 'TV',
        world: 'The Haunting of Bly Manor',
        fanficNumber: '500',
        src: Damie
    },
    {
        name: 'Crisabel',
        type: 'Telenovela',
        world: 'Tierra de Lobbos',
        fanficNumber: '5',
        src: Crisabel
    }
];

Fandoms = Fandoms.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

export default Fandoms;
    