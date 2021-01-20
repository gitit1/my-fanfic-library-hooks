import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

type LogoProps = {
    className: string,
};

const Logo: React.FC<LogoProps> = props => {
    return (
        <div className={props.className}>
            <Typography variant="h6" noWrap>
                <Link to="/">Shippping The Rainbow</Link>
            </Typography>
        </div>
    )
}

export default Logo
