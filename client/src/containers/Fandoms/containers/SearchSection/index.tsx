import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Search from '../../../../components/UI/Search';
import SearchFilters from './containers/SearchFilters';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Desktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    }
  })
);


const SearchSection = () => {

    const classes = useStyles();
    const todo = () => {
        alert('test - Fandoms page')
    }
    return (
        <section className="Fandoms__SearchSection">
            <h1 className="Fandoms__SearchSection--header">Fandoms</h1>
            <div className={`Fandoms__SearchSection--description ${classes.Desktop}`}>
                <p className="marginDown">Welcome to our Fandoms page! Here you can find all of the fandoms in our DB,
                Get general Information about the Fandom or the <span>Fanfics</span> status and filter to find other fandoms you could like!</p>
                <p className="boldParagraph marginDown">[if user not signin] Registrer to the site in order to mark your favorite fandoms!</p>
                <p className="green">Are we missing some fandoms? please contact us with the name so we can add it</p>

            </div>
            <div className="Fandoms__SearchSection--SearchContainer">
                <div className="Fandoms__SearchSection--SearchContainer__Search">
                    <Search
                        className="Fandoms__SearchSection--SearchContainer__Search--SearchBox"
                        placeholder="Look up for your fandom..."
                        onclick={todo}
                    />
                </div>
                <SearchFilters classname="Fandoms__SearchSection--SearchContainer__FiltersBox"/>
            </div>
        </section>

    )
}

export default SearchSection
