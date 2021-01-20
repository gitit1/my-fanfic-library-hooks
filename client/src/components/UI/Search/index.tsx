import React from 'react';
import classNames from "classnames";

import './Search.scss';

type SearchProps = {
    className: string,
    placeholder: string,
    onclick: (...vars: any) => void;
};

const Search: React.FC<SearchProps> = props => {
    const classes = classNames({
        'Search': true,
        [props.className]: !!props.className,
    });

    return (
        <div className={classes}>
            <input type="text" placeholder={props.placeholder} />
            <div onClick={() => props.onclick()}>
                    <span>Search</span>
            </div>
        </div>
    )
}

export default Search
