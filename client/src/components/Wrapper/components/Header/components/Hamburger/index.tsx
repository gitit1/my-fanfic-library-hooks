import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type HamburgerProps = {
    className: string,
    drawerHandler: () => void;
};

const Hamburger: React.FC<HamburgerProps> = props => {
    return (
        <div className={props.className}>
            <IconButton
                edge="start"
                className="Header__Container--Hamburger"
                color="inherit"
                aria-label="open drawer"
                onClick={() => props.drawerHandler()}
            >
                <MenuIcon />
            </IconButton>
        </div>
    )
}

export default Hamburger
