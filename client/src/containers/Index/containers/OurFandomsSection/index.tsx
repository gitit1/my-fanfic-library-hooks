import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Fandoms from '../../../../assets/fandomsArray';

const FANDOMS_ARRAY = [...Fandoms].sort(() => Math.random() - 0.5);
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

const OurFandomsSection = () => {
    return (
        <section className="Index__OurFandomsSection">
            <div className="Index__OurFandomsSection--TextArea">
                <h2 className="Index__OurFandomsSection--TextArea__Header">Our Fandoms</h2>
                <p className="Index__OurFandomsSection--TextArea__Description">Currently Their are {FANDOMS_ARRAY.length} Fandoms in our sites!</p>
            </div>
            <Slider {...settings} className="Index__OurFandomsSection--Fandoms-Carousel">
                {
                    FANDOMS_ARRAY.map(fandom => {
                        const randomColor = RANDOM_COLOR_ARRAY[Math.floor(Math.random() * RANDOM_COLOR_ARRAY.length)];
                        return (
                            <div
                                key={fandom.name}
                                className="Index__OurFandomsSection--Fandoms-Carousel__Fandom-Box"
                            >
                                <div className="Index__OurFandomsSection--Fandoms-Carousel__Fandom-Box--Wrapper">
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
            <div className="Index__OurFandomsSection--See_All">
                <Link to="/fandoms" >
                    <span>See All</span>
                </Link>
            </div>
        </section>
    )
}

export default OurFandomsSection
