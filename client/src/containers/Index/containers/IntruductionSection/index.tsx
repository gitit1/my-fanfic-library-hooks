import React from 'react';

import Search from '../../../../components/UI/Search';

const IntruductionSection = () => {

    const todo = () => {
        alert('test - IntruductionSection')
    }

    return (
        <section className="Index__IntruductionSection">
            <h1 className="Index__IntruductionSection--Headline">Be Gay. <br />Ship Girls</h1>
            <p className="Index__IntruductionSection--Description">Looking for more lesbian fandoms? want some order on your lesbian fanfics collection? We’re here to
            help you! Dig through our list of fandoms which we gathered
                through AO3 and FF. find and read Fanfics or watch the fandom clips.</p>
            <Search
                className="Index__IntruductionSection--Search"
                placeholder="Look up for your fandom..."
                onclick={todo}
            />
        </section>
    )
}

export default IntruductionSection
