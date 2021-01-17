import React from 'react';

import { IconButton, Badge } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';

const LeftIcons= () => {
    return (
        <div>
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="user"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
        </div>
    )
}

export default LeftIcons
