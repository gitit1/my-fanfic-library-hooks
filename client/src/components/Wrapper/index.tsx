import React from 'react';
import Header from './components/Header';

const Wrapper = (props: any) => {

    return(
        <div>
            <Header />
            <div>{props.children}</div>
            <footer>footer</footer>
        </div>
    )
}

export default Wrapper