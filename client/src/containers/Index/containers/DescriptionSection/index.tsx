import React from 'react';

import SearchIcon from "../../../../assets/icons/search@2x.png";
import ChooseIcon from "../../../../assets/icons/choose@2x.png";
import GayIcon from "../../../../assets/icons/gay@2x.png";

const ICONS_BOX_DATA = [
    {
        headetTitle: 'Fandoms',
        headerIcon: SearchIcon,
        description: 'Explore the site database of lesbian fandoms from TV, movies, etc.. to find the one you looking for!'
    },
    {
        headetTitle: 'Fanfics',
        headerIcon: GayIcon,
        description: 'Most of the Fandoms has a Fanfic Library, it includes fanfics from both AO3 and FF, and for registrer users the ability to keep track about what you read. [LEARN MORE]'
    },
    {
        headetTitle: 'Other Media',
        headerIcon: ChooseIcon,
        description: 'Each Fandom also includes General Info and the media it related to (series clips, movie clips,comics...)'
    }
]

const DescriptionSection = () => {
    return (
        <section className="Index__DescriptionSection">
            <div className="Index__DescriptionSection--TextArea">
                <h2 className="Index__DescriptionSection--TextArea__Header">What is that about?</h2>
                <p className="Index__DescriptionSection--TextArea--Description">Shipping the Rainbow (originally My Fanfics Library) was first built as a way to order my favorite fanfics fandoms to one place (from both AO3 and FF)
                and to give me the ability to mark them (as read, favorite reading list...) and save them.
                    later on I wanted to expend it to not only store the fanfics but to also be able to rewatch the videos of the fandoms.</p>
            </div>
            <div className="Index__DescriptionSection--IconsArea">
            {
                ICONS_BOX_DATA.map(box => {
                    return (
                            <div className="Index__DescriptionSection--IconsArea__box" key={box.headetTitle}>
                                <div className="Index__DescriptionSection--IconsArea__box--header">
                                    <img src={box.headerIcon} alt="" />
                                    <h4>{box.headetTitle}</h4>
                                </div>
                                <div className="Index__DescriptionSection--IconsArea__box--description">
                                    <p>{box.description}</p>
                                </div>
                            </div>
                    )
                })
            }
            </div>
        </section>
    )
}

export default DescriptionSection
