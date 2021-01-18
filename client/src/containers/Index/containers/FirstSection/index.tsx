import React from 'react';

import Search from '../../../../components/UI/Search';

const FirstSection = () => {
    return (
        <section className="Index__FirstSection">
            <h1 className="Index__FirstSection--Headline">Be Gay. <br />Ship Girls</h1>
            <p className="Index__FirstSection--Description">Looking for more lesbian fandoms? want some order on your lesbian fanfics collection? We’re here to
            help you! Dig through our list of fandoms which we gathered
                through AO3 or FF. find and read Fanfics or watch the fandom clips.</p>
            <Search className="Index__FirstSection--Search" placeholder="Look up for your fandom..."/>
        </section>
    )
}

export default FirstSection
