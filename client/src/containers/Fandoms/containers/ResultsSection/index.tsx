import React from 'react';
import Fandoms from '../../../../assets/fandomsArray';

const ResultsSection = () => {
    return (
        <section className="Fandoms__Results-Section">
            <h2>{Fandoms.length} fandoms</h2>
            <div className="Fandoms__Results-Section--Fandoms">
                {
                    Fandoms.map(fandom => {
                        return (
                            <div
                                key={fandom.name}
                                className="Index__OurFandomsSection--Fandoms-Carousel__Fandom-Box Fandom-Box"
                            >
                                <div className="Index__OurFandomsSection--Fandoms-Carousel__Fandom-Box--Wrapper">
                                    <img src={fandom.src} alt="" />
                                    <div className="name">{fandom.name}</div>
                                    <div className="type"><span>Type:</span> {fandom.type}</div>
                                    <div className="world"><span>World:</span> {fandom.world}</div>
                                </div>
                            </div>
                        )
                    })
                }
                {Fandoms.length % 2 !== 0 && <div className="Index__OurFandomsSection--Fandoms-Carousel__Fandom-Box Fandom-Box" style={{display: 'none'}}></div>}
            </div>
        </section>

    )
}

export default ResultsSection
