

import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

type MobileNavProps = {
    navItems: { name: string, link: string }[],
    className: string,
    drawerState: boolean,
    drawerHandler: (flag: boolean) => void;
};

const MobileNav: React.FC<MobileNavProps> = props => {

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        props.drawerHandler(open)
    };

    const list = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {
                    props.navItems.map(item => {
                        return (
                            <ListItem button key={item.name} >
                                <ListItemText primary={item.name} />
                            </ListItem>)
                    })
                }
            </List>
        </div>
    );
    return (
        <div className={props.className}>
            <Drawer anchor='left' open={props.drawerState} onClose={toggleDrawer(false)}>
                {list()}
            </Drawer>
        </div>
    )
}

export default MobileNav