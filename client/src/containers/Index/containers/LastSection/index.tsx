import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Clexa from '../../../../assets/index-fandoms-carousel/clexa.jpg';
import SwanQueen from '../../../../assets/index-fandoms-carousel/swanqueen.jpg';
import Mezu from '../../../../assets/index-fandoms-carousel/mezu.jpg';
import Calzona from '../../../../assets/index-fandoms-carousel/calzona.jpg';
import Shoni from '../../../../assets/index-fandoms-carousel/shoni.jpg';
import Damie from '../../../../assets/index-fandoms-carousel/damie.jpeg';
import Avalance from '../../../../assets/index-fandoms-carousel/avalance.jpg';
import Deanoru from '../../../../assets/index-fandoms-carousel/deanoru.jpeg';
import Marina from '../../../../assets/index-fandoms-carousel/marina.jpg';
import EmmaAndAlyssa from '../../../../assets/index-fandoms-carousel/emmaAndalyssa.jpg';
import Crisabel from '../../../../assets/index-fandoms-carousel/crisabel.jpg';

const FANDOMS_ARRAY = [
    {
        name: 'Clexa',
        type: 'TV',
        world: 'The 100',
        src: Clexa
    },
    {
        name: 'SwanQueen',
        type: 'TV',
        world: 'Once Upon a Time',
        src: SwanQueen
    },
    {
        name: 'Mezu',
        type: 'Yuri',
        world: 'Citrus',
        src: Mezu
    },
    {
        name: 'Calzona',
        type: 'TV',
        world: 'Grey\'s Anatomy',
        src: Calzona
    },
    {
        name: 'Shoni',
        type: 'TV',
        world: 'The Wilds',
        src: Shoni
    },
    {
        name: 'Emma & Alyssa',
        type: 'Movie',
        world: 'The Prom',
        src: EmmaAndAlyssa
    },
    {
        name: 'Marina',
        type: 'TV',
        world: 'Station 19',
        src: Marina
    },
    {
        name: 'Deanoru',
        type: 'TV',
        world: 'The Runaways',
        src: Deanoru
    },
    {
        name: 'Avalance',
        type: 'TV',
        world: 'Legends of Tommorow',
        src: Avalance
    },
    {
        name: 'Damie',
        type: 'TV',
        world: 'The Haunting of Bly Manor',
        src: Damie
    },
    {
        name: 'Crisabel',
        type: 'Telenovela',
        world: 'Tierra de Lobbos',
        src: Crisabel
    }
].sort(() => Math.random() - 0.5);
const RANDOM_COLOR_ARRAY = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const LastSection = () => {
    return (
        <section className="Index__LastSection">
            <div className="Index__LastSection--TextArea">
                <h2 className="Index__LastSection--TextArea__Header">Our Fandoms</h2>
                <p className="Index__LastSection--TextArea__Description">Currently Their are {FANDOMS_ARRAY.length} Fandoms in our sites!</p>
            </div>
            <Slider {...settings} className="Index__LastSection--Fandoms-Carousel">
                {
                    FANDOMS_ARRAY.map(fandom => {
                        const randomColor = RANDOM_COLOR_ARRAY[Math.floor(Math.random() * RANDOM_COLOR_ARRAY.length)];
                        return (
                            <div
                                key={fandom.name}
                                className="Index__LastSection--Fandoms-Carousel__Fandom-Box"
                            >
                                <div className="Index__LastSection--Fandoms-Carousel__Fandom-Box--Wrapper">
                                    <img src={fandom.src} alt="" />
                                    <div className={`name ${randomColor}`}>{fandom.name}</div>
                                    <div className="type"><span>Type:</span> {fandom.type}</div>
                                    <div className="world"><span>World:</span> {fandom.world}</div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
            <div className="Index__LastSection--See_All" onClick={() => alert('test')}>
                <span>See All</span>
            </div>
        </section>
    )
}

export default LastSection
