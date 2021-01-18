import React from 'react';

type MainProps = {
    children: any,
};

const Main: React.FC<MainProps> = props => {
    return (
        <div className="Main">
            {props.children}
        </div>
    );
}

export default Main