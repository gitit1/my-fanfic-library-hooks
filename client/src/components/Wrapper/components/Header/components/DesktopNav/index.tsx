import React, { ClassType } from 'react';
import { Button } from '@material-ui/core';

type DesktopNavProps = {
    navItems: { name: string, link: string }[],
    className: string
};

const DesktopNav: React.FC<DesktopNavProps> = props => {
    return (
        <div className={props.className}>
            <nav>
                {
                    props.navItems.map(item => {
                        return (<Button key={item.name}>{item.name}</Button>)
                    })
                }
                
            </nav>
        </div>
    )
}

export default DesktopNav
